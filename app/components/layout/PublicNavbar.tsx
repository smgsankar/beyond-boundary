import Link from 'next/link';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

export default function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-[#e6e8eb] dark:border-[#23482f] bg-white dark:bg-[#112217] px-4 py-3 md:px-10">
      <Link href="/" className="flex items-center gap-4 text-[#111418] dark:text-white">
        <div className="size-8">
            <Logo />
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">BeyondBoundary</h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link href="/" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Home</Link>
          <Link href="#" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Leagues</Link>
          <Link href="/schedule" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Stats</Link>
          <Link href="#" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Rules</Link>
        </div>
        <div className="flex gap-2">
          <Link href="/login">
            <Button variant="secondary">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
      <div className="flex md:hidden text-white">
        <span className="material-symbols-outlined cursor-pointer">menu</span>
      </div>
    </header>
  );
}
