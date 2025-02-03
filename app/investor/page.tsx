'use client';

import { HeroSection } from '@/app/components/investors/HeroSection';
import { VideoSection } from '@/app/components/investors/VideoSection';
import { MarketOpportunity } from '@/app/components/investors/MarketOpportunity';
import { RevenueProjections } from '@/app/components/investors/RevenueProjections';
import { FutureInsights } from '@/app/components/investors/FutureInsights';
import { ContactSection } from '@/app/components/investors/ContactSection';
import { CTASection } from '@/app/components/investors/CTASection';
import { revenueData, futureInsights } from '@/lib/investor-data';

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VideoSection />
      <MarketOpportunity />
      <RevenueProjections data={revenueData} />
      <FutureInsights insights={futureInsights} />
      <ContactSection />
      <CTASection />
    </div>
  );
}