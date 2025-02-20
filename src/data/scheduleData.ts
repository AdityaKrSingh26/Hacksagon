import { Rocket, Users, Lightbulb, Code, Award, Flag, Clipboard, Video } from 'lucide-react';

export const schedulePhases = [
  {
    phase: "Phase 1.1: Registration & Idea Submission",
    date: "15th Jan 2025 to 20th Feb 2025",
    icon: Clipboard,
    description: "Begin your journey by registering and forming your team with peers. Submit your project idea in PDF/PPT format given by organising team.",
    events: [
      {
        title: "Registration Opens",
        date: "Jan 15",
        description: "Registration opens for individuals and cross-university teams"
      },
      {
        title: "Registration Deadline",
        date: "Mar 28",
        description: "Last day to submit your project idea in PDF/PPT format given by organising team"
      }
    ]
  },
  {
    phase: "Phase 1.2: Idea Review and Results",
    date: "5th March 2025",
    icon: Lightbulb,
    description: "",
    events: [
      {
        title: "Format Checking & Relevancy",
        date: "Feb 21 - Feb 28",
        description: "Evaluation of sent PPT/PDF files"
      },
      {
        title: "Announcement of Result",
        date: "Mar 5",
        description: "Leaders will receive mails of their team getting selected"
      }
    ]
  },
  {
    phase: "Phase 2.1: Registration of Round 2",
    date: "6th Mar 2025- 16th Mar 2025",
    icon: Users,
    description: "",
    events: [
      {
        title: "Form Release",
        date: "Mar 6",
        description: "Filling of mentioned details in it regarding your project and more"
      },
      {
        title: "Form Closing",
        date: "Mar 16",
        description: "No forms will be accepted after this date"
      }
    ]
  },
  {
    phase: "Phase 2.2: Presentation at IIITM in online/offline mode",
    date: "1st Apr 2025 - 5th Apr 2025",
    icon: Video,
    description: "",
    events: [
      {
        title: "Date & Time Announcement",
        date: "Mar 31",
        description: "Mails will be sent to leaders of team for their video call presentation"
      },
      {
        title: "Presentations",
        date: "Apr 1 - Apr 5",
        description: "Meeting link will be shared on the day of presentation"
      }
    ]
  },
  {
    phase: "Phase 2.3: Results of Round 2",
    date: "10th Apr 2024",
    icon: Rocket,
    description: "Emails will be sent to the group leaders of shortlisted teams for the next round.",
    events: []
  },
  {
    phase: "Phase 3.1: Registration of Round 3",
    date: "11th Apr 2025- 18th Apr 2025",
    icon: Flag,
    description: "",
    events: [
      {
        title: "Form Release for Registration",
        date: "Apr 11",
        description: "Teams who have secured place in final round have to fill the form. Filling their credentials to appear for final round."
      },
      {
        title: "Form Closing Date",
        date: "Apr 18",
        description: "Last date to submit."
      }
    ]
  },
  {
    phase: "Phase 3.2: Prototype Round at IIITM",
    date: "15th May 2025 (Tentative)",
    icon: Code,
    description: "",
    events: [
      {
        title: "36hr Hackathon Sprint",
        date: "May 15",
        description: "Teams will come and work on their projects getting it ready for final presentation"
      }
    ]
  },
  {
    phase: "Phase 3.3: Final Result",
    date: "16th May 2025 (Tentative)",
    icon: Award,
    description: "Release of final Results and Distribution of Prizes",
    events: []
  }
];
