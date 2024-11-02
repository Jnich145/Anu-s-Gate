import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  host: string;
  isLive: boolean;
}

const upcomingEvents: Event[] = [
  {
    title: 'Live Q&A: Ancient Technology',
    date: '2024-03-15T18:00:00',
    host: 'Dr. Sarah Mitchell',
    isLive: false
  },
  {
    title: 'Frequency Healing Workshop',
    date: '2024-03-18T20:00:00',
    host: 'Master Chen Wei',
    isLive: false
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card group hover:border-purple-500/50"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-400">Hosted by {event.host}</p>
                  <p className="text-gray-400">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div>
                  <Calendar className="h-6 w-6 text-purple-400" />
                </div>
              </div>
              <button className="mt-4 w-full btn-primary">
                {event.isLive ? 'Join Live' : 'Set Reminder'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;