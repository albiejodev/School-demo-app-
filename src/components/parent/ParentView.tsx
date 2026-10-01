"use client";

import React from "react";
import ParentDashboard from "./ParentDashboard";
import AIAssistant from "./AIAssistant";
import { Card, CardContent } from "@/components/ui/card";

export default function ParentView({ activeTab }: { activeTab: string }) {
  if (activeTab === "dashboard") {
    return <ParentDashboard />;
  }
  
  if (activeTab === "ai-assistant") {
    return <AIAssistant />;
  }

  // Placeholder for other tabs
  return (
    <div className="flex flex-1 items-center justify-center h-full">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="text-2xl font-semibold mb-2 capitalize">{activeTab.replace('-', ' ')}</div>
          <p className="text-slate-500">This module is under development for the demo.</p>
        </CardContent>
      </Card>
    </div>
  );
}
