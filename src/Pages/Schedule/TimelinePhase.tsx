import { Icon } from 'lucide-react';

interface TimelinePhaseProps {
    phase: string;
    date: string;
    description: string;
    icon: Icon;
    events: Array<{
        title: string;
        date: string;
        description: string;
    }>;
}

export function TimelinePhase({ phase, date, description, icon: IconComponent, events }: TimelinePhaseProps) {
    return (
        <div className="relative pl-8 pb-12 last:pb-0">
            <div className="absolute left-0 top-0 w-px h-full bg-purple-500/20">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-purple-500" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 ml-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-indigo-500/10">
                        <IconComponent className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400">{phase}</h3>
                        <p className="text-indigo-200">{date}</p>
                    </div>
                </div>
                <p className="text-gray-300 mb-6">{description}</p>
                <div className="space-y-4">
                    {events.map((event, index) => (
                        <div key={index} className="bg-black/20 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-indigo-300">{event.title}</h4>
                                <span className="text-sm text-purple-400">{event.date}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}