import { Rocket, Users, Lightbulb, Code, Award, Flag, Clipboard, Video } from 'lucide-react';

export const schedulePhases = [
  {
    phase: "Phase 1.1: Registration & Idea Submission",
    date: "15th Jan 2025 to 28th March 2025",
    icon: Clipboard,
    description: "Begin your journey by registering and forming your team with peers. Submit your project idea in PDF/PPT format given by organising team.",
    events: [
      {
        title: "Registration Opens",
        date: "Jan 15th",
        description: "Registration opens for individuals and cross-university teams"
      },
      {
        title: "Registration Deadline",
        date: "Mar 28th",
        description: "Last day to submit your project idea in PDF/PPT format given by organising team"
      }
    ]
  },
  {
    phase: "Phase 1.2: Idea Review and Results",
    date: "3rd April 2025",
    icon: Lightbulb,
    description: "",
    events: [
      {
        title: "Format Checking & Relevancy",
        date: "Mar 28th - Apr 2nd",
        description: "Evaluation of sent PPT/PDF files"
      },
      {
        title: "Announcement of Result",
        date: "Apr 3rd",
        description: "Leaders will receive mails of their team getting selected"
      }
    ]
  },
  {
    phase: "Phase 2.1: Registration of Round 2",
    date: "4th Apr 2025- 10th Apr 2025",
    icon: Users,
    description: "",
    events: [
      {
        title: "Form Release",
        date: "Apr 4th",
        description: "Filling of mentioned details in it regarding your project and more"
      },
      {
        title: "Form Closing",
        date: "Apr 10th",
        description: "No forms will be accepted after this date"
      }
    ]
  },
  {
    phase: "Phase 2.2: Presentation at IIITM in online/offline mode",
    date: "2nd/3rd week of Apr (Tentative)",
    icon: Video,
    description: "",
    events: [
      {
        title: "Date & Time Announcement",
        date: "",
        description: "Mails will be sent to leaders of team for their video call presentation"
      },
      {
        title: "Presentations",
        date: "",
        description: "Meeting link will be shared on the day of presentation"
      }
    ]
  },
  {
    phase: "Phase 2.3: Results of Round 2",
    date: "20th Apr 2024 (Tentative)",
    icon: Rocket,
    description: "",
    events: [
      {
        title: "Announcement of Result",
        date: "Apr 20th",
        description: "Leaders will receive mails of their team getting selected"
      }
    ]
  },
  {
    phase: "Phase 3.1: Registration of Round 3",
    date: "3rd week of Apr - 2nd week of May (Tentative)",
    icon: Flag,
    description: "",
    events: [
      {
        title: "Form Release for Registration",
        date: "Apr 21st (Tentative)",
        description: "Teams who have secured place in final round have to fill the form. Filling their credentials to appear for final round."
      },
      {
        title: "Form Closing Date",
        date: "May 5th (Tentative)",
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
