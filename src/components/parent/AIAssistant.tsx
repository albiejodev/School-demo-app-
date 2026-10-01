"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Sparkles, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { askSchoolAssistant } from "@/services/aiService";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AIAssistant() {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hello! I'm NOVA, your intelligent school assistant. How can I help you today regarding Rahul's progress?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage = { role: "user" as const, text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await askSchoolAssistant(text, "Rahul");
      setMessages(prev => [...prev, { role: "ai", text: response }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestions = [
    "What subjects need attention?",
    "What homework does Rahul have today?",
    "How has Rahul's attendance changed?"
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto h-[calc(100vh-140px)]">
      <Card className="flex flex-col h-full border-indigo-200 shadow-sm overflow-hidden">
        <CardHeader className="bg-indigo-50/50 border-b border-indigo-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl text-indigo-900">NOVA AI</CardTitle>
              <CardDescription className="text-slate-600">Your school's intelligent assistant.</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 p-0 overflow-hidden relative flex flex-col">
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4 pb-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200' : 'bg-indigo-100'}`}>
                    {msg.role === 'user' ? <User className="h-4 w-4 text-slate-600" /> : <Bot className="h-4 w-4 text-indigo-600" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-sm' : 'bg-slate-100 text-slate-800 rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-100">
                    <Bot className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-sm bg-slate-100 flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        
        <CardFooter className="flex flex-col p-4 bg-white border-t border-slate-100 gap-3">
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mb-2 w-full">
              {suggestions.map((sug, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(sug)}
                  className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors border border-indigo-200"
                >
                  {sug}
                </button>
              ))}
            </div>
          )}
          <form 
            className="flex w-full gap-2 items-center" 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          >
            <Input 
              placeholder="Ask NOVA anything about Rahul's school performance..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
              disabled={isTyping}
            />
            <Button type="submit" disabled={!inputValue.trim() || isTyping} className="bg-indigo-600 hover:bg-indigo-700 h-10 w-10 p-0 shrink-0 rounded-full">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
