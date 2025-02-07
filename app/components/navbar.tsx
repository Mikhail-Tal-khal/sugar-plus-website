'use client';

import Link from 'next/link';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/app/components/theme-toggle';

export function Navbar() {
  return (
    <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/founders" className="text-muted-foreground hover:text-primary transition-colors">
            Our Team
          </Link>
          <Link href="/investor" className="text-muted-foreground hover:text-primary transition-colors">
            Investors
          </Link>
          <ThemeToggle />
          <Button className="rounded-full">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}