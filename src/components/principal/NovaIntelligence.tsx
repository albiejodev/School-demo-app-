import React, { useState } from "react";
import { Sparkles, Send, User, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function NovaIntelligence() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello Principal. I'm NOVA Intelligence. How can I help you manage the school today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedQuestions = [
    "How is Grade 9B performing?",
    "What requires my attention today?",
    "Which students have declining attendance?",
    "Show overdue fees."
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    const newUserMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages(prev => [...prev, newUserMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let response = "I've analyzed the school data. Based on the current metrics, everything is running smoothly, but there are a few areas we could optimize.";
      
      if (text.includes("9B") || text.includes("performing")) {
        response = "Grade 9B requires attention. The class average has declined from 72% to 64%. Mathematics accounts for most of the decline. 7 students have declined by more than 10%.";
      } else if (text.includes("attention")) {
        response = "Today, I recommend focusing on: 1) Grade 9B Mathematics performance, 2) 18 overdue fee accounts, and 3) A 5.8% drop in Grade 8 attendance.";
      } else if (text.includes("attendance")) {
        response = "Grade 8 and Grade 9B are showing declining attendance trends. Rahul Mathew (8A) and Arjun Varma (9B) have fallen below the 85% threshold.";
      } else if (text.includes("fees") || text.includes("overdue")) {
        response = "There are 18 overdue accounts totaling ₹6.4L. Fee collection for September is 7% below the target. Would you like me to draft payment reminders to these parents?";
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] w-full max-w-4xl mx-auto animate-in fade-in duration-500 pb-4">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold tracking-tight text-foreground flex items-center gap-2">
          <Sparkles className="w-[26px] h-[26px] text-primary" />
          NOVA Intelligence
        </h1>
        <p className="text-[15px] text-muted-foreground mt-1">Ask about your school, metrics, or require analysis.</p>
      </div>

      <Card className="flex-1 flex flex-col p-0 overflow-hidden relative shadow-[0_8px_30px_rgba(30,64,175,0.04)]">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6 relative z-10">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
              <Avatar className="w-9 h-9 shrink-0 border border-border shadow-sm">
                {msg.role === "assistant" ? (
                  <div className="w-full h-full bg-action-gradient flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                ) : (
                  <AvatarFallback className="bg-muted text-muted-foreground font-semibold text-xs">PR</AvatarFallback>
                )}
              </Avatar>
              <div className={`p-4 rounded-[20px] text-[15px] leading-relaxed shadow-sm font-medium ${
                msg.role === "user" 
                  ? "bg-action-gradient text-white rounded-tr-sm" 
                  : "bg-white border border-border text-foreground/90 rounded-tl-sm"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-4 max-w-[85%]">
              <Avatar className="w-9 h-9 shrink-0 border border-border shadow-sm">
                <div className="w-full h-full bg-action-gradient flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
              </Avatar>
              <div className="p-4 rounded-[20px] bg-white border border-border text-foreground/90 rounded-tl-sm flex items-center gap-1.5 shadow-sm">
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        <div className="p-5 bg-muted/20 border-t border-border relative z-10 backdrop-blur-md">
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2.5 mb-4">
              {predefinedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="bg-white hover:bg-muted border border-border text-foreground/80 font-medium text-[13px] px-4 py-2 rounded-full transition-colors flex items-center gap-1 shadow-sm hover:shadow"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
          <div className="relative flex items-center">
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Ask NOVA Intelligence..."
              className="pr-14 bg-white border-border h-14 text-[15px] rounded-xl shadow-sm focus-visible:ring-2 focus-visible:ring-primary/20"
            />
            <Button 
              size="icon" 
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isTyping}
              className="absolute right-2 w-10 h-10 bg-action-gradient text-white rounded-lg shadow-sm border-0"
            >
              <Send className="w-[18px] h-[18px]" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
