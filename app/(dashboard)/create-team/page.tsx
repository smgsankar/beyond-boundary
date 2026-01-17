'use client';

import Button from '@/app/components/ui/Button';

export default function CreateTeamPage() {
  return (
    <div className="w-full max-w-[640px] mx-auto py-8 px-4 flex flex-col items-center">
        {/* Progress Stepper */}
        <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-500 dark:text-gray-400 uppercase tracking-wider">Step 1 of 3</span>
                <span className="text-xs text-slate-400 dark:text-gray-500">Team Setup</span>
            </div>
            <div className="h-1.5 w-full bg-gray-200 dark:bg-surface-dark rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/3 rounded-full shadow-[0_0_10px_#13ec5b]"></div>
            </div>
        </div>

        {/* Page Header */}
        <div className="w-full mb-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white mb-2 leading-tight">
                Assemble Your<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Dream Team</span>
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-lg font-normal">T20 World Cup Fantasy League</p>
        </div>

        {/* Rules Card */}
        <div className="w-full bg-white dark:bg-surface-dark rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-border-dark mb-8 relative overflow-hidden group">
             {/* Decorative glow */}
             <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-all duration-700"></div>
             <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">rule</span>
                 Squad Rules
             </h3>
             <ul className="space-y-4">
                 <RuleItem text={<span>Select exactly <span className="font-bold text-slate-900 dark:text-white">11 players</span> for your final squad.</span>} />
                 <RuleItem text={<span>Maximum <span className="font-bold text-slate-900 dark:text-white">7 players</span> from a single nation.</span>} />
                 <RuleItem text={<span>Stay within the <span className="font-bold text-primary">100 Credit</span> budget cap.</span>} />
                 <RuleItem text={<span>Composition: 1 Wicket Keeper, 3-6 Batters, 1-4 All-Rounders, 3-6 Bowlers.</span>} />
             </ul>
        </div>

        {/* Form Section */}
        <div className="w-full space-y-8">
            <div className="group">
                <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 pl-1" htmlFor="team-name">
                    Your Squad Name
                </label>
                <div className="relative">
                    <input className="w-full h-16 px-5 rounded-xl bg-white dark:bg-black/20 border-2 border-gray-200 dark:border-border-dark text-slate-900 dark:text-white text-lg placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300" id="team-name" placeholder="e.g. Kohli's Kings" type="text" />
                    <div className="absolute right-4 bottom-4 text-xs font-mono text-gray-400">0/25</div>
                </div>
            </div>
            <Button size="lg" fullWidth className="h-14 rounded-xl text-lg shadow-[0_4px_20px_rgba(19,236,91,0.25)]">
                <span>Continue to Selection</span>
                <span className="material-symbols-outlined text-xl ml-2">arrow_forward</span>
            </Button>
        </div>
    </div>
  );
}

function RuleItem({ text }: { text: React.ReactNode }) {
    return (
        <li className="flex gap-4 items-start">
             <div className="mt-0.5 min-w-5">
                 <span className="material-symbols-outlined text-primary text-[20px] font-bold">check</span>
             </div>
             <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{text}</p>
        </li>
    )
}
