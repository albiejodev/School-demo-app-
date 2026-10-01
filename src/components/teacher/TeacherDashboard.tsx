"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, BookOpen, FileText, Sparkles, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTab } from "@/components/layout/AppLayout";

export default function TeacherDashboard() {
  const { setActiveTab } = useTab();

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Good morning, Anjali</h1>
        <p className="text-slate-500 mt-1 text-lg">Class Teacher: 9B</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Quick Actions */}
        <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab("attendance")}>
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Users className="h-5 w-5 text-indigo-600" />
              </div>
              <CardTitle className="text-lg">Take Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">Mark daily attendance for Class 9B.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab("homework")}>
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <BookOpen className="h-5 w-5 text-emerald-600" />
              </div>
              <CardTitle className="text-lg">Create Homework</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">Assign and manage student homework.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab("ai-tools")}>
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="p-2 bg-fuchsia-100 rounded-lg">
                <Sparkles className="h-5 w-5 text-fuchsia-600" />
              </div>
              <CardTitle className="text-lg">AI Lesson Planner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">Generate structured lesson plans instantly.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab("ai-tools")}>
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="p-2 bg-sky-100 rounded-lg">
                <FileText className="h-5 w-5 text-sky-600" />
              </div>
              <CardTitle className="text-lg">Question Paper</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">AI-powered question paper generator.</p>
            </CardContent>
          </Card>
        </div>

        {/* Schedule */}
        <div className="flex flex-col">
          <Card className="flex-1">
            <CardHeader className="pb-3 border-b">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-slate-500" />
                <CardTitle className="text-lg">Today's Schedule</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="relative border-l border-slate-200 ml-3 space-y-6 pb-2">
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[6.5px] top-1 ring-4 ring-white"></div>
                  <p className="text-sm font-semibold text-slate-900">09:00 AM</p>
                  <p className="text-sm text-slate-600 mt-0.5">Mathematics (9B)</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-white border-2 border-slate-300 rounded-full -left-[6.5px] top-1 ring-4 ring-white"></div>
                  <p className="text-sm font-semibold text-slate-900">10:00 AM</p>
                  <p className="text-sm text-slate-600 mt-0.5">Mathematics (8A)</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-white border-2 border-slate-300 rounded-full -left-[6.5px] top-1 ring-4 ring-white"></div>
                  <p className="text-sm font-semibold text-slate-900">11:30 AM</p>
                  <p className="text-sm text-slate-600 mt-0.5">Class Teacher Period (9B)</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-white border-2 border-slate-300 rounded-full -left-[6.5px] top-1 ring-4 ring-white"></div>
                  <p className="text-sm font-semibold text-slate-900">01:30 PM</p>
                  <p className="text-sm text-slate-600 mt-0.5">Mathematics (10A)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
