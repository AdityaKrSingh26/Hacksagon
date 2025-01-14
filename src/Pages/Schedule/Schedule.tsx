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
        <div className='flex w-full justify-center mt-20'>
        <button
            className="group relative px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500" >
            <a href="/">
              <span className="relative z-10">Registerations Opening soon</span>
              <div className="absolute inset-0 rounded-full bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}