import React, { useState } from "react";
import { classAttendance, attendanceTrend, students } from "@/data/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { AIInsight } from "@/components/ui/ai-insight";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { generateParentMessage } from "@/services/aiService";
import { Sparkles, Send } from "lucide-react";

export default function AttendanceOverview() {
  const [showModal, setShowModal] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const chronicStudents = students.filter(s => s.attendance < 85);

  const handleGenerate = async () => {
    setIsGenerating(true);
    const msg = await generateParentMessage("your child");
    setMessageText(msg);
    setIsGenerating(false);
    setShowModal(true);
  };

  const handleSend = () => {
    setShowModal(false);
    toast.success("Message sent to parents successfully");
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto pb-12 animate-in fade-in duration-500">
      <div>
        <h1 className="text-[28px] font-bold tracking-tight text-foreground">Attendance Overview</h1>
        <p className="text-[15px] text-muted-foreground mt-1">Monitor daily attendance and long-term trends.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Today's Attendance</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">94.2%</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Present</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">1,176</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Absent</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">72</div>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-[17px] font-semibold text-foreground mb-4">Attendance Trend (30 Days)</h2>
          <div className="h-[280px] -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B", fontWeight: 500 }} dy={10} />
                <YAxis domain={[80, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B", fontWeight: 500 }} dx={-10} />
                <Tooltip 
                  cursor={{ stroke: '#E5EAF2', strokeWidth: 1 }} 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5EAF2', boxShadow: '0 4px 20px rgba(30,64,175,0.06)', fontWeight: 600 }} 
                />
                <Line type="monotone" dataKey="attendance" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4, fill: '#fff', stroke: 'var(--primary)', strokeWidth: 2 }} activeDot={{ r: 6, fill: 'var(--primary)' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="flex flex-col gap-8">
          <AIInsight 
            title="AI ATTENDANCE ANALYSIS" 
            actionLabel={isGenerating ? "Generating..." : "Generate parent communication"}
            onClick={handleGenerate}
          >
            Attendance has declined 3.4% over the last four weeks. Grade 9B shows the largest decline. 12 students have attendance below 85%. 5 students have missed more than 3 days this month.
          </AIInsight>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground mb-4">Students Requiring Attention</h2>
            <Card className="p-0 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Attendance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {chronicStudents.slice(0, 3).map((s) => (
                    <TableRow key={s.id}>
                      <TableCell className="font-semibold text-foreground/90">{s.name}</TableCell>
                      <TableCell className="text-muted-foreground">{s.class}</TableCell>
                      <TableCell className="text-destructive font-bold">{s.attendance}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-[17px] font-semibold text-foreground mb-4">Class Attendance</h2>
        <Card className="p-0 overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Class</TableHead>
                <TableHead className="text-right">Students</TableHead>
                <TableHead className="text-right">Present</TableHead>
                <TableHead className="text-right">Absent</TableHead>
                <TableHead className="text-right">Attendance</TableHead>
                <TableHead className="text-center">Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classAttendance.map((row) => (
                <TableRow key={row.class} className={row.class === '9B' ? 'bg-warning/5 hover:bg-warning/10' : ''}>
                  <TableCell className="font-semibold text-foreground/90">{row.class}</TableCell>
                  <TableCell className="text-muted-foreground text-right">{row.students}</TableCell>
                  <TableCell className="text-muted-foreground text-right">{row.present}</TableCell>
                  <TableCell className="text-muted-foreground text-right">{row.absent}</TableCell>
                  <TableCell className={`font-semibold text-right ${row.attendance < 90 ? 'text-destructive' : 'text-foreground'}`}>{row.attendance}%</TableCell>
                  <TableCell className="text-center">
                    {row.trend === 'up' ? (
                      <span className="text-success font-bold">↑</span>
                    ) : (
                      <span className="text-destructive font-bold">↓</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[425px] border-border shadow-[0_8px_30px_rgba(30,64,175,0.08)] rounded-[16px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-[18px] h-[18px] text-primary" />
              Parent Communication
            </DialogTitle>
            <DialogDescription className="text-sm font-medium">
              Review AI-generated message before sending.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea 
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="min-h-[160px] resize-none text-[14px] bg-muted/30 border-border focus-visible:ring-primary/20 font-medium leading-relaxed rounded-lg"
            />
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" className="font-semibold text-[14px] border-border" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button className="bg-action-gradient text-white font-semibold text-[14px] shadow-sm border-0" onClick={handleSend}>
              <Send className="mr-2 h-4 w-4" />
              Send to parents
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
