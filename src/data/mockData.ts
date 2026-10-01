export interface Student {
  id: string;
  name: string;
  class: string;
  attendance: number;
  academicAverage: number;
  previousAverage: number;
  homeworkCompletion: number;
  feeStatus: "Paid" | "Pending" | "Overdue";
  feeOutstanding: number;
  risk: "Low" | "Medium" | "High";
}

export interface Teacher {
  id: string;
  name: string;
  department: string;
  subjects: string[];
  classes: string[];
  attendance: number;
  periods: number;
  status: string;
  performance: number;
  assignmentsCreated: number;
}

export const classes = ["8A", "8B", "9A", "9B", "10A", "10B"];
export const subjects = ["Mathematics", "Science", "English", "Malayalam", "Social Science", "Computer Science"];

export const teachers: Teacher[] = [
  { id: "t1", name: "Anjali Menon", department: "Mathematics", subjects: ["Mathematics"], classes: ["8A", "9B", "10A"], attendance: 96, periods: 18, status: "Active", performance: 78, assignmentsCreated: 24 },
  { id: "t2", name: "Arun Thomas", department: "Science", subjects: ["Science"], classes: ["8B", "9A"], attendance: 98, periods: 16, status: "Active", performance: 82, assignmentsCreated: 18 },
  { id: "t3", name: "Priya Nair", department: "English", subjects: ["English"], classes: ["8A", "10A"], attendance: 93, periods: 21, status: "Active", performance: 75, assignmentsCreated: 32 },
  { id: "t4", name: "Suresh Kumar", department: "Malayalam", subjects: ["Malayalam"], classes: ["9B", "10B"], attendance: 99, periods: 14, status: "Active", performance: 85, assignmentsCreated: 12 },
  { id: "t5", name: "Meera Joseph", department: "Social Science", subjects: ["Social Science"], classes: ["8B", "9A"], attendance: 95, periods: 19, status: "Active", performance: 79, assignmentsCreated: 22 },
  { id: "t6", name: "Rahul Varghese", department: "Computer Science", subjects: ["Computer Science"], classes: ["10A", "10B"], attendance: 92, periods: 22, status: "Active", performance: 88, assignmentsCreated: 15 },
  { id: "t7", name: "Deepa Krishnan", department: "Science", subjects: ["Mathematics", "Science"], classes: ["10A", "10B"], attendance: 97, periods: 20, status: "Active", performance: 81, assignmentsCreated: 26 },
  { id: "t8", name: "Vijay Pillai", department: "English", subjects: ["English"], classes: ["9A", "9B"], attendance: 94, periods: 18, status: "Active", performance: 76, assignmentsCreated: 20 },
  { id: "t9", name: "Kavitha Nambiar", department: "Malayalam", subjects: ["Malayalam"], classes: ["8A", "8B"], attendance: 91, periods: 24, status: "Active", performance: 73, assignmentsCreated: 28 },
  { id: "t10", name: "Hari Das", department: "Social Science", subjects: ["Social Science"], classes: ["10A", "10B"], attendance: 98, periods: 16, status: "Active", performance: 84, assignmentsCreated: 16 },
];

export const students: Student[] = [
  { id: "s1", name: "Adithya Menon", class: "8A", attendance: 95, academicAverage: 82, previousAverage: 80, homeworkCompletion: 90, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s2", name: "Ananya Nair", class: "8A", attendance: 88, academicAverage: 75, previousAverage: 78, homeworkCompletion: 85, feeStatus: "Pending", feeOutstanding: 2500, risk: "Medium" },
  { id: "s3", name: "Arjun Varma", class: "9B", attendance: 81, academicAverage: 64, previousAverage: 72, homeworkCompletion: 68, feeStatus: "Paid", feeOutstanding: 0, risk: "High" },
  { id: "s4", name: "Devika Krishnan", class: "9B", attendance: 98, academicAverage: 92, previousAverage: 90, homeworkCompletion: 100, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s5", name: "Rahul Mathew", class: "8A", attendance: 91, academicAverage: 78, previousAverage: 75, homeworkCompletion: 80, feeStatus: "Pending", feeOutstanding: 4500, risk: "Low" },
  { id: "s6", name: "Meera Joseph", class: "10A", attendance: 92, academicAverage: 85, previousAverage: 84, homeworkCompletion: 95, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s7", name: "Neha Thomas", class: "8B", attendance: 75, academicAverage: 60, previousAverage: 65, homeworkCompletion: 50, feeStatus: "Overdue", feeOutstanding: 8000, risk: "High" },
  { id: "s8", name: "Rohan Nair", class: "9A", attendance: 85, academicAverage: 70, previousAverage: 70, homeworkCompletion: 75, feeStatus: "Paid", feeOutstanding: 0, risk: "Medium" },
  { id: "s9", name: "Diya Menon", class: "10B", attendance: 99, academicAverage: 95, previousAverage: 94, homeworkCompletion: 100, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s10", name: "Akshay Kumar", class: "8B", attendance: 82, academicAverage: 68, previousAverage: 70, homeworkCompletion: 70, feeStatus: "Pending", feeOutstanding: 3000, risk: "Medium" },
  { id: "s11", name: "Lakshmi Narayanan", class: "9A", attendance: 90, academicAverage: 78, previousAverage: 76, homeworkCompletion: 85, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s12", name: "Gautham Krishna", class: "9B", attendance: 86, academicAverage: 72, previousAverage: 75, homeworkCompletion: 80, feeStatus: "Paid", feeOutstanding: 0, risk: "Medium" },
  { id: "s13", name: "Sneha Varghese", class: "10A", attendance: 96, academicAverage: 88, previousAverage: 85, homeworkCompletion: 90, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s14", name: "Kiran Raj", class: "10B", attendance: 80, academicAverage: 65, previousAverage: 68, homeworkCompletion: 60, feeStatus: "Overdue", feeOutstanding: 6500, risk: "High" },
  { id: "s15", name: "Aisha Mohammed", class: "8A", attendance: 94, academicAverage: 84, previousAverage: 82, homeworkCompletion: 95, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s16", name: "Sanjay Pillai", class: "8B", attendance: 89, academicAverage: 76, previousAverage: 75, homeworkCompletion: 85, feeStatus: "Pending", feeOutstanding: 2000, risk: "Low" },
  { id: "s17", name: "Malavika Das", class: "9A", attendance: 97, academicAverage: 91, previousAverage: 89, homeworkCompletion: 100, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s18", name: "Abhinav Prasad", class: "9B", attendance: 78, academicAverage: 62, previousAverage: 65, homeworkCompletion: 55, feeStatus: "Overdue", feeOutstanding: 9000, risk: "High" },
  { id: "s19", name: "Nandita Iyer", class: "10A", attendance: 93, academicAverage: 86, previousAverage: 85, homeworkCompletion: 90, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s20", name: "Vishnu Nambiar", class: "10B", attendance: 84, academicAverage: 71, previousAverage: 74, homeworkCompletion: 75, feeStatus: "Pending", feeOutstanding: 3500, risk: "Medium" },
  { id: "s21", name: "Govind Balan", class: "8A", attendance: 91, academicAverage: 79, previousAverage: 78, homeworkCompletion: 85, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s22", name: "Anjali Panicker", class: "8B", attendance: 95, academicAverage: 83, previousAverage: 81, homeworkCompletion: 90, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s23", name: "Roshan Eapen", class: "9A", attendance: 87, academicAverage: 74, previousAverage: 76, homeworkCompletion: 80, feeStatus: "Pending", feeOutstanding: 2500, risk: "Medium" },
  { id: "s24", name: "Swathi Suresh", class: "9B", attendance: 98, academicAverage: 93, previousAverage: 91, homeworkCompletion: 100, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s25", name: "Vivek Shenoy", class: "10A", attendance: 82, academicAverage: 67, previousAverage: 69, homeworkCompletion: 65, feeStatus: "Overdue", feeOutstanding: 7500, risk: "High" },
  { id: "s26", name: "Sruthy Rajan", class: "10B", attendance: 90, academicAverage: 81, previousAverage: 79, homeworkCompletion: 85, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s27", name: "Mohammed Tariq", class: "8A", attendance: 88, academicAverage: 75, previousAverage: 74, homeworkCompletion: 80, feeStatus: "Pending", feeOutstanding: 1500, risk: "Medium" },
  { id: "s28", name: "Parvathy Sankar", class: "8B", attendance: 96, academicAverage: 89, previousAverage: 87, homeworkCompletion: 95, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
  { id: "s29", name: "Nithin Babu", class: "9A", attendance: 76, academicAverage: 61, previousAverage: 64, homeworkCompletion: 50, feeStatus: "Overdue", feeOutstanding: 8500, risk: "High" },
  { id: "s30", name: "Gouri Krishna", class: "9B", attendance: 94, academicAverage: 87, previousAverage: 85, homeworkCompletion: 90, feeStatus: "Paid", feeOutstanding: 0, risk: "Low" },
];

export const mockInsights = {
  principal: [
    {
      id: "i1",
      title: "Attendance trend detected",
      description: "Grade 8 attendance has dropped 5.8% over the last four weeks. 12 students require attention.",
      actionLabel: "Review students",
      type: "warning"
    },
    {
      id: "i2",
      title: "Academic performance",
      description: "Mathematics performance in Grade 9B is 11% below the school average.",
      actionLabel: "View analysis",
      type: "critical"
    },
    {
      id: "i3",
      title: "Fee collection",
      description: "18 accounts have remained overdue for more than 30 days.",
      actionLabel: "Review collection",
      type: "info"
    }
  ]
};

export const recentActivities = [
  { id: "a1", text: "Grade 8A attendance submitted", time: "09:42" },
  { id: "a2", text: "Mathematics assessment published", time: "09:31" },
  { id: "a3", text: "₹42,500 fee collection received", time: "09:14" },
  { id: "a4", text: "Parent communication sent to Grade 9B", time: "08:56" },
];

export const attendanceTrend = [
  { name: "Week 1", attendance: 96 },
  { name: "Week 2", attendance: 95.5 },
  { name: "Week 3", attendance: 94.8 },
  { name: "Week 4", attendance: 93.2 },
  { name: "Week 5", attendance: 94.5 },
  { name: "Week 6", attendance: 94.2 },
];

export const academicPerformanceByGrade = [
  { name: "Grade 6", average: 74 },
  { name: "Grade 7", average: 79 },
  { name: "Grade 8", average: 76 },
  { name: "Grade 9", average: 71 },
  { name: "Grade 10", average: 82 },
];

export const subjectPerformance = [
  { subject: "Mathematics", average: 68, previous: 74, change: -6, studentsBelow40: 42 },
  { subject: "Science", average: 79, previous: 76, change: 3, studentsBelow40: 18 },
  { subject: "English", average: 81, previous: 79, change: 2, studentsBelow40: 12 },
  { subject: "Malayalam", average: 84, previous: 83, change: 1, studentsBelow40: 7 },
];

export const classPerformance = [
  { class: "8A", average: 78, attendance: 94, homework: 91, trend: "up" },
  { class: "8B", average: 73, attendance: 91, homework: 84, trend: "down" },
  { class: "9A", average: 82, attendance: 96, homework: 94, trend: "up" },
  { class: "9B", average: 64, attendance: 84, homework: 68, trend: "down" },
];

export const classAttendance = [
  { class: "8A", students: 42, present: 40, absent: 2, attendance: 95.2, trend: "up" },
  { class: "8B", students: 39, present: 34, absent: 5, attendance: 87.2, trend: "down" },
  { class: "9A", students: 41, present: 40, absent: 1, attendance: 97.6, trend: "up" },
  { class: "9B", students: 38, present: 32, absent: 6, attendance: 84.2, trend: "down" },
];

export const feesCollection = [
  { month: "Apr", amount: 1200000 },
  { month: "May", amount: 800000 },
  { month: "Jun", amount: 1500000 },
  { month: "Jul", amount: 650000 },
  { month: "Aug", amount: 900000 },
  { month: "Sep", amount: 1100000 },
];

export const communications = [
  { id: "c1", subject: "School closure", audience: "All parents", channel: "Push + WhatsApp", sent: "10:32 AM", status: "Delivered" },
  { id: "c2", subject: "PTM Reminder", audience: "Grade 9B", channel: "WhatsApp", sent: "Yesterday", status: "Delivered" },
  { id: "c3", subject: "Fee Reminder", audience: "Selected parents", channel: "WhatsApp", sent: "Yesterday", status: "Scheduled" },
  { id: "c4", subject: "Annual Day Update", audience: "Grade 8", channel: "Email", sent: "Monday", status: "Delivered" },
];
