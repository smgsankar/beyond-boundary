import { IMAGES } from '@/app/lib/images';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="flex flex-1 flex-col w-full max-w-7xl mx-auto">
        {/* Top Bar / Breadcrumbs */}
        <header className="hidden items-center justify-between px-8 py-5 lg:flex">
            <div className="flex items-center gap-2 text-sm">
                <Link className="text-slate-500 hover:text-primary transition-colors" href="/dashboard">Home</Link>
                <span className="text-slate-600 dark:text-slate-500">/</span>
                <span className="font-medium text-slate-900 dark:text-white">Profile</span>
            </div>
            <div className="flex items-center gap-4">
                <button className="relative flex items-center justify-center rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary"></span>
                </button>
            </div>
        </header>

        <div className="container mx-auto p-4 lg:p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                {/* Left Column: Identity */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Identity Card */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-surface-dark">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-4">
                                <div className="h-32 w-32 rounded-full border-4 border-primary p-1">
                                    <img className="h-full w-full rounded-full bg-cover bg-center object-cover" src={IMAGES.userAvatar} alt="Profile picture" />
                                </div>
                                <div className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-surface-dark border border-slate-700 text-primary">
                                    <span className="material-symbols-outlined text-lg">verified</span>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Ashwin &apos;The Striker&apos; K.</h2>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">ashwin@example.com</p>
                            <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                <span>Joined Season 1</span>
                            </div>
                            <div className="mt-6 w-full">
                                <Link href="/settings">
                                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-slate-900 shadow-md shadow-primary/20 hover:bg-green-400 transition-all active:scale-95">
                                        <span className="material-symbols-outlined text-[20px]">edit_square</span>
                                        Edit Profile
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-slate-100 dark:border-slate-700 pt-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Trophies &amp; Badges</h3>
                            <div className="flex flex-wrap gap-3">
                                <div className="group relative flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary/20 transition-colors" title="Season 1 Winner">
                                    <span className="material-symbols-outlined text-amber-400 text-2xl group-hover:scale-110 transition-transform">emoji_events</span>
                                </div>
                                <div className="group relative flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary/20 transition-colors" title="High Scorer">
                                    <span className="material-symbols-outlined text-blue-400 text-2xl group-hover:scale-110 transition-transform">trending_up</span>
                                </div>
                                <div className="group relative flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary/20 transition-colors" title="Perfect Team">
                                    <span className="material-symbols-outlined text-purple-400 text-2xl group-hover:scale-110 transition-transform">stars</span>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600">
                                    <span className="material-symbols-outlined text-slate-400 text-xl">add</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mini Bio / Status */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-surface-dark">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Current Status</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Currently focusing on building a balanced squad for the upcoming T20 World Cup finals. Looking for a strong All-Rounder.
                        </p>
                    </div>
                </div>

                {/* Right Column: Data */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-surface-dark relative overflow-hidden group">
                            <div className="absolute right-0 top-0 h-16 w-16 -mr-4 -mt-4 rounded-full bg-primary/10 transition-transform group-hover:scale-150"></div>
                            <p className="relative text-sm font-medium text-slate-500 dark:text-slate-400">Global Rank</p>
                            <div className="relative mt-2 flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">#14,021</span>
                                <span className="flex items-center text-xs font-semibold text-primary">
                                    <span className="material-symbols-outlined text-sm">arrow_upward</span>
                                    12%
                                </span>
                            </div>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-surface-dark relative overflow-hidden group">
                            <div className="absolute right-0 top-0 h-16 w-16 -mr-4 -mt-4 rounded-full bg-blue-500/10 transition-transform group-hover:scale-150"></div>
                            <p className="relative text-sm font-medium text-slate-500 dark:text-slate-400">Total Points</p>
                            <div className="relative mt-2 flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">320</span>
                                <span className="flex items-center text-xs font-semibold text-primary">
                                    <span className="material-symbols-outlined text-sm">arrow_upward</span>
                                    5%
                                </span>
                            </div>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-surface-dark relative overflow-hidden group">
                            <div className="absolute right-0 top-0 h-16 w-16 -mr-4 -mt-4 rounded-full bg-purple-500/10 transition-transform group-hover:scale-150"></div>
                            <p className="relative text-sm font-medium text-slate-500 dark:text-slate-400">Win Rate</p>
                            <div className="relative mt-2 flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">68%</span>
                                <span className="flex items-center text-xs font-semibold text-primary">
                                    <span className="material-symbols-outlined text-sm">arrow_upward</span>
                                    2%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* Team Composition */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-surface-dark h-full">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Team Composition</h3>
                                <button className="text-xs font-medium text-primary hover:text-green-400">Manage Team</button>
                            </div>
                            <div className="flex items-center justify-center gap-8">
                                <div className="relative h-40 w-40 flex-shrink-0">
                                    <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 36 36">
                                        <path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3.8"></path>
                                        <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="40, 100" strokeLinecap="round" strokeWidth="3.8"></path>
                                        <path className="text-blue-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="30, 100" strokeDashoffset="-42" strokeLinecap="round" strokeWidth="3.8"></path>
                                        <path className="text-amber-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="20, 100" strokeDashoffset="-74" strokeLinecap="round" strokeWidth="3.8"></path>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">11</span>
                                        <span className="text-[10px] uppercase text-slate-500">Players</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center gap-3 w-full">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                                            <span className="text-slate-600 dark:text-slate-300">Batsmen</span>
                                        </div>
                                        <span className="font-bold dark:text-white">5</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                                            <span className="text-slate-600 dark:text-slate-300">Bowlers</span>
                                        </div>
                                        <span className="font-bold dark:text-white">4</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                                            <span className="text-slate-600 dark:text-slate-300">All-Rounders</span>
                                        </div>
                                        <span className="font-bold dark:text-white">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Matches */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-surface-dark h-full">
                            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Recent Match History</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 last:border-0 last:pb-0">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold text-xs">IND</div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold dark:text-white">vs Australia</span>
                                            <span className="text-xs text-slate-500">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-sm font-bold text-primary">+850 pts</span>
                                        <span className="text-xs text-slate-500">Rank #124</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 last:border-0 last:pb-0">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold text-xs">ENG</div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold dark:text-white">vs South Africa</span>
                                            <span className="text-xs text-slate-500">5 days ago</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-sm font-bold text-slate-900 dark:text-white">420 pts</span>
                                        <span className="text-xs text-slate-500">Rank #890</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
