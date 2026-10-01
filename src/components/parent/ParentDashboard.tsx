"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, BookOpen, Clock, IndianRupee, Sparkles, BookMarked, User } from "lucide-react";
import { students } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { useTab } from "@/components/layout/AppLayout";
import { Badge } from "@/components/ui/badge";

export default function ParentDashboard() {
  const { setActiveTab } = useTab();
  const rahul = students.find(s => s.name === "Rahul Mathew");

  if (!rahul) return null;

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Good morning, Thomas</h1>
          <p className="text-slate-500 mt-1 text-lg flex items-center gap-2">
            <User className="h-5 w-5" />
            Child: <span className="font-semibold text-slate-700">{rahul.name}</span> • Class {rahul.class}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{rahul.attendance}%</div>
            <p className="text-xs text-slate-500 mt-1">
              Present 42 of 45 days
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Academic Average</CardTitle>
            <BookOpen className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{rahul.academicAverage}%</div>
            <p className="text-xs text-slate-500 mt-1">
              Class average: 75%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Pending Homework</CardTitle>
            <BookMarked className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">2</div>
            <p className="text-xs text-slate-500 mt-1">
              Due this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Fees Outstanding</CardTitle>
            <IndianRupee className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">₹{rahul.feeOutstanding.toLocaleString()}</div>
            <p className="text-xs text-rose-500 mt-1 font-medium">
              Due on 5th October
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today's Homework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
                <div>
                  <h4 className="font-semibold text-slate-900">Science — Photosynthesis</h4>
                  <p className="text-sm text-slate-500 mt-0.5 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Due tomorrow
                  </p>
                </div>
                <Badge variant="outline" className="text-amber-600 bg-amber-50 border-amber-200">
                  Incomplete
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
                <div>
                  <h4 className="font-semibold text-slate-900">Mathematics — Algebra</h4>
                  <p className="text-sm text-slate-500 mt-0.5 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Due Friday
                  </p>
                </div>
                <Badge variant="outline" className="text-amber-600 bg-amber-50 border-amber-200">
                  Incomplete
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-indigo-100 bg-indigo-50/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-indigo-600" />
                <CardTitle className="text-lg text-indigo-900">NOVA AI Assistant</CardTitle>
              </div>
              <Button size="sm" onClick={() => setActiveTab("ai-assistant")}>
                Open Chat
              </Button>
            </div>
            <CardDescription className="text-slate-600">Your intelligent school companion.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <p className="text-sm text-slate-700 font-medium mb-1">Try asking:</p>
              <button 
                onClick={() => setActiveTab("ai-assistant")} 
                className="text-left text-sm p-2 rounded bg-white border shadow-sm hover:bg-slate-50 transition-colors text-indigo-700"
              >
                "What subjects need attention?"
              </button>
              <button 
                onClick={() => setActiveTab("ai-assistant")} 
                className="text-left text-sm p-2 rounded bg-white border shadow-sm hover:bg-slate-50 transition-colors text-indigo-700"
              >
                "What homework does Rahul have today?"
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
