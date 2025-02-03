'use client';

import { ArrowRight, Activity, Clock, Bell, LineChart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-black mb-6">
              Manage Diabetes with Confidence
            </h1>
            <p className="text-xl text-black mb-8">
              Sugar Plus is your comprehensive diabetes management companion. Track glucose levels, 
              set reminders, and handle emergencies—all in one intuitive app.
            </p>
            <div className="flex gap-4">
              <Link href="/investors">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-16">
            Everything You Need to Stay Healthy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <Activity className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Glucose Tracking</h3>
              <p className="text-black">
                Log and monitor your blood glucose levels with easy-to-use tools and visualizations.
              </p>
            </Card>
            <Card className="p-6">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Smart Reminders</h3>
              <p className="text-black">
                Never miss a measurement or medication with customizable alerts.
              </p>
            </Card>
            <Card className="p-6">
              <Bell className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Emergency Alerts</h3>
              <p className="text-black">
                Quick access to emergency contacts and critical health information.
              </p>
            </Card>
            <Card className="p-6">
              <LineChart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Trend Analysis</h3>
              <p className="text-black">
                Understand your health patterns with detailed analytics and reports.
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Data Security</h3>
              <p className="text-black">
                Your health data is protected with industry-leading security measures.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Take Control of Your Diabetes Today
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Sugar Plus to manage their diabetes effectively.
            Start your journey to better health now.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Download Sugar Plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}