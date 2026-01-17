import { getMatches } from '@/app/lib/services';
import MatchCard from '@/app/components/features/MatchCard';

export default async function SchedulePage() {
  const matches = await getMatches();
  const liveMatches = matches.filter((m) => m.status === 'LIVE');
  const upcomingMatches = matches.filter((m) => m.status === 'UPCOMING');

  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
              T20 World Cup 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
            Match Schedule
          </h1>
          <p className="text-gray-400 max-w-xl text-lg font-light">
            Follow every match, track fixtures, and manage your fantasy lineup.
          </p>
        </div>
        {/* Filter Component could go here */}
      </div>

      {/* LIVE Matches */}
      {liveMatches.length > 0 && (
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <h2 className="text-xl font-bold text-white">Live Now</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liveMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Matches */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl font-bold text-white">Upcoming Fixtures</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
}
