import React, { useState } from "react";
import { Student } from "@/data/mockData";
import { ArrowLeft, MessageSquare, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { generateParentMessage } from "@/services/aiService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function StudentProfile({ student, onBack }: { student: Student, onBack: () => void }) {
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateMessage = async () => {
    setIsMessageDialogOpen(true);
    setIsGenerating(true);
    setGeneratedMessage("");
    try {
      const msg = await generateParentMessage(student.name);
      setGeneratedMessage(msg);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSendMessage = () => {
    setIsMessageDialogOpen(false);
    toast.success(`Message sent successfully to ${student.name}'s parent.`);
  };

  const isDeclining = student.academicAverage < student.previousAverage;
  const declineAmount = student.previousAverage - student.academicAverage;

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto animate-in fade-in duration-500 pb-12">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-muted-foreground hover:bg-white/50 h-10 w-10">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-[28px] font-bold tracking-tight text-foreground">{student.name}</h1>
          <p className="text-[15px] text-muted-foreground mt-1">Class {student.class} • Student ID: {student.id.toUpperCase()}</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Left Column: Quick Stats */}
        <div className="flex flex-col gap-6">
          <Card className="p-0 overflow-hidden">
            <div className="px-6 py-4 bg-muted/30 border-b border-border">
              <h2 className="text-[15px] font-semibold">Overview</h2>
            </div>
            <div className="px-6 py-2">
              <div className="flex justify-between items-center py-4 border-b border-border/50 text-[14px]">
                <span className="text-muted-foreground font-medium">Attendance</span>
                <span className={`font-bold ${student.attendance < 85 ? 'text-destructive' : 'text-foreground'}`}>
                  {student.attendance}%
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border/50 text-[14px]">
                <span className="text-muted-foreground font-medium">Academic Average</span>
                <span className={`font-bold ${student.academicAverage < 70 ? 'text-warning' : 'text-foreground'}`}>
                  {student.academicAverage}%
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border/50 text-[14px]">
                <span className="text-muted-foreground font-medium">Previous Avg</span>
                <span className="font-bold text-foreground">{student.previousAverage}%</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border/50 text-[14px]">
                <span className="text-muted-foreground font-medium">Homework Completion</span>
                <span className="font-bold text-foreground">{student.homeworkCompletion}%</span>
              </div>
              <div className="flex justify-between items-center py-4 text-[14px]">
                <span className="text-muted-foreground font-medium">Fee Status</span>
                <Badge variant={
                  student.feeStatus === "Paid" ? "success" :
                  student.feeStatus === "Pending" ? "warning" :
                  "destructive"
                } className="uppercase tracking-widest text-[10px]">
                  {student.feeStatus}
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: AI Insights & Actions */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Card className="p-6 relative overflow-hidden group hover:shadow-md transition-all duration-300 hover:border-primary/20">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-400 to-blue-500 opacity-80" />
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-1.5">
              <Sparkles className="w-[14px] h-[14px]" /> AI Insight
            </h3>
            
            <div className="text-[15px] text-foreground/90 leading-relaxed space-y-3 mb-6 font-medium">
              {isDeclining ? (
                <>
                  <p>{student.name}'s academic performance has declined by {declineAmount}% compared with the previous assessment.</p>
                  <p>The largest decline is in Mathematics. Attendance has also fallen from {student.attendance + 12}% to {student.attendance}% over the last six weeks.</p>
                </>
              ) : (
                <>
                  <p>{student.name} is showing consistent performance across all subjects.</p>
                  <p>Attendance remains excellent at {student.attendance}%. No immediate interventions are required at this time.</p>
                </>
              )}
            </div>

            {isDeclining && (
              <>
                <div className="w-full h-px bg-border my-6" />
                <h4 className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Recommended Actions</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-[14px] font-medium text-foreground/80">
                    <div className="h-2 w-2 rounded-full bg-primary/60"></div>
                    Schedule mathematics intervention
                  </li>
                  <li className="flex items-center gap-3 text-[14px] font-medium text-foreground/80">
                    <div className="h-2 w-2 rounded-full bg-primary/60"></div>
                    Contact parent regarding attendance
                  </li>
                  <li className="flex items-center gap-3 text-[14px] font-medium text-foreground/80">
                    <div className="h-2 w-2 rounded-full bg-primary/60"></div>
                    Monitor attendance closely
                  </li>
                </ul>
                
                <Button onClick={handleGenerateMessage} className="bg-action-gradient text-white h-10 px-6 font-semibold shadow-sm border-0 hover:shadow-md transition-all">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Generate parent message
                </Button>
              </>
            )}
          </Card>
        </div>
      </div>

      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
        <DialogContent className="sm:max-w-md border-border shadow-[0_8px_30px_rgba(30,64,175,0.08)] rounded-[16px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-[18px] h-[18px] text-primary" />
              AI Generated Message
            </DialogTitle>
            <DialogDescription className="text-sm font-medium">
              Review and edit the message before sending to {student.name}'s parent.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-10 space-y-4 bg-muted/20 rounded-lg">
                <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
                <p className="text-[13px] font-medium text-muted-foreground">Drafting message based on recent metrics...</p>
              </div>
            ) : (
              <Textarea 
                className="min-h-[160px] resize-none text-[14px] bg-muted/30 border-border focus-visible:ring-primary/20 font-medium leading-relaxed rounded-lg" 
                value={generatedMessage}
                onChange={(e) => setGeneratedMessage(e.target.value)}
              />
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" className="font-semibold text-[14px] border-border" onClick={() => setIsMessageDialogOpen(false)} disabled={isGenerating}>Cancel</Button>
            <Button onClick={handleSendMessage} disabled={isGenerating} className="bg-action-gradient text-white font-semibold text-[14px] shadow-sm border-0">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
