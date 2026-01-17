import { Player } from '@/app/lib/definitions';
import { IMAGES } from '@/app/lib/images';

export default function PitchView({ players }: { players: Player[] }) {
  const wk = players.filter(p => p.role === 'WK');
  const bat = players.filter(p => p.role === 'BAT');
  const all = players.filter(p => p.role === 'ALL');
  const bowl = players.filter(p => p.role === 'BOWL');

  return (
    <div className="relative flex-1 bg-gradient-to-b from-[#1f4229] via-[#285e3a] to-[#1f4229] p-6 flex flex-col justify-between items-center min-h-[500px] rounded-xl overflow-hidden" style={{ backgroundImage: `url('${IMAGES.grass}')` }}>
        {/* Pitch Markings */}
        <div className="absolute inset-x-[20%] top-10 bottom-10 border-2 border-white/10 rounded-full pointer-events-none"></div>
        <div className="absolute inset-x-[35%] top-0 bottom-0 border-x-2 border-dashed border-white/5 pointer-events-none"></div>

        {/* Rows */}
        <div className="flex justify-center w-full z-10 gap-8">
            {wk.map(p => <PlayerIcon key={p.id} player={p} />)}
        </div>
        <div className="flex justify-center w-full z-10 gap-8 md:gap-16">
            {bat.map(p => <PlayerIcon key={p.id} player={p} />)}
        </div>
        <div className="flex justify-center w-full z-10 gap-8 md:gap-12">
            {all.map(p => <PlayerIcon key={p.id} player={p} />)}
        </div>
        <div className="flex justify-center w-full z-10 gap-8 md:gap-12">
            {bowl.map(p => <PlayerIcon key={p.id} player={p} />)}
        </div>
    </div>
  );
}

function PlayerIcon({ player }: { player: Player }) {
    return (
        <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="relative">
                <img className={`size-14 rounded-full border-2 ${player.isCaptain ? 'border-primary' : 'border-white'} bg-gray-800 object-cover`} src={player.imageUrl} alt={player.name} />
                {player.role === 'WK' && <div className="absolute -bottom-2 -right-2 size-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-surface-dark">WK</div>}
                {player.isCaptain && <div className="absolute -top-2 -right-2 size-6 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-primary">C</div>}
            </div>
            <div className="bg-background-dark/90 px-3 py-1 rounded text-center backdrop-blur-sm group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <p className="text-xs font-bold leading-tight">{player.name}</p>
                <p className="text-[10px] font-medium opacity-80">{player.points} pts</p>
            </div>
        </div>
    )
}
