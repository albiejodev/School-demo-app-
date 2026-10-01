"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Send, CheckCircle2 } from "lucide-react";
import { generateLessonPlan } from "@/services/aiService";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AILessonPlanner() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<any>(null);
  
  const [classLevel, setClassLevel] = useState("8");
  const [subject, setSubject] = useState("Science");
  const [topic, setTopic] = useState("Photosynthesis");
  const [duration, setDuration] = useState("45");
  const [difficulty, setDifficulty] = useState("medium");

  const handleGenerate = async () => {
    setIsGenerating(true);
    setPlan(null);
    try {
      const result = await generateLessonPlan(classLevel, subject, topic, duration, difficulty);
      setPlan(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePublishHomework = () => {
    toast.success("Homework published successfully to Class " + classLevel);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-fuchsia-500" />
          AI Tools
        </h1>
        <p className="text-slate-500 mt-1 text-lg">Generate lesson plans, question papers, and more.</p>
      </div>

      <Tabs defaultValue="lesson-planner" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="lesson-planner">Lesson Planner</TabsTrigger>
          <TabsTrigger value="question-paper">Question Paper</TabsTrigger>
        </TabsList>
        <TabsContent value="lesson-planner">
          <div className="grid gap-6 md:grid-cols-12">
            
            {/* Input Form */}
            <div className="md:col-span-5">
              <Card>
                <CardHeader>
                  <CardTitle>Lesson Details</CardTitle>
                  <CardDescription>Configure the parameters for the AI lesson plan.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Class</Label>
                    <Select value={classLevel} onValueChange={(val) => setClassLevel(val || "8")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">Class 8</SelectItem>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <Select value={subject} onValueChange={(val) => setSubject(val || "Science")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="Mathematics">Mathematics</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Topic</Label>
                    <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Photosynthesis" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Duration (mins)</Label>
                      <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Difficulty</Label>
                      <Select value={difficulty} onValueChange={(val) => setDifficulty(val || "medium")}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleGenerate} disabled={isGenerating || !topic} className="w-full bg-fuchsia-600 hover:bg-fuchsia-700">
                    {isGenerating ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                        Generating...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Generate lesson plan
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Generated Plan */}
            <div className="md:col-span-7">
              {plan ? (
                <Card className="border-fuchsia-200 shadow-sm h-full flex flex-col">
                  <CardHeader className="bg-fuchsia-50/50 border-b border-fuchsia-100">
                    <CardTitle className="text-xl text-fuchsia-900 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-fuchsia-600" />
                      {topic} - Lesson Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 flex-1 space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 uppercase tracking-wider text-sm">Learning objectives</h4>
                      <ul className="space-y-2">
                        {plan.objectives.map((obj: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-slate-900 mb-3 uppercase tracking-wider text-sm">Lesson structure ({duration} min)</h4>
                      <div className="relative border-l-2 border-slate-200 ml-2 space-y-4 pb-2">
                        {plan.structure.map((step: string, i: number) => {
                          const [time, desc] = step.split(" — ");
                          return (
                            <div key={i} className="relative pl-6">
                              <div className="absolute w-2.5 h-2.5 bg-white border-2 border-fuchsia-500 rounded-full -left-[6px] top-1.5"></div>
                              <p className="text-sm font-medium text-slate-900">{time}</p>
                              <p className="text-sm text-slate-600">{desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-1 uppercase tracking-wider text-sm">Generated Homework</h4>
                      <p className="text-slate-700 text-sm">{plan.homework}</p>
                      
                      <Button onClick={handlePublishHomework} className="mt-4 w-full sm:w-auto" variant="outline">
                        <Send className="h-4 w-4 mr-2" />
                        Create homework from the lesson
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 bg-slate-50/50 p-6 text-center">
                  <Sparkles className="h-10 w-10 mb-4 text-slate-300" />
                  <h3 className="text-lg font-medium text-slate-700 mb-1">No Plan Generated</h3>
                  <p className="text-sm max-w-sm">Configure your lesson details on the left and click generate to create an AI-powered lesson plan.</p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="question-paper">
          <Card>
            <CardContent className="pt-6 text-center text-slate-500 py-12">
              Question Paper generator is coming soon.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
