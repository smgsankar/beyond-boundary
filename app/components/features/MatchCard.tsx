import { Match } from '@/app/lib/definitions';

export default function MatchCard({ match }: { match: Match }) {
  return (
    <div className="min-w-[280px] md:min-w-[320px] snap-center bg-white dark:bg-[#193322] border border-[#e6e8eb] dark:border-[#326744] rounded-xl p-5 hover:border-primary transition-colors cursor-pointer group">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold text-gray-500 dark:text-[#92c9a4] uppercase">
          T20 World Cup • {match.group || 'Group'}
        </span>
        {match.status === 'LIVE' ? (
          <span className="px-2 py-1 rounded bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20">LIVE</span>
        ) : (
          <span className="text-xs font-medium text-gray-400">{match.date}</span>
        )}
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-center gap-2">
             <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-black/20 flex items-center justify-center text-xl overflow-hidden shadow-sm">
                {match.team1Flag ? (
                    <img src={match.team1Flag} alt={match.team1} className="w-full h-full object-cover" />
                ) : (
                    <span>{match.team1Short[0]}</span>
                )}
             </div>
             <span className="font-bold text-lg dark:text-white">{match.team1Short}</span>
        </div>

        {match.status === 'LIVE' ? (
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-[#111418] dark:text-white">{match.team1Score}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{match.team1Overs}</span>
                <span className="mt-2 text-xs font-bold text-primary">v</span>
             </div>
        ) : (
             <div className="flex flex-col items-center px-4 py-2 rounded bg-black/10 dark:bg-black/30">
                <span className="text-sm font-bold text-gray-500 dark:text-gray-300">{match.time}</span>
                <span className="text-xs text-gray-400 uppercase">IST</span>
             </div>
        )}

        <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-black/20 flex items-center justify-center text-xl overflow-hidden shadow-sm">
                {match.team2Flag ? (
                    <img src={match.team2Flag} alt={match.team2} className="w-full h-full object-cover" />
                ) : (
                    <span>{match.team2Short[0]}</span>
                )}
            </div>
            <span className="font-bold text-lg dark:text-white">{match.team2Short}</span>
        </div>
      </div>

      {match.featuredPlayer ? (
        <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-[#92c9a4]">{match.featuredPlayer}</p>
        </div>
      ) : (
        <div className="w-full bg-black/20 h-8 rounded flex items-center justify-center text-xs text-primary group-hover:bg-primary group-hover:text-[#112217] font-bold transition-colors">
            {match.status === 'LIVE' ? 'View Score' : 'Make Transfers'}
        </div>
      )}
    </div>
  );
}
