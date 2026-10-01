import React, { useState } from "react";
import { Student, students, classes } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface StudentListProps {
  onSelectStudent: (student: Student) => void;
  defaultFilter?: string;
  onBack?: () => void;
}

export default function StudentList({ onSelectStudent, defaultFilter, onBack }: StudentListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState<string>(defaultFilter || "All");

  const filteredStudents = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = classFilter === "All" || s.class === classFilter;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto animate-in fade-in duration-500 pb-12">
      <div className="flex items-center gap-4">
        {onBack && (
          <Button variant="ghost" size="icon" onClick={onBack} className="text-muted-foreground hover:bg-white/50 h-10 w-10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <div>
          <h1 className="text-[28px] font-bold tracking-tight text-foreground">Students</h1>
          <p className="text-[15px] text-muted-foreground mt-1">Manage and monitor student performance.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-3 h-[18px] w-[18px] text-muted-foreground" />
          <Input 
            placeholder="Search students..." 
            className="pl-10 bg-white border-border h-11 text-[14px] rounded-xl shadow-sm focus-visible:ring-2 focus-visible:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <Select value={classFilter} onValueChange={(val) => setClassFilter(val || "All")}>
            <SelectTrigger className="w-full sm:w-[150px] h-11 text-[14px] font-medium bg-white border-border rounded-xl shadow-sm">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Classes</SelectItem>
              {classes.map(c => (
                <SelectItem key={c} value={c}>Class {c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="p-0 overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Class</TableHead>
              <TableHead className="text-right">Attendance</TableHead>
              <TableHead className="text-right">Academic Avg</TableHead>
              <TableHead>Fee Status</TableHead>
              <TableHead>Risk</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12 text-muted-foreground font-medium">
                  No students found.
                </TableCell>
              </TableRow>
            ) : (
              filteredStudents.map((student) => (
                <TableRow 
                  key={student.id} 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => onSelectStudent(student)}
                >
                  <TableCell className="font-semibold text-foreground/90">{student.name}</TableCell>
                  <TableCell className="text-muted-foreground font-medium">{student.class}</TableCell>
                  <TableCell className="text-right">
                    <span className={`font-semibold ${student.attendance < 85 ? "text-destructive" : "text-foreground"}`}>
                      {student.attendance}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className={`font-semibold ${student.academicAverage < 70 ? "text-warning" : "text-foreground"}`}>
                      {student.academicAverage}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      student.feeStatus === "Paid" ? "success" :
                      student.feeStatus === "Pending" ? "warning" :
                      "destructive"
                    } className="uppercase tracking-widest text-[10px]">
                      {student.feeStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {student.risk === "Low" && <span className="text-success font-semibold text-[13px]">Low</span>}
                    {student.risk === "Medium" && <span className="text-warning font-semibold text-[13px]">Medium</span>}
                    {student.risk === "High" && <span className="text-destructive font-semibold text-[13px]">High</span>}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
