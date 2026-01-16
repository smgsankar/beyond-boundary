import { getLeaderboard } from '@/app/lib/services';

export default async function LeaderboardPage() {
  const leaderboard = await getLeaderboard();

  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col h-full px-4 sm:px-6 lg:px-8 py-6">
        {/* Header & Stats */}
        <div className="flex-none mb-6">
            <div className="flex flex-col lg:flex-row gap-6 items-end justify-between mb-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 uppercase italic">Global Standings</h1>
                    <p className="text-gray-400 text-lg">Track the top performers in the T20 World Cup Fantasy League</p>
                </div>
                {/* Stats Widget */}
                <div className="flex gap-3 md:gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
                    <StatCard icon="groups" label="Total Players" value="1.2M" />
                    <StatCard icon="emoji_events" label="Highest Score" value="5,021" valueColor="text-primary" />
                    <StatCard icon="person" label="Your Rank" value="#14,021" borderColor="border-primary/30" shadow="shadow-[0_0_20px_-5px_rgba(19,236,91,0.3)]" />
                </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-dark/50 backdrop-blur-sm p-2 rounded-xl border border-[#2d333b]">
                <div className="flex bg-[#121418] p-1 rounded-lg w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-2 rounded-md bg-surface-dark text-white shadow-sm text-sm font-bold transition-all">Global</button>
                    <button className="flex-1 md:flex-none px-6 py-2 rounded-md text-gray-400 hover:text-white hover:bg-surface-dark/50 text-sm font-medium transition-all">Friends</button>
                    <button className="flex-1 md:flex-none px-6 py-2 rounded-md text-gray-400 hover:text-white hover:bg-surface-dark/50 text-sm font-medium transition-all">My Leagues</button>
                </div>
            </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-hidden relative rounded-xl border border-[#2d333b] bg-[#121418] flex flex-col shadow-2xl">
             {/* Header */}
             <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#1a1d21] border-b border-[#2d333b] text-xs font-bold text-gray-400 uppercase tracking-wider sticky top-0 z-10">
                <div className="col-span-2 md:col-span-1 text-center">Rank</div>
                <div className="col-span-6 md:col-span-5">User</div>
                <div className="col-span-2 md:col-span-3 text-right">Points</div>
                <div className="col-span-2 md:col-span-3 text-right pr-2">Movement</div>
             </div>

             <div className="overflow-y-auto flex-1 p-2 space-y-1">
                {leaderboard.map((entry) => (
                    <div key={entry.rank} className={`group grid grid-cols-12 gap-4 px-4 py-3 items-center rounded-lg border-l-4 hover:bg-[#2d333b] transition-all cursor-pointer ${
                        entry.rank === 1 ? 'bg-gradient-to-r from-[#2d333b] to-[#23272F] border-yellow-400' :
                        entry.rank === 2 ? 'bg-surface-dark border-gray-300' :
                        entry.rank === 3 ? 'bg-surface-dark border-orange-400' :
                        'bg-surface-dark border-transparent hover:border-[#2d333b]'
                    }`}>
                        {/* Rank */}
                        <div className="col-span-2 md:col-span-1 flex justify-center">
                            {entry.rank <= 3 ? (
                                <div className={`size-8 rounded-full flex items-center justify-center font-black border ${
                                    entry.rank === 1 ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                                    entry.rank === 2 ? 'bg-gray-300/10 text-gray-300 border-gray-300/20' :
                                    'bg-orange-400/10 text-orange-400 border-orange-400/20'
                                }`}>{entry.rank}</div>
                            ) : (
                                <span className="text-gray-400 font-bold">{entry.rank}</span>
                            )}
                        </div>
                        {/* User */}
                        <div className="col-span-6 md:col-span-5 flex items-center gap-3">
                            <div className="relative">
                                <div className={`size-10 rounded-full bg-cover bg-center border-2 ${
                                    entry.rank === 1 ? 'border-yellow-400' :
                                    entry.rank === 2 ? 'border-gray-300' :
                                    entry.rank === 3 ? 'border-orange-400' : 'border-transparent'
                                }`} style={{ backgroundImage: `url('${entry.user.avatar}')` }}></div>
                                {entry.user.country && (
                                    <div className={`absolute -bottom-1 -right-1 text-black text-[10px] font-bold px-1.5 rounded-full border border-black ${
                                        entry.rank === 1 ? 'bg-yellow-400' :
                                        entry.rank === 2 ? 'bg-gray-300' :
                                        entry.rank === 3 ? 'bg-orange-400' : 'hidden'
                                    }`}>{entry.user.country}</div>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm group-hover:text-primary transition-colors">{entry.user.name}</span>
                                <span className="text-gray-500 text-xs">{entry.user.teamName}</span>
                            </div>
                        </div>
                        {/* Points */}
                        <div className="col-span-2 md:col-span-3 text-right">
                            <span className="text-white font-bold font-mono text-lg">{entry.points}</span>
                        </div>
                        {/* Movement */}
                        <div className={`col-span-2 md:col-span-3 flex justify-end items-center gap-1 font-medium text-sm pr-2 ${
                            entry.movement > 0 ? 'text-primary' : entry.movement < 0 ? 'text-red-500' : 'text-gray-500'
                        }`}>
                            {entry.movement !== 0 && (
                                <span className="material-symbols-outlined text-sm">{entry.movement > 0 ? 'arrow_upward' : 'arrow_downward'}</span>
                            )}
                            <span>{Math.abs(entry.movement) || '-'}</span>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    </div>
  )
}

interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  valueColor?: string;
  borderColor?: string;
  shadow?: string;
}

function StatCard({ icon, label, value, valueColor = "text-white", borderColor = "border-[#2d333b]", shadow = "" }: StatCardProps) {
    return (
        <div className={`flex flex-col justify-center min-w-[140px] bg-surface-dark border ${borderColor} rounded-lg p-4 relative overflow-hidden group ${shadow}`}>
            <div className="absolute right-0 top-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-4xl">{icon}</span>
            </div>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">{label}</p>
            <p className={`${valueColor} text-2xl font-bold`}>{value}</p>
        </div>
    )
}
