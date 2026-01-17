import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a160e] border-t border-[#e6e8eb] dark:border-[#23482f] pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2 text-[#111418] dark:text-white">
            <div className="size-6">
              <Logo />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">BeyondBoundary</h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The world&apos;s biggest fantasy cricket game. Built for fans, by fans.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white">Game</h4>
            <a className="text-sm text-gray-500 hover:text-primary" href="#">
              Rules
            </a>
            <a className="text-sm text-gray-500 hover:text-primary" href="#">
              Rankings
            </a>
            <a className="text-sm text-gray-500 hover:text-primary" href="#">
              Scoring
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white">Community</h4>
            <a className="text-sm text-gray-500 hover:text-primary" href="#">
              Forums
            </a>
            <a className="text-sm text-gray-500 hover:text-primary" href="#">
              Leagues
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white">Legal</h4>
            <a className="text-sm text-gray-500 hover:text-primary" href="#">
              Terms
            </a>
            <a className="text-sm text-gray-500 hover:text-primary" href="#">
              Privacy
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#23482f] flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 dark:text-gray-500">
        <p>© 2026 BeyondBoundary Fantasy Cricket. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Not associated with ICC or any cricket boards.</p>
      </div>
    </footer>
  );
}
