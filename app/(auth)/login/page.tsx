'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/app/components/ui/Logo';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display h-screen flex flex-col">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px] transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <header className="relative z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#23482f] px-6 lg:px-10 py-4 bg-background-dark/80 backdrop-blur-md">
          <Link href="/" className="flex items-center text-white cursor-pointer">
            <Logo showText size="lg" />
          </Link>
          <div className="hidden sm:flex text-sm font-medium text-[#92c9a4]">
            Not a member yet?{' '}
            <Link className="ml-2 text-primary hover:underline" href="/signup">
              Sign up now
            </Link>
          </div>
        </header>

        <main className="relative z-10 flex flex-1 items-center justify-center p-4">
          <div className="w-full max-w-[480px] flex-col rounded-2xl bg-surface-dark border border-[#326744] p-6 shadow-2xl sm:p-10">
            <div className="mb-8 text-center">
              <h1 className="text-white text-3xl font-bold leading-tight mb-2">Enter the Arena</h1>
              <p className="text-[#92c9a4] text-base">Sign in to manage your T20 squad.</p>
            </div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <Input
                label="Email or Username"
                placeholder="Enter your email or username"
                type="text"
              />

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-white text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <a
                    className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <Input id="password" placeholder="Enter your password" type="password" />
              </div>

              <Button type="submit" size="lg" fullWidth className="mt-2">
                Log In
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
