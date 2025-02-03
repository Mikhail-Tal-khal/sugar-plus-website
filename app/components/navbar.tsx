'use client';

import Link from 'next/link';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/founders" className="text-muted-foreground hover:text-primary">
            Our Team
          </Link>
          <Link href="/investor" className="text-muted-foreground hover:text-primary">
            Investors
          </Link>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}