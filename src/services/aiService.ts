export async function generateLessonPlan(classLevel: string, subject: string, topic: string, duration: string, difficulty: string) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    objectives: [
      `Understand the process of ${topic}.`,
      `Identify the role of key components in ${topic}.`,
      `Explain why ${topic} is important.`
    ],
    structure: [
      "5 min — Introduction",
      "10 min — Concept explanation",
      "10 min — Visual example",
      "10 min — Student activity",
      "5 min — Assessment",
      "5 min — Recap"
    ],
    homework: "3 short questions based on the lesson."
  };
}

export async function generateQuestionPaper(classLevel: string, subject: string, chapters: string, marks: string, difficulty: string) {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    sections: [
      { name: "Section A", details: "10 × 1 mark", description: "Multiple choice questions" },
      { name: "Section B", details: "5 × 2 marks", description: "Short answer questions" },
      { name: "Section C", details: "3 × 5 marks", description: "Long answer questions" }
    ]
  };
}

export async function generateReportRemark(studentName: string, performance: any) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return `${studentName} demonstrates consistent progress and strong understanding of Science concepts. Continued practice in Mathematics, particularly problem-solving, will help improve overall performance.`;
}

export async function generateParentMessage(studentName: string) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return `Dear Parent,\n\nWe noticed that ${studentName}'s attendance has declined over the past few weeks. We would appreciate your support in ensuring regular attendance so that they can maintain their academic progress.\n\nRegards,\nNOVA School`;
}

export async function askSchoolAssistant(query: string, studentName?: string) {
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes("attention") || lowerQuery.includes("subjects")) {
    return `Mathematics currently needs the most attention. ${studentName || "The student"}'s average is 64%, compared with 78% overall. Their performance has also declined by 7% since the previous assessment.`;
  }
  
  if (lowerQuery.includes("homework")) {
    return `${studentName || "The student"} has 2 pending homework assignments: Science (Photosynthesis) due tomorrow, and Mathematics (Algebra) due on Friday.`;
  }
  
  if (lowerQuery.includes("attendance")) {
    return `${studentName || "The student"}'s attendance has dropped from 93% to 81% over the last six weeks.`;
  }
  
  return "I'm analyzing the school data. Based on the current metrics, overall performance is stable, but a few areas might require attention.";
}
