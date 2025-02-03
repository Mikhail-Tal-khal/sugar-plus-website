'use client';

import { Plus } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-1">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">S</span>
        </div>
        <Plus className="absolute -top-1 -right-1 w-4 h-4 text-primary" />
      </div>
      <span className="font-bold text-xl text-primary">Sugar Plus</span>
    </div>
  );
}