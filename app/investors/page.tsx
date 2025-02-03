'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, DollarSign, Mail, Phone, MapPin, LineChart } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { year: '2024', revenue: 2.5 },
  { year: '2025', revenue: 5.8 },
  { year: '2026', revenue: 12.0 },
  { year: '2027', revenue: 25.0 },
  { year: '2028', revenue: 45.0 },
];

const futureInsights = [
  {
    year: 2025,
    title: "Market Expansion",
    description: "Expansion into European and Asian markets, targeting 500,000+ active users."
  },
  {
    year: 2026,
    title: "AI Integration",
    description: "Advanced AI-powered predictive analytics for personalized diabetes management."
  },
  {
    year: 2027,
    title: "Healthcare Partnerships",
    description: "Strategic partnerships with major healthcare providers and insurance companies."
  },
  {
    year: 2028,
    title: "Global Leadership",
    description: "Becoming the leading digital diabetes management platform worldwide."
  }
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Investment Opportunity in Digital Health
            </h1>
            <p className="text-xl text-black mb-8">
              Join us in revolutionizing diabetes care through innovative technology and personalized healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-8">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="Sugar Plus App Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Market Opportunity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">537M</h3>
              <p className="text-black">People with diabetes worldwide</p>
            </Card>
            <Card className="p-6">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">$966B</h3>
              <p className="text-black">Global diabetes care market by 2026</p>
            </Card>
            <Card className="p-6">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">16.8%</h3>
              <p className="text-black">CAGR in digital health solutions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Revenue Projections with Graph */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Revenue Projections</h2>
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-6">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value}M`, 'Revenue']}
                      labelFormatter={(label) => `Year ${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">Year 1</h3>
              <p className="text-3xl font-bold text-primary mb-2">$2.5M</p>
              <p className="text-black">Projected Revenue</p>
            </Card>
            <Card className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">Year 3</h3>
              <p className="text-3xl font-bold text-primary mb-2">$12M</p>
              <p className="text-black">Projected Revenue</p>
            </Card>
            <Card className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">Year 5</h3>
              <p className="text-3xl font-bold text-primary mb-2">$45M</p>
              <p className="text-black">Projected Revenue</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Insights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Future Insights</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {futureInsights.map((insight) => (
                <Card key={insight.year} className="p-6">
                  <div className="flex items-start gap-4">
                    <LineChart className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-black">{insight.title}</h3>
                        <span className="text-primary font-medium">{insight.year}</span>
                      </div>
                      <p className="text-black">{insight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Contact Us</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Investment Inquiries</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:invest@sugarplus.com" className="text-black hover:text-primary">
                        invest@sugarplus.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:+1234567890" className="text-black hover:text-primary">
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-black">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Schedule a Meeting</h3>
                  <p className="text-black mb-6">
                    Ready to discuss investment opportunities? Our team is available for in-person or virtual meetings.
                  </p>
                  <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90">
                    Schedule Now
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Connect with us to learn more about investment opportunities and how you can be part of revolutionizing diabetes care.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Contact Investment Team
          </Button>
        </div>
      </section>
    </div>
  );
}