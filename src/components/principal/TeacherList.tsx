import React, { useState } from "react";
import { teachers, Teacher } from "@/data/mockData";
import { Search, Filter, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AIInsight } from "@/components/ui/ai-insight";

export default function TeacherList({ onSelectTeacher }: { onSelectTeacher?: (t: Teacher) => void }) {
  const [search, setSearch] = useState("");

  const filteredTeachers = teachers.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.department.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto animate-in fade-in duration-500 pb-12">
      <div>
        <h1 className="text-[28px] font-bold tracking-tight text-foreground">Teachers</h1>
        <p className="text-[15px] text-muted-foreground mt-1">Manage faculty, workload and performance.</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-3 h-[18px] w-[18px] text-muted-foreground" />
          <Input 
            placeholder="Search teachers..." 
            className="pl-10 bg-white border-border h-11 text-[14px] rounded-xl shadow-sm focus-visible:ring-2 focus-visible:ring-primary/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" className="bg-white border-border h-11 rounded-xl shadow-sm font-medium">
            <Filter className="h-[18px] w-[18px] mr-2 text-muted-foreground" />
            Filter
          </Button>
          <Button className="bg-action-gradient text-white h-11 rounded-xl shadow-sm border-0 font-semibold px-6 hover:shadow-md transition-all">
            <Plus className="h-[18px] w-[18px] mr-2" />
            Add teacher
          </Button>
        </div>
      </div>

      <Card className="p-0 overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow>
              <TableHead>Teacher</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Classes</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>Workload</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTeachers.map((teacher) => (
              <TableRow 
                key={teacher.id} 
                className="hover:bg-muted/50 cursor-pointer transition-colors"
                onClick={() => onSelectTeacher && onSelectTeacher(teacher)}
              >
                <TableCell className="font-semibold text-foreground/90">{teacher.name}</TableCell>
                <TableCell className="text-muted-foreground font-medium">{teacher.department}</TableCell>
                <TableCell className="text-muted-foreground">{teacher.classes.length} classes</TableCell>
                <TableCell className="font-semibold">{teacher.attendance}%</TableCell>
                <TableCell className="text-muted-foreground">{teacher.periods} periods</TableCell>
                <TableCell>
                  <Badge variant={teacher.status === 'Active' ? 'success' : 'outline'} className="uppercase tracking-widest text-[10px]">
                    {teacher.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {filteredTeachers.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="py-12 text-center text-muted-foreground font-medium">
                  No teachers found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>

      <AIInsight 
        title="AI OBSERVATION" 
        actionLabel="View analysis" 
        onClick={() => {}}
      >
        Anjali Menon currently has the highest Mathematics teaching load in the school. Class 9B performance has improved 8% under her instruction.
      </AIInsight>
    </div>
  );
}
