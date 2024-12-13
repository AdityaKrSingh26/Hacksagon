import { Rocket, Users, Lightbulb, Code, Award, Flag } from 'lucide-react';

export const schedulePhases = [
  {
    phase: "Phase 1: Registration & Team Formation",
    date: "January 2024",
    icon: Rocket,
    description: "Begin your journey by registering and forming your dream team",
    events: [
      {
        title: "Early Bird Registration Opens",
        date: "Jan 1",
        description: "Special perks for early registrants including exclusive workshops and mentorship"
      },
      {
        title: "Team Formation Workshop",
        date: "Jan 15",
        description: "Virtual meetup to find teammates and discuss project ideas"
      },
      {
        title: "Registration Deadline",
        date: "Jan 31",
        description: "Last day to register your team or as an individual participant"
      }
    ]
  },
  {
    phase: "Phase 2: Skill Building",
    date: "February 2024",
    icon: Lightbulb,
    description: "Enhance your skills through workshops and training sessions",
    events: [
      {
        title: "Hardware Workshop Series",
        date: "Feb 1-15",
        description: "Learn about Arduino, Raspberry Pi, and sensor integration"
      },
      {
        title: "Software Development Bootcamp",
        date: "Feb 16-28",
        description: "Intensive training on full-stack development and IoT platforms"
      }
    ]
  },
  {
    phase: "Phase 3: Preparation",
    date: "March 2024",
    icon: Users,
    description: "Get ready for the main event with mentorship and planning",
    events: [
      {
        title: "Mentor Matching",
        date: "Mar 1-10",
        description: "Connect with industry experts for project guidance"
      },
      {
        title: "Project Planning Workshop",
        date: "Mar 15",
        description: "Learn about project management and timeline planning"
      }
    ]
  },
  {
    phase: "Phase 4: Main Event",
    date: "April 2024",
    icon: Code,
    description: "48 hours of intensive hacking and building",
    events: [
      {
        title: "Opening Ceremony",
        date: "Apr 1",
        description: "Kickoff event with keynote speakers and challenge announcements"
      },
      {
        title: "Hackathon Sprint",
        date: "Apr 2-3",
        description: "48-hour main hacking period with technical support and mini-events"
      },
      {
        title: "Project Submission",
        date: "Apr 3",
        description: "Final submission of projects and documentation"
      }
    ]
  },
  {
    phase: "Phase 5: Judging & Awards",
    date: "April 2024",
    icon: Award,
    description: "Present your project and celebrate achievements",
    events: [
      {
        title: "Project Presentations",
        date: "Apr 4",
        description: "Teams present their projects to judges and audience"
      },
      {
        title: "Awards Ceremony",
        date: "Apr 5",
        description: "Recognition of outstanding projects and special achievements"
      }
    ]
  },
  {
    phase: "Phase 6: Post-Event",
    date: "May 2024",
    icon: Flag,
    description: "Continue your journey with post-event opportunities",
    events: [
      {
        title: "Project Showcase",
        date: "May 1",
        description: "Online exhibition of winning projects"
      },
      {
        title: "Incubation Program",
        date: "May 15",
        description: "Selected teams begin the 3-month incubation program"
      }
    ]
  }
];