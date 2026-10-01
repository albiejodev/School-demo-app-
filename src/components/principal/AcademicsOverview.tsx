import React, { useState } from "react";
import { academicPerformanceByGrade, subjectPerformance, classPerformance, students } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { AIInsight } from "@/components/ui/ai-insight";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Sparkles, Save } from "lucide-react";

export default function AcademicsOverview({ onSelectStudent }: { onSelectStudent?: (s: any) => void }) {
  const [showModal, setShowModal] = useState(false);

  const studentsRequiringAttention = students.filter(s => s.academicAverage < 70).slice(0, 3);

  const handleGenerate = () => {
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto pb-12 animate-in fade-in duration-500">
      <div>
        <h1 className="text-[28px] font-bold tracking-tight text-foreground">Academic Performance</h1>
        <p className="text-[15px] text-muted-foreground mt-1">Understand performance across classes, subjects and assessments.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">School Average</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">76.4%</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Students Improving</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">68%</div>
        </Card>
        <Card className="p-5 border-destructive/20 bg-destructive/5">
          <div className="text-[13px] font-semibold text-destructive uppercase tracking-wider mb-2">Needs Attention</div>
          <div className="text-[32px] font-bold tracking-tight text-destructive leading-none mb-1">84</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Assessments</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">24</div>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-[17px] font-semibold text-foreground mb-4">Performance by Grade</h2>
          <div className="h-[280px] -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={academicPerformanceByGrade} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B", fontWeight: 500 }} dy={10} />
                <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B", fontWeight: 500 }} dx={-10} />
                <Tooltip 
                  cursor={{ fill: '#F5F8FF' }} 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5EAF2', boxShadow: '0 4px 20px rgba(30,64,175,0.06)', fontWeight: 600 }} 
                />
                <Bar dataKey="average" fill="var(--primary)" radius={[6, 6, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="flex flex-col gap-8">
          <AIInsight 
            title="ACADEMIC INSIGHT" 
            actionLabel="Generate intervention plan" 
            onClick={handleGenerate}
          >
            <p className="mb-2"><strong>Grade 9B requires attention.</strong></p>
            <p className="mb-2">The class average has declined from 72% to 64%. Mathematics accounts for most of the decline. 7 students have declined by more than 10%.</p>
            <p>Attendance is also 9% below the school average.</p>
          </AIInsight>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-[17px] font-semibold text-foreground mb-4">Subject Performance</h2>
          <Card className="p-0 overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-right">Average</TableHead>
                  <TableHead className="text-right">Previous</TableHead>
                  <TableHead className="text-right">Change</TableHead>
                  <TableHead className="text-right">{"< 40%"}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subjectPerformance.map((row) => (
                  <TableRow key={row.subject}>
                    <TableCell className="font-semibold text-foreground/90">{row.subject}</TableCell>
                    <TableCell className="text-muted-foreground text-right">{row.average}%</TableCell>
                    <TableCell className="text-muted-foreground text-right">{row.previous}%</TableCell>
                    <TableCell className={`font-semibold text-right ${row.change < 0 ? 'text-destructive' : 'text-success'}`}>
                      {row.change > 0 ? '+' : ''}{row.change}%
                    </TableCell>
                    <TableCell className="text-muted-foreground text-right">{row.studentsBelow40}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        <div>
          <h2 className="text-[17px] font-semibold text-foreground mb-4">Class Performance</h2>
          <Card className="p-0 overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead>Class</TableHead>
                  <TableHead className="text-right">Average</TableHead>
                  <TableHead className="text-right">Attendance</TableHead>
                  <TableHead className="text-right">Homework</TableHead>
                  <TableHead className="text-center">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classPerformance.map((row) => (
                  <TableRow key={row.class} className={row.class === '9B' ? 'bg-warning/5 hover:bg-warning/10' : ''}>
                    <TableCell className="font-semibold text-foreground/90">{row.class}</TableCell>
                    <TableCell className="text-muted-foreground text-right">{row.average}%</TableCell>
                    <TableCell className="text-muted-foreground text-right">{row.attendance}%</TableCell>
                    <TableCell className="text-muted-foreground text-right">{row.homework}%</TableCell>
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
      </div>
      
      <div>
        <h2 className="text-[17px] font-semibold text-foreground mb-4">Students Requiring Attention</h2>
        <Card className="p-0 overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Class</TableHead>
                <TableHead className="text-right">Average</TableHead>
                <TableHead className="text-right">Change</TableHead>
                <TableHead>Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentsRequiringAttention.map((s) => (
                <TableRow key={s.id} className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => onSelectStudent && onSelectStudent(s)}>
                  <TableCell className="font-semibold text-foreground/90">{s.name}</TableCell>
                  <TableCell className="text-muted-foreground">{s.class}</TableCell>
                  <TableCell className="text-muted-foreground text-right">{s.academicAverage}%</TableCell>
                  <TableCell className="font-bold text-destructive text-right">{s.academicAverage - s.previousAverage}%</TableCell>
                  <TableCell className="text-muted-foreground">Mathematics</TableCell>
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
              AI Intervention Plan
            </DialogTitle>
            <DialogDescription className="text-sm font-medium">
              Grade 9B Academic Recovery
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 bg-muted/30 rounded-lg p-4 border border-border">
            <ul className="list-disc pl-5 space-y-3 text-sm font-medium text-foreground/90 leading-relaxed">
              <li>Mathematics revision session</li>
              <li>Weekly assessment</li>
              <li>Individual support for 7 students</li>
              <li>Parent communication</li>
              <li>Review after 4 weeks</li>
            </ul>
          </div>
          <DialogFooter>
            <Button onClick={() => { setShowModal(false); toast.success("Intervention plan saved"); }} className="bg-action-gradient text-white font-semibold text-[14px] shadow-sm border-0">
              <Save className="mr-2 h-4 w-4" />
              Save Plan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
