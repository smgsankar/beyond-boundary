import Link from 'next/link';
import { IMAGES } from '@/app/lib/images';

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-dark-hover bg-background-dark/95 backdrop-blur-sm">
        <div className="px-4 md:px-10 lg:px-40 py-3 flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-4 text-white">
                <div className="size-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '32px' }}>sports_cricket</span>
                </div>
                <h2 className="text-white text-xl font-bold leading-tight tracking-tight hidden md:block">BeyondBoundary</h2>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
                <Link href="/dashboard" className="text-primary text-sm font-bold border-b-2 border-primary pb-0.5">Dashboard</Link>
                <Link href="/create-team" className="text-white/80 hover:text-white text-sm font-medium transition-colors">My Team</Link>
                <Link href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Transfers</Link>
                <Link href="/leaderboard" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Leagues</Link>
            </nav>
            <div className="flex items-center gap-3">
                <button className="flex items-center justify-center size-10 rounded-full bg-surface-dark hover:bg-surface-dark-hover text-white transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <Link href="/profile" className="size-10 rounded-full bg-center bg-cover border-2 border-surface-dark-hover cursor-pointer" style={{ backgroundImage: `url('${IMAGES.userAvatar}')` }}></Link>
            </div>
        </div>
    </header>
  );
}
