import Link from 'next/link';
import { IMAGES } from '@/app/lib/images';
import { getCurrentUser, getMyTeam, getLeaderboard } from '@/app/lib/services';
import PitchView from '@/app/components/features/PitchView';

export default async function DashboardPage() {
  const [user, team, leaderboard] = await Promise.all([
    getCurrentUser(),
    getMyTeam(),
    getLeaderboard(),
  ]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-40 py-8 flex flex-col gap-8">
      <section className="rounded-2xl overflow-hidden relative min-h-[280px] flex flex-col justify-center p-8 md:p-12 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${IMAGES.dashboardBg}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent z-10"></div>
        <div className="relative z-20 flex flex-col gap-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit backdrop-blur-md">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              Matchday 5 Live
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Welcome back, <span className="text-primary">{user.name.split(' ')[0]}!</span>
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300 font-medium text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">groups</span>
              Team: {user.teamName}
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">scoreboard</span>
              Total Points: {user.points}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-dark border border-white/5 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
            <span className="material-symbols-outlined">timer</span>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Matchday 6 Deadline</h3>
            <p className="text-gray-400 text-sm">
              Make your transfers before the first match starts.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1 min-w-[60px]">
            <div className="w-full bg-background-dark rounded border border-white/10 py-2 text-center text-xl font-bold font-mono text-primary">
              02
            </div>
            <span className="text-xs text-gray-500 font-medium uppercase">Days</span>
          </div>
          <div className="flex flex-col items-center gap-1 min-w-[60px]">
            <div className="w-full bg-background-dark rounded border border-white/10 py-2 text-center text-xl font-bold font-mono text-primary">
              14
            </div>
            <span className="text-xs text-gray-500 font-medium uppercase">Hours</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-dark rounded-xl border border-white/5 overflow-hidden flex flex-col h-full min-h-[600px]">
            <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">My Team</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-background-dark hover:bg-surface-dark-hover border border-white/10 rounded text-xs font-bold text-white transition-colors">
                  List View
                </button>
                <button className="px-3 py-1.5 bg-primary text-background-dark rounded text-xs font-bold transition-colors">
                  Pitch View
                </button>
              </div>
            </div>
            <PitchView players={team} />
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-dark rounded-xl border border-white/5 overflow-hidden">
            <div className="p-4 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-white font-bold text-base">Office Buddies League</h3>
              <Link className="text-primary text-xs font-bold hover:underline" href="/leaderboard">
                View All
              </Link>
            </div>
            <div className="p-2">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-white/5 rounded">
                  <tr>
                    <th className="px-3 py-2 rounded-l">Rank</th>
                    <th className="px-3 py-2">Team</th>
                    <th className="px-3 py-2 rounded-r text-right">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.slice(0, 5).map((entry) => (
                    <tr
                      key={entry.rank}
                      className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                    >
                      <td
                        className={`px-3 py-3 font-bold ${entry.rank === 1 ? 'text-primary' : 'text-gray-400'}`}
                      >
                        {entry.rank}
                      </td>
                      <td className="px-3 py-3">
                        <div className="font-medium text-white">{entry.user.teamName}</div>
                        <div className="text-[10px] text-gray-500">{entry.user.name}</div>
                      </td>
                      <td
                        className={`px-3 py-3 text-right font-bold ${entry.rank === 1 ? 'text-primary' : 'text-white'}`}
                      >
                        {entry.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="relative bg-surface-dark rounded-xl border border-white/5 overflow-hidden p-6 flex flex-col items-start gap-4">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl text-primary">trending_up</span>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 rounded bg-primary text-background-dark text-[10px] font-bold uppercase tracking-wider mb-2">
                One to Watch
              </span>
              <h3 className="text-white font-bold text-lg leading-tight">Rashid Khan</h3>
              <p className="text-gray-400 text-sm">Highest wicket taker in last 3 matches.</p>
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="relative size-16 shrink-0">
                <img
                  className="size-16 rounded-full border-2 border-primary object-cover"
                  src={IMAGES.rashidLarge || IMAGES.rashid}
                  alt="Rashid Khan"
                />
              </div>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div className="bg-background-dark p-2 rounded border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase">Selected By</div>
                  <div className="text-sm font-bold text-white">42.5%</div>
                </div>
                <div className="bg-background-dark p-2 rounded border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase">Price</div>
                  <div className="text-sm font-bold text-primary">£9.2m</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
