import Link from 'next/link';
import { IMAGES } from '@/app/lib/images';
import { getMatches } from '@/app/lib/services';
import MatchCard from '@/app/components/features/MatchCard';

export default async function Home() {
  const matches = await getMatches();

  return (
    <>
      {/* Marquee Bar */}
      <div className="w-full bg-[#0a160e] border-b border-[#23482f] overflow-hidden py-2">
        <div className="flex gap-8 whitespace-nowrap animate-marquee px-4">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <span className="text-white">LIVE:</span> IND 145/3 (15.2) vs PAK{' '}
            <span className="text-primary">•</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <span className="text-primary">UPCOMING:</span> AUS vs ENG (Starts in 2h 15m){' '}
            <span className="text-primary">•</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <span className="text-white">RESULT:</span> NZ won by 24 runs vs SA{' '}
            <span className="text-primary">•</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <span className="text-white">LIVE:</span> WI 88/1 (9.0) vs SL{' '}
            <span className="text-primary">•</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <span className="text-primary">DEADLINE:</span> GW4 Transfers close in 1h 45m{' '}
            <span className="text-primary">•</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl px-4 md:px-10 py-6 md:py-10 mx-auto">
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center bg-[#112217]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
            <img
              alt="Cricket stadium night atmosphere with bright floodlights"
              className="w-full h-full object-cover object-center opacity-60"
              src={IMAGES.stadiumBg}
            />
          </div>
          <div className="relative z-20 flex flex-col gap-6 max-w-2xl px-6 md:px-12 py-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit">
              <span className="material-symbols-outlined text-primary text-sm">trophy</span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                Official T20 Fantasy
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Build Your <span className="text-primary">Dream XI</span>.<br />
              Conquer the World.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              The ultimate fantasy cricket experience is here. Compete with millions of managers
              globally for the T20 World Cup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/signup"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-[#34f575] text-[#112217] text-base font-bold h-12 px-8 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(19,236,91,0.3)]"
              >
                Play for Free
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
              <button className="flex items-center justify-center gap-2 bg-[#23482f] hover:bg-[#2c5a3b] text-white border border-[#326744] text-base font-bold h-12 px-8 rounded-lg transition-colors">
                Start a League
              </button>
            </div>
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="flex -space-x-3">
                <img
                  alt="User avatar 1"
                  className="w-8 h-8 rounded-full border-2 border-background-dark"
                  src={IMAGES.avatar1}
                />
                <img
                  alt="User avatar 2"
                  className="w-8 h-8 rounded-full border-2 border-background-dark"
                  src={IMAGES.avatar2}
                />
                <img
                  alt="User avatar 3"
                  className="w-8 h-8 rounded-full border-2 border-background-dark"
                  src={IMAGES.avatar3}
                />
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-bold">2.4M+</span> Managers Joined
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl px-4 md:px-10 py-8 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#111418] dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">calendar_month</span>
            Matchday 4 Fixtures
          </h2>
          <Link className="text-sm font-bold text-primary hover:underline" href="/schedule">
            View Full Schedule
          </Link>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x snap-mandatory">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      <div className="w-full bg-white dark:bg-[#152a1d] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white tracking-tight">
              How to Play
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl">
              Master the crease in 4 simple steps. It&apos;s just like being a real team owner, but
              without the headache of stadium maintenance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background-light dark:bg-[#193322] border border-transparent dark:border-[#326744] hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#112217] transition-colors">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold dark:text-white">1. Select Squad</h3>
                <p className="text-sm text-gray-500 dark:text-[#92c9a4] leading-relaxed">
                  Pick 11 players within the 100cr budget. Balance your superstars with budget gems.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background-light dark:bg-[#193322] border border-transparent dark:border-[#326744] hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#112217] transition-colors">
                <span className="material-symbols-outlined text-3xl">manage_accounts</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold dark:text-white">2. Manage Team</h3>
                <p className="text-sm text-gray-500 dark:text-[#92c9a4] leading-relaxed">
                  Make transfers between matchdays. Pick a captain for 2x points.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background-light dark:bg-[#193322] border border-transparent dark:border-[#326744] hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#112217] transition-colors">
                <span className="material-symbols-outlined text-3xl">scoreboard</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold dark:text-white">3. Earn Points</h3>
                <p className="text-sm text-gray-500 dark:text-[#92c9a4] leading-relaxed">
                  Score based on real-life runs, wickets, catches, and strike rates.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background-light dark:bg-[#193322] border border-transparent dark:border-[#326744] hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#112217] transition-colors">
                <span className="material-symbols-outlined text-3xl">emoji_events</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold dark:text-white">4. Win Glory</h3>
                <p className="text-sm text-gray-500 dark:text-[#92c9a4] leading-relaxed">
                  Top global leaderboards or beat your friends in private leagues to claim bragging
                  rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl px-4 md:px-10 py-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white">
            Climb the Ranks. <br />
            <span className="text-primary">Become a Legend.</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300">
            Create your own private league to compete with friends and colleagues, or join the
            Global League to test your skills against the best managers in the world.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-sm dark:text-gray-200">
                Real-time point updates during matches
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-sm dark:text-gray-200">
                Detailed player statistics and heatmaps
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-sm dark:text-gray-200">
                Exclusive badges for weekly winners
              </span>
            </div>
          </div>
          <button className="w-fit mt-4 flex items-center justify-center gap-2 bg-[#23482f] text-white border border-[#326744] text-base font-bold h-12 px-6 rounded-lg hover:bg-[#2c5a3b] transition-colors">
            Start a Private League
          </button>
        </div>
        <div className="relative bg-white dark:bg-[#193322] border border-[#e6e8eb] dark:border-[#326744] rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-[#112217] px-6 py-4 border-b border-[#326744] flex justify-between items-center">
            <h3 className="text-white font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">public</span>
              Global League Top 5
            </h3>
            <span className="text-xs font-bold text-primary bg-primary/20 px-2 py-1 rounded">
              GW 3 Live
            </span>
          </div>
          <div className="p-0">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 dark:bg-black/20 text-xs uppercase text-gray-500 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3 font-medium">Rank</th>
                  <th className="px-6 py-3 font-medium">Team</th>
                  <th className="px-6 py-3 font-medium">Manager</th>
                  <th className="px-6 py-3 font-medium text-right">Points</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-primary">1</td>
                  <td className="px-6 py-4 font-bold dark:text-white">Yorker Kings</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-300">Rahul D.</td>
                  <td className="px-6 py-4 text-right font-black dark:text-white">284</td>
                </tr>
                {/* ... other rows ... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#13ec5b] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#112217] mb-6 tracking-tight">
            Ready to hit it out of the park?
          </h2>
          <p className="text-xl font-medium text-[#112217]/80 mb-8 max-w-2xl mx-auto">
            Join over 2 million cricket fans. It takes 2 minutes to pick your squad and start
            winning.
          </p>
          <Link
            href="/create-team"
            className="bg-[#112217] text-white text-lg font-bold py-4 px-10 rounded-xl hover:bg-[#1a3323] transition-transform transform hover:scale-105 shadow-xl inline-block"
          >
            Create Your Team Now
          </Link>
          <p className="mt-4 text-sm text-[#112217]/60 font-medium">
            Free to play • Compete with Friends • Global Glory
          </p>
        </div>
      </div>
    </>
  );
}
