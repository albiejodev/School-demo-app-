import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { attendanceTrend, recentActivities, mockInsights } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AIInsight } from "@/components/ui/ai-insight";
import { Sparkles, Plus, FileText, CheckCircle2, Megaphone, ArrowRight } from "lucide-react";

export default function PrincipalDashboard({ onViewAnalysis }: { onViewAnalysis?: () => void }) {
  const currentDate = new Date().toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto pb-12 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-[28px] font-bold tracking-tight text-foreground">Good morning, Principal</h1>
        <p className="text-[15px] text-muted-foreground mt-1">{currentDate} &middot; Here's what needs your attention today.</p>
      </div>

      {/* AI School Overview */}
      <section className="mb-10">
        <div className="relative overflow-hidden rounded-[16px] bg-ai-gradient border border-border shadow-[0_8px_30px_rgba(30,64,175,0.08)] p-8">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-[18px] h-[18px] text-primary" />
                <h2 className="text-[12px] font-bold text-primary uppercase tracking-widest">AI School Overview</h2>
              </div>
              <p className="text-[18px] text-foreground/90 leading-relaxed font-semibold">
                Your school is performing well overall, but 3 areas need attention today.
              </p>
              <ul className="mt-5 space-y-3 text-[14px] text-foreground/80 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-warning" />
                  Attendance in Grade 9B is trending down.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                  Mathematics performance has declined 11%.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-warning" />
                  18 fee accounts are overdue.
                </li>
              </ul>
              <Button className="mt-8 bg-action-gradient text-white border-0 shadow-[0_4px_14px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(37,99,235,0.5)] hover:scale-[1.02] rounded-lg px-6 h-10 font-semibold">
                Review insights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-5 hover:border-primary/30 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors">Students</div>
            </div>
            <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-3">1,248</div>
            <div className="flex items-center gap-2">
              <div className="text-[12px] text-success font-semibold bg-success/10 px-2 py-0.5 rounded-md">+3.2%</div>
              <span className="text-[12px] text-muted-foreground font-medium">this month</span>
            </div>
          </Card>
          
          <Card className="p-5 hover:border-primary/30 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors">Attendance</div>
            </div>
            <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-3">94.2%</div>
            <div className="flex items-center gap-2">
              <div className="text-[12px] text-success font-semibold bg-success/10 px-2 py-0.5 rounded-md">+1.8%</div>
              <span className="text-[12px] text-muted-foreground font-medium">this week</span>
            </div>
          </Card>

          <Card className="p-5 hover:border-primary/30 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors">Academic</div>
            </div>
            <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-3">76.4%</div>
            <div className="flex items-center gap-2">
              <div className="text-[12px] text-destructive font-semibold bg-destructive/10 px-2 py-0.5 rounded-md">-2.1%</div>
              <span className="text-[12px] text-muted-foreground font-medium">vs last term</span>
            </div>
          </Card>

          <Card className="p-5 hover:border-primary/30 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors">Fees</div>
            </div>
            <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-3">₹42.8L</div>
            <div className="flex items-center gap-2">
              <div className="text-[12px] text-success font-semibold bg-success/10 px-2 py-0.5 rounded-md">+₹2.1L</div>
              <span className="text-[12px] text-muted-foreground font-medium">collected</span>
            </div>
          </Card>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <Card className="p-6">
            <h2 className="text-[17px] font-semibold text-foreground mb-6">School Performance</h2>
            <div className="h-[280px] -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceTrend}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B', fontWeight: 500 }} dy={10} />
                  <YAxis domain={['dataMin - 1', 'dataMax + 1']} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B', fontWeight: 500 }} dx={-10} />
                  <Tooltip 
                    cursor={{ stroke: '#E5EAF2', strokeWidth: 1 }} 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #E5EAF2', boxShadow: '0 4px 20px rgba(30,64,175,0.06)', fontWeight: 600 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="var(--primary)" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: '#fff', stroke: 'var(--primary)', strokeWidth: 2 }} 
                    activeDot={{ r: 6, fill: 'var(--primary)' }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Quick Actions Area */}
          <div>
            <h2 className="text-[17px] font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="bg-white text-[14px] font-semibold border-border shadow-sm hover:border-primary/30 hover:text-primary transition-all h-10 rounded-lg px-4">
                <Plus className="w-[18px] h-[18px] mr-2 text-muted-foreground" /> Add student
              </Button>
              <Button variant="outline" className="bg-white text-[14px] font-semibold border-border shadow-sm hover:border-primary/30 hover:text-primary transition-all h-10 rounded-lg px-4">
                <Plus className="w-[18px] h-[18px] mr-2 text-muted-foreground" /> Add teacher
              </Button>
              <Button variant="outline" className="bg-white text-[14px] font-semibold border-border shadow-sm hover:border-primary/30 hover:text-primary transition-all h-10 rounded-lg px-4">
                <CheckCircle2 className="w-[18px] h-[18px] mr-2 text-muted-foreground" /> Take attendance
              </Button>
              <Button variant="outline" className="bg-white text-[14px] font-semibold border-border shadow-sm hover:border-primary/30 hover:text-primary transition-all h-10 rounded-lg px-4">
                <Megaphone className="w-[18px] h-[18px] mr-2 text-muted-foreground" /> Announcement
              </Button>
              <Button variant="outline" className="bg-white text-[14px] font-semibold border-border shadow-sm hover:border-primary/30 text-primary transition-all h-10 rounded-lg px-4 group">
                <Sparkles className="w-[18px] h-[18px] mr-2 text-primary group-hover:scale-110 transition-transform" /> AI Report
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-[17px] font-semibold text-foreground mb-4">AI Insights</h2>
            <div className="space-y-4">
              <AIInsight title="ATTENDANCE SIGNAL" actionLabel="Review students">
                Grade 9B attendance has declined 5.8% over the last four weeks. 12 students may require attention.
              </AIInsight>
              <AIInsight title="ACADEMIC SIGNAL" actionLabel="Analyze performance" onClick={onViewAnalysis}>
                Mathematics performance in Grade 9B is 11% below the school average.
              </AIInsight>
              <AIInsight title="FINANCE SIGNAL" actionLabel="Review collection">
                18 accounts have remained overdue for more than 30 days.
              </AIInsight>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-[17px] font-semibold text-foreground mb-4">Recent Activity</h2>
            <Card className="p-1">
              <div className="px-4 py-2 space-y-4">
                {recentActivities.map((activity, idx) => (
                  <div key={activity.id} className="flex items-start gap-4 py-3 border-b border-border/50 last:border-0 group">
                    <div className="mt-1 w-2 h-2 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors shrink-0" />
                    <div>
                      <span className="block font-medium text-[14px] text-foreground/90 leading-snug">{activity.text}</span>
                      <span className="text-[12px] font-medium text-muted-foreground mt-1 block">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
