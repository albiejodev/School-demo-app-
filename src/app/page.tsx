"use client";

import AppLayout from "@/components/layout/AppLayout";
import SchoolWorkspace from "@/components/SchoolWorkspace";

function MainContent() {
  return <SchoolWorkspace />;
}

export default function Home() {
  return (
    <AppLayout>
      <MainContent />
    </AppLayout>
  );
}
