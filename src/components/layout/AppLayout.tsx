"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { useRole, type Role } from "@/components/RoleProvider";
import { Bell, BookOpen, Bus, CalendarDays, ChevronDown, ClipboardCheck, CreditCard, GraduationCap, LayoutDashboard, Library, Menu, MessageSquare, Package, Search, Settings2, ShieldCheck, Sparkles, Users, UserRound, Wallet, X } from "lucide-react";

type TabContextValue = { activeTab: string; setActiveTab: (tab: string) => void };
const TabContext = createContext<TabContextValue>({ activeTab: "dashboard", setActiveTab: () => {} });
export const useTab = () => useContext(TabContext);

const navigation: Record<Role, { group: string; label: string; id: string; icon: React.ElementType }[]> = {
  principal: [
    { group: "Workspace", label: "Overview", id: "dashboard", icon: LayoutDashboard },
    { group: "People", label: "Students", id: "students", icon: Users },
    { group: "People", label: "Teachers & staff", id: "teachers", icon: GraduationCap },
    { group: "Learning", label: "Academics", id: "academics", icon: BookOpen },
    { group: "Learning", label: "Attendance", id: "attendance", icon: ClipboardCheck },
    { group: "Operations", label: "Finance & fees", id: "fees", icon: Wallet },
    { group: "Operations", label: "Events & calendar", id: "events", icon: CalendarDays },
    { group: "Operations", label: "Communications", id: "communication", icon: MessageSquare },
    { group: "More modules", label: "Campus & transport", id: "campus", icon: Bus },
    { group: "More modules", label: "Library & inventory", id: "resources", icon: Library },
    { group: "More modules", label: "AI insights & reports", id: "ai-assistant", icon: Sparkles },
  ],
  teacher: [
    { group: "My workspace", label: "Overview", id: "dashboard", icon: LayoutDashboard },
    { group: "Teaching", label: "My classes", id: "my-classes", icon: Users },
    { group: "Teaching", label: "Attendance", id: "attendance", icon: ClipboardCheck },
    { group: "Teaching", label: "Notices & homework", id: "homework", icon: MessageSquare },
    { group: "Teaching", label: "Assessments", id: "assessments", icon: BookOpen },
    { group: "Teaching", label: "Timetable", id: "timetable", icon: CalendarDays },
    { group: "Assistant", label: "AI teaching studio", id: "ai-tools", icon: Sparkles },
  ],
  parent: [
    { group: "Family", label: "Overview", id: "dashboard", icon: LayoutDashboard },
    { group: "Family", label: "My child", id: "my-child", icon: UserRound },
    { group: "Family", label: "Attendance", id: "attendance", icon: ClipboardCheck },
    { group: "Learning", label: "Progress & homework", id: "academics", icon: BookOpen },
    { group: "Learning", label: "School notices", id: "notices", icon: MessageSquare },
    { group: "Payments", label: "Fees & receipts", id: "fees", icon: CreditCard },
    { group: "Family", label: "Teachers & timetable", id: "teachers", icon: GraduationCap },
    { group: "Assistant", label: "NOVA family guide", id: "ai-assistant", icon: Sparkles },
  ],
};

const roleNames: Record<Role, string> = { principal: "Dr. Meera Nair", teacher: "Anjali Menon", parent: "Thomas Mathew" };
const roleTitles: Record<Role, string> = { principal: "School principal", teacher: "Class teacher · 9B", parent: "Parent · Rahul Mathew" };

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { role, setRole } = useRole();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const grouped = useMemo(() => Array.from(new Set(navigation[role].map((item) => item.group))), [role]);
  const changeRole = (next: Role) => { setRole(next); setActiveTab("dashboard"); setMobileOpen(false); };

  const Sidebar = () => <div className="flex h-full flex-col bg-white">
    <div className="flex h-[78px] items-center gap-3 border-b border-slate-100 px-6">
      <div className="brand-mark"><GraduationCap size={21} strokeWidth={2.2} /></div>
      <div><div className="text-[16px] font-bold tracking-[-.04em] text-slate-900">northstar<span className="text-blue-600">.</span></div><div className="text-[10px] font-semibold uppercase tracking-[.16em] text-slate-400">School intelligence</div></div>
    </div>
    <div className="mx-4 mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-3">
      <div className="flex items-center gap-2"><span className="live-dot"/><span className="text-[11px] font-bold uppercase tracking-[.13em] text-blue-700">Live demo workspace</span></div>
      <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">A connected view of the whole school, powered by NOVA AI.</p>
    </div>
    <nav className="flex-1 overflow-y-auto px-3 py-5">
      {grouped.map((group) => <div key={group} className="mb-5">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">{group}</div>
        <div className="space-y-1">{navigation[role].filter((item) => item.group === group).map(({ id, label, icon: Icon }) => <button key={id} onClick={() => { setActiveTab(id); setMobileOpen(false); }} className={`nav-item ${activeTab === id ? "nav-item-active" : ""}`}><Icon size={17} strokeWidth={activeTab === id ? 2.1 : 1.8}/><span>{label}</span>{id === "communication" && <i className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500"/>}</button>)}</div>
      </div>)}
    </nav>
    <div className="border-t border-slate-100 p-3">
      <button className="flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition hover:bg-slate-50"><div className="avatar-chip">{roleNames[role].split(" ").slice(-1)[0][0]}</div><div className="min-w-0 flex-1"><div className="truncate text-[12px] font-semibold text-slate-800">{roleNames[role]}</div><div className="truncate text-[10px] text-slate-400">{roleTitles[role]}</div></div><Settings2 size={15} className="text-slate-400"/></button>
    </div>
  </div>;

  return <TabContext.Provider value={{ activeTab, setActiveTab }}>
    <div className="app-shell">
      <aside className="app-sidebar"><Sidebar/></aside>
      {mobileOpen && <div className="mobile-backdrop" onClick={() => setMobileOpen(false)}><aside className="mobile-sidebar" onClick={(e) => e.stopPropagation()}><button className="mobile-close" onClick={() => setMobileOpen(false)}><X size={19}/></button><Sidebar/></aside></div>}
      <div className="app-main">
        <header className="topbar">
          <button className="icon-button mobile-menu" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={19}/></button>
          <div className="hidden md:block"><div className="text-[11px] font-medium text-slate-400">NORTHSTAR ACADEMY <span className="mx-1.5 text-slate-300">/</span><span className="capitalize text-slate-600">{activeTab.replaceAll("-", " ")}</span></div></div>
          <div className="top-search"><Search size={16}/><input placeholder="Search students, classes, notices…" aria-label="Search"/><kbd>⌘ K</kbd></div>
          <button className="icon-button notification-button" aria-label="Notifications"><Bell size={18}/><i/></button>
          <div className="role-select-wrap"><ShieldCheck size={15}/><select aria-label="Switch demo role" value={role} onChange={(e) => changeRole(e.target.value as Role)}><option value="principal">Principal view</option><option value="teacher">Teacher view</option><option value="parent">Parent view</option></select><ChevronDown size={13}/></div>
        </header>
        <main className="workspace-content">{children}</main>
      </div>
    </div>
  </TabContext.Provider>;
}
