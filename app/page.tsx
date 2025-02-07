'use client';

import React from 'react';
import { ArrowRight, Activity, Clock, Bell, LineChart, Shield, Stethoscope, Heart, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative gradient-bg py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-primary mb-4 font-medium">
              <Stethoscope className="h-5 w-5" />
              Your Health Companion
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Smart Diabetes Management for a{' '}
              <span className="text-gradient">Healthier Life</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Take control of your diabetes with our comprehensive management platform. 
              Track glucose levels, get personalized insights, and live healthier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/investors">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="space-y-4">
            <Card className="gradient-card p-4 shadow-lg max-w-[240px]">
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-foreground">50,000+</p>
                </div>
              </div>
            </Card>
            <Card className="gradient-card p-4 shadow-lg max-w-[240px]">
              <div className="flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Daily Sign-ups</p>
                  <p className="text-2xl font-bold text-foreground">1,200+</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Diabetes Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to monitor and manage your diabetes effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Activity />}
              title="Glucose Tracking"
              description="Log and monitor your blood glucose levels with intuitive tools and visualizations"
            />
            <FeatureCard
              icon={<Clock />}
              title="Smart Reminders"
              description="Never miss a measurement or medication with customizable alerts"
            />
            <FeatureCard
              icon={<Bell />}
              title="Emergency Alerts"
              description="Quick access to emergency contacts and critical health information"
            />
            <FeatureCard
              icon={<LineChart />}
              title="Trend Analysis"
              description="Understand your health patterns with detailed analytics and reports"
            />
            <FeatureCard
              icon={<Shield />}
              title="Data Security"
              description="Your health data is protected with industry-leading security measures"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Start Managing Your Diabetes Better Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Sugar Plus to manage their diabetes effectively.
            Your journey to better health starts here.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full">
            Download Sugar Plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 text-primary" })}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}