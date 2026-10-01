"use client";

import React, { useState } from "react";
import PrincipalDashboard from "./PrincipalDashboard";
import StudentList from "./StudentList";
import StudentProfile from "./StudentProfile";
import TeacherList from "./TeacherList";
import TeacherProfile from "./TeacherProfile";
import AttendanceOverview from "./AttendanceOverview";
import AcademicsOverview from "./AcademicsOverview";
import FeesOverview from "./FeesOverview";
import CommunicationOverview from "./CommunicationOverview";
import NovaIntelligence from "./NovaIntelligence";
import { Student, Teacher } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";

export default function PrincipalView({ activeTab }: { activeTab: string }) {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  // If a student is selected, we might want to override the active tab to show the profile
  // Or we can say if we are in 'students' tab and a student is selected, show profile.
  // Wait, if coming from 'dashboard', clicking 'View analysis' might navigate to 'students' tab and filter, or just open a specific view.
  // For simplicity, we can lift navigation state to this component or context, but since activeTab is passed as prop, 
  // maybe we can handle local overrides.
  
  // Let's create a local view state to handle drill-down.
  const [drillDown, setDrillDown] = useState<"analysis" | "profile" | null>(null);
  
  // Reset drillDown when activeTab changes
  React.useEffect(() => {
    setDrillDown(null);
    setSelectedStudent(null);
    setSelectedTeacher(null);
  }, [activeTab]);

  if (activeTab === "dashboard") {
    if (drillDown === "analysis") {
      return <StudentList defaultFilter="9B" onSelectStudent={(s) => { setSelectedStudent(s); setDrillDown("profile"); }} onBack={() => setDrillDown(null)} />;
    }
    if (drillDown === "profile" && selectedStudent) {
      return <StudentProfile student={selectedStudent} onBack={() => setDrillDown("analysis")} />;
    }
    return <PrincipalDashboard onViewAnalysis={() => setDrillDown("analysis")} />;
  }

  if (activeTab === "students") {
    if (selectedStudent) {
      return <StudentProfile student={selectedStudent} onBack={() => setSelectedStudent(null)} />;
    }
    return <StudentList onSelectStudent={setSelectedStudent} />;
  }

  if (activeTab === "teachers") {
    if (selectedTeacher) {
      return <TeacherProfile teacher={selectedTeacher} onBack={() => setSelectedTeacher(null)} />;
    }
    return <TeacherList onSelectTeacher={setSelectedTeacher} />;
  }

  if (activeTab === "attendance") {
    return <AttendanceOverview />;
  }

  if (activeTab === "academics") {
    if (selectedStudent) {
      return <StudentProfile student={selectedStudent} onBack={() => setSelectedStudent(null)} />;
    }
    return <AcademicsOverview onSelectStudent={setSelectedStudent} />;
  }

  if (activeTab === "fees") {
    return <FeesOverview />;
  }

  if (activeTab === "communication") {
    return <CommunicationOverview />;
  }

  if (activeTab === "ai-assistant") {
    return <NovaIntelligence />;
  }

  // Placeholder for other tabs
  return (
    <div className="flex flex-1 items-center justify-center h-full">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="text-2xl font-semibold mb-2 capitalize">{activeTab}</div>
          <p className="text-slate-500">This module is under development for the demo.</p>
        </CardContent>
      </Card>
    </div>
  );
}
