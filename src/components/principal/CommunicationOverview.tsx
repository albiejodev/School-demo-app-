import React, { useState } from "react";
import { communications } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { AIInsight } from "@/components/ui/ai-insight";
import { Sparkles, Send, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function CommunicationOverview() {
  const [draftPrompt, setDraftPrompt] = useState("School will remain closed tomorrow due to heavy rain.");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedMessage(
        "### School Closure Notice\n\nDear Parents,\n\nDue to the expected heavy rainfall and for the safety of our students, the school will remain closed tomorrow.\n\nRegular classes will resume as scheduled on the following working day.\n\nThank you for your cooperation.\n\nRegards,\nNOVA School"
      );
      setIsGenerating(false);
    }, 1200);
  };

  const handleSendReminder = () => {
    toast.success("Reminder sent successfully.");
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto pb-12 animate-in fade-in duration-500">
      <div>
        <h1 className="text-[28px] font-bold tracking-tight text-foreground">Communication</h1>
        <p className="text-[15px] text-muted-foreground mt-1">Keep parents, teachers and students informed.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Messages sent</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">1,284</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Open rate</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">91%</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pending</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">12</div>
        </Card>
        <Card className="p-5">
          <div className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Scheduled</div>
          <div className="text-[32px] font-bold tracking-tight text-foreground leading-none mb-1">4</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h2 className="text-[17px] font-semibold text-foreground mb-4">Composer</h2>
            <Card className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-[13px] font-semibold text-foreground mb-2 block">Audience</label>
                  <select className="w-full h-10 rounded-lg border border-border bg-muted/30 px-3 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 transition-all">
                    <option>All Parents</option>
                    <option>Specific Class</option>
                    <option>Teachers</option>
                  </select>
                </div>
                <div>
                  <label className="text-[13px] font-semibold text-foreground mb-2 block">Channel</label>
                  <select className="w-full h-10 rounded-lg border border-border bg-muted/30 px-3 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 transition-all">
                    <option>Push + WhatsApp</option>
                    <option>Email</option>
                    <option>SMS</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="text-[12px] font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-[14px] h-[14px]" /> Write with AI
                </label>
                <div className="flex gap-3 mb-4">
                  <Input 
                    value={draftPrompt}
                    onChange={(e) => setDraftPrompt(e.target.value)}
                    className="flex-1 bg-muted/30 h-10 text-[14px] border-border shadow-sm focus-visible:ring-primary/20"
                  />
                  <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating}
                    className="bg-action-gradient text-white shadow-sm border-0 h-10 font-semibold px-6 hover:shadow-md transition-all"
                  >
                    {isGenerating ? "Generating..." : "Generate"}
                  </Button>
                </div>
                
                {generatedMessage && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <Textarea 
                      value={generatedMessage}
                      onChange={(e) => setGeneratedMessage(e.target.value)}
                      className="min-h-[160px] resize-none text-[14px] bg-muted/30 border-border focus-visible:ring-primary/20 mb-4 font-medium leading-relaxed rounded-lg"
                    />
                    <div className="flex justify-end gap-3">
                      <Button variant="outline" className="h-9 font-semibold text-[13px] border-border">Edit</Button>
                      <Button className="h-9 font-semibold text-[13px] bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => toast.success("Message ready to send.")}>
                        Use message
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground mb-4">Recent communications</h2>
            <Card className="p-0 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Audience</TableHead>
                    <TableHead>Channel</TableHead>
                    <TableHead>Sent</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {communications.map(comm => (
                    <TableRow key={comm.id}>
                      <TableCell className="font-semibold text-foreground/90">{comm.subject}</TableCell>
                      <TableCell className="text-muted-foreground">{comm.audience}</TableCell>
                      <TableCell className="text-muted-foreground">{comm.channel}</TableCell>
                      <TableCell className="text-muted-foreground">{comm.sent}</TableCell>
                      <TableCell>
                        <Badge variant={
                          comm.status === "Delivered" ? "success" :
                          comm.status === "Scheduled" ? "warning" :
                          "outline"
                        } className="uppercase tracking-widest text-[10px]">
                          {comm.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-[17px] font-semibold text-foreground mb-4">Communication Assistant</h2>
          <AIInsight 
            title="COMMUNICATION INSIGHT" 
            actionLabel="Send reminder" 
            onClick={handleSendReminder}
          >
            12 parents have not opened the latest Grade 9B announcement.
          </AIInsight>
        </div>
      </div>
    </div>
  );
}
