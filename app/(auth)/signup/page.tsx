'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/app/components/ui/Logo';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark px-6 lg:px-10 py-4 bg-background-dark z-20 sticky top-0">
        <Link href="/" className="flex items-center text-white cursor-pointer">
          <Logo showText size="lg" />
        </Link>
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <Link
              className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="/login"
            >
              Login
            </Link>
          </div>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
        <div className="md:hidden text-white cursor-pointer">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </header>
      <main className="flex-grow flex flex-col justify-center">
        <div className="w-full h-full flex flex-col lg:flex-row">
          {/* Left Panel */}
          <div className="lg:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 bg-background-dark relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10 max-w-lg">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-primary/20">
                  Official Fantasy League
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
                  Start Your <br />
                  <span className="text-primary">Manager Career</span>
                </h1>
                <p className="text-[#92c9a4] text-lg font-normal leading-relaxed mb-8">
                  Build your dream team for the T20 World Cup. Compete with friends, track live
                  scores, and win exclusive prizes every match day.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">trophy</span>
                    </div>
                    <span className="text-white text-sm font-medium">Weekly Prizes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">analytics</span>
                    </div>
                    <span className="text-white text-sm font-medium">Live Stats</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Panel */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center px-4 md:px-16 py-12 bg-surface-dark/30 border-l border-border-dark relative">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <h2 className="text-white text-2xl font-bold mb-2">Create Account</h2>
                <p className="text-[#92c9a4] text-sm">
                  Join thousands of managers around the world.
                </p>
              </div>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <Input label="Username" icon="person" placeholder="Enter your manager name" />
                <Input
                  label="Email Address"
                  icon="mail"
                  placeholder="name@example.com"
                  type="email"
                />
                <Input
                  label="Password"
                  icon="lock"
                  placeholder="Create a strong password"
                  type="password"
                />
                <Button type="submit" size="lg" fullWidth className="mt-2">
                  Create Account
                </Button>
              </form>
              <div className="mt-8 text-center">
                <p className="text-[#92c9a4] text-sm">
                  Already have a team?
                  <Link
                    className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1"
                    href="/login"
                  >
                    Log in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
