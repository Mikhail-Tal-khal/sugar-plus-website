'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Activity, 
  Bell, 
  Shield, 
  Download,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Journey to Better Health
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Take control of your diabetes management with Sugar Plus. Our comprehensive platform provides everything you need for effective diabetes care.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Download Now
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<Activity />}
              title="Glucose Tracking"
              description="Log and monitor your blood glucose levels with intuitive tools"
            />
            <FeatureCard
              icon={<Bell />}
              title="Smart Reminders"
              description="Never miss a measurement or medication with customizable alerts"
            />
            <FeatureCard
              icon={<Shield />}
              title="Data Security"
              description="Your health data is protected with industry-leading security"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Step
                number="1"
                title="Download the App"
                description="Get Sugar Plus from your device's app store"
              />
              <Step
                number="2"
                title="Create Your Profile"
                description="Set up your personal health profile and preferences"
              />
              <Step
                number="3"
                title="Connect Your Devices"
                description="Sync with your glucose meter and other health devices"
              />
              <Step
                number="4"
                title="Start Tracking"
                description="Begin logging your readings and getting insights"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Sugar Plus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BenefitCard
              title="Easy to Use"
              description="Intuitive interface designed for users of all ages"
            />
            <BenefitCard
              title="Data Insights"
              description="Get personalized recommendations based on your data"
            />
            <BenefitCard
              title="Doctor Connect"
              description="Share your data directly with your healthcare team"
            />
            <BenefitCard
              title="Community Support"
              description="Connect with others on the same journey"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Sugar Plus for their diabetes management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Download Now
              <Download className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  const iconElement = React.isValidElement(icon) 
    ? React.cloneElement(icon, { className: "h-6 w-6 text-primary" })
    : null;

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {iconElement}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

const Step = ({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const BenefitCard = ({ title, description }: {
  title: string;
  description: string;
}) => (
  <Card className="p-6">
    <div className="flex items-start gap-4">
      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </Card>
);