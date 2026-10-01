import React, { useState } from "react";
import { feesCollection, students } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { AIInsight } from "@/components/ui/ai-insight";
import { ArrowRight, BellRing, Mail, Sparkles } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function FeesOverview() {
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [messageDraft, setMessageDraft] = useState(
    "Dear Parent,\n\nThis is a reminder that the school fee payment for the current term is pending. Kindly complete the payment at your earliest convenience.\n\nRegards,\nNOVA School"
  );
  
  const overdueStudents = students.filter(s => s.feeStatus === "Overdue");

  const handleSendReminder = () => {
    setIsReminderOpen(false);
    toast.success("18 payment reminders scheduled.");
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto pb-12 animate-in fade-in duration-500">
      <div>
        <h1 className="text-[28px] font-bold tracking-tight text-foreground">Fees</h1>
        <p className="text-[15px] text-muted-foreground mt-1">Track collections, outstanding balances and payment activity.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total collection</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">₹42.8L</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Outstanding</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">₹6.4L</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Collection rate</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">87.2%</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Overdue accounts</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">18</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h2 className="text-[17px] font-semibold text-foreground mb-4">Collection Overview</h2>
            <Card className="p-6">
              <div className="h-[280px] -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={feesCollection} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B', fontWeight: 500 }} dy={10} />
                    <YAxis 
                      tickFormatter={(value) => `₹${value / 100000}L`}
                      axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B', fontWeight: 500 }} dx={-10} 
                    />
                    <Tooltip 
                      cursor={{ fill: '#F5F8FF' }} 
                      contentStyle={{ borderRadius: '12px', border: '1px solid #E5EAF2', boxShadow: '0 4px 20px rgba(30,64,175,0.06)', fontWeight: 600 }} 
                      formatter={(value: any) => [`₹${(Number(value) / 100000).toFixed(1)}L`, 'Collection']}
                    />
                    <Bar dataKey="amount" fill="var(--primary)" radius={[6, 6, 0, 0]} maxBarSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground mb-4">Outstanding Fees</h2>
            <Card className="p-0 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Total Fee</TableHead>
                    <TableHead>Paid</TableHead>
                    <TableHead>Outstanding</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overdueStudents.map(student => (
                    <TableRow key={student.id}>
                      <TableCell className="font-semibold text-foreground/90">{student.name}</TableCell>
                      <TableCell className="text-muted-foreground">{student.class}</TableCell>
                      <TableCell className="text-foreground">₹48,000</TableCell>
                      <TableCell className="text-success">₹{(48000 - student.feeOutstanding).toLocaleString()}</TableCell>
                      <TableCell className="text-destructive font-semibold">₹{student.feeOutstanding.toLocaleString()}</TableCell>
                      <TableCell className="text-muted-foreground">Sep 30</TableCell>
                      <TableCell>
                        <Badge variant="destructive" className="uppercase tracking-widest text-[10px]">
                          {student.feeStatus}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* Add a paid example just to show variety */}
                  <TableRow>
                    <TableCell className="font-semibold text-foreground/90">Meera Joseph</TableCell>
                    <TableCell className="text-muted-foreground">8A</TableCell>
                    <TableCell className="text-foreground">₹42,000</TableCell>
                    <TableCell className="text-success">₹42,000</TableCell>
                    <TableCell className="text-muted-foreground">₹0</TableCell>
                    <TableCell className="text-muted-foreground">—</TableCell>
                    <TableCell>
                      <Badge variant="success" className="uppercase tracking-widest text-[10px]">
                        Paid
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-[17px] font-semibold text-foreground mb-4">AI Collection Insight</h2>
          <AIInsight 
            title="COLLECTION INSIGHT" 
            actionLabel="Review overdue accounts" 
            onClick={() => setIsReminderOpen(true)}
          >
            Fee collection is 7% below the expected target for September.
            <br/><br/>
            18 accounts are overdue by more than 30 days.
            <br/><br/>
            5 accounts show repeated delayed-payment patterns.
          </AIInsight>
        </div>
      </div>

      <Dialog open={isReminderOpen} onOpenChange={setIsReminderOpen}>
        <DialogContent className="sm:max-w-md border-border shadow-[0_8px_30px_rgba(30,64,175,0.08)] rounded-[16px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-[18px] h-[18px] text-primary" />
              AI-Generated Parent Reminders
            </DialogTitle>
            <DialogDescription className="text-sm font-medium">
              Sending to 18 overdue accounts.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea 
              className="min-h-[160px] resize-none text-[14px] bg-muted/30 border-border focus-visible:ring-primary/20 font-medium leading-relaxed rounded-lg" 
              value={messageDraft}
              onChange={(e) => setMessageDraft(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" className="font-semibold text-[14px] border-border" onClick={() => setIsReminderOpen(false)}>Edit</Button>
            <Button className="bg-action-gradient text-white font-semibold text-[14px] shadow-sm border-0" onClick={handleSendReminder}>
              <BellRing className="mr-2 h-4 w-4" />
              Send to selected parents
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
