import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.ts';
import { TimelinePhase } from './TimelinePhase.tsx';
import { schedulePhases } from '../../data/scheduleData.ts';

export default function SchedulePage() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="schedule" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From registration to incubation, embark on a 5-month journey of innovation and growth
          </p>
        </div>
        <div
          ref={ref}
          className={`max-w-4xl mx-auto stagger-animation ${isVisible ? 'is-visible' : ''}`}
        >
          {schedulePhases.map((phase, index) => (
            <TimelinePhase
              key={index}
              phase={phase.phase}
              date={phase.date}
              icon={phase.icon}
              description={phase.description}
              events={phase.events}
            />
          ))}
        </div>
      </div>
    </section>
  );
}