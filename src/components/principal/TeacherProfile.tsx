import React from "react";
import { Teacher } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

export default function TeacherProfile({ teacher, onBack }: { teacher: Teacher, onBack: () => void }) {
  const workloadData = [
    { day: "Mon", periods: 5 },
    { day: "Tue", periods: 4 },
    { day: "Wed", periods: 3 },
    { day: "Thu", periods: 4 },
    { day: "Fri", periods: 2 },
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto animate-in fade-in duration-500 pb-12">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-muted-foreground hover:bg-white/50 h-10 w-10">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-[28px] font-bold tracking-tight text-foreground">{teacher.name}</h1>
          <p className="text-[15px] text-muted-foreground mt-1">{teacher.department} Teacher</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Classes</div>
          <div className="text-[24px] font-bold tracking-tight text-foreground">{teacher.classes.join(", ")}</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Weekly Workload</div>
          <div className="text-[24px] font-bold tracking-tight text-foreground">{teacher.periods} <span className="text-[16px] text-muted-foreground font-medium">/ 24</span></div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Attendance</div>
          <div className="text-[24px] font-bold tracking-tight text-foreground">{teacher.attendance}%</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Performance</div>
          <div className="text-[24px] font-bold tracking-tight text-foreground">{teacher.performance}%</div>
        </Card>
      </div>

      <Card className="p-0 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-border bg-muted/30">
          <h2 className="text-[17px] font-semibold text-foreground">Weekly Workload</h2>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-8">
          <div className="flex-1 h-[280px] -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workloadData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B", fontWeight: 500 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B", fontWeight: 500 }} dx={-10} />
                <Tooltip 
                  cursor={{ fill: '#F5F8FF' }} 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5EAF2', boxShadow: '0 4px 20px rgba(30,64,175,0.06)', fontWeight: 600 }} 
                />
                <Bar dataKey="periods" fill="var(--primary)" radius={[6, 6, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-64 space-y-6 pt-4 border-l border-border pl-8">
            <div>
              <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Current Workload</div>
              <div className="text-[24px] font-bold tracking-tight text-foreground">{teacher.periods} periods</div>
            </div>
            <div className="w-12 h-px bg-border my-2"></div>
            <div>
              <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">School Average</div>
              <div className="text-[24px] font-bold tracking-tight text-foreground">16 periods</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
