import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "cn";

interface AIInsightProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  actionLabel?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function AIInsight({ title = "AI INSIGHT", actionLabel, onClick, children, className, ...props }: AIInsightProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-[14px] p-5 border border-border shadow-[0_4px_20px_rgba(30,64,175,0.06)] relative overflow-hidden group transition-all duration-300 hover:shadow-md hover:border-primary/20",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-action-gradient opacity-80" />
      <h3 className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <Sparkles className="w-3 h-3" /> {title}
      </h3>
      <div className="text-[14px] text-foreground/80 leading-relaxed mb-4 font-medium">
        {children}
      </div>
      {actionLabel && (
        <button 
          onClick={onClick}
          className="text-[13px] text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-1 group-hover:gap-1.5"
        >
          {actionLabel} <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
