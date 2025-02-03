'use client';

import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const founders = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CEO & Medical Director',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80',
    bio: 'Former Head of Endocrinology at Stanford Medical Center with 15+ years experience in diabetes care.',
    links: {
      linkedin: '#',
      email: 'sarah@sugarplus.com'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
    bio: 'Tech veteran with previous experience at Apple Health and Google Fit. Passionate about healthcare technology.',
    links: {
      github: '#',
      linkedin: '#',
      email: 'michael@sugarplus.com'
    }
  },
  {
    name: 'Dr. Emily Wong',
    role: 'Head of Research',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
    bio: 'PhD in Medical AI from MIT. Leading our machine learning initiatives for predictive diabetes care.',
    links: {
      linkedin: '#',
      email: 'emily@sugarplus.com'
    }
  }
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Meet Our Founders</h1>
          <p className="text-xl text-black">
            Combining expertise in medicine, technology, and research to revolutionize diabetes care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders.map((founder) => (
            <Card key={founder.name} className="overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-black mb-1">{founder.name}</h2>
                <p className="text-primary mb-4">{founder.role}</p>
                <p className="text-black mb-6">{founder.bio}</p>
                <div className="flex gap-4">
                  {founder.links.github && (
                    <a href={founder.links.github} className="text-primary hover:text-primary/80">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {founder.links.linkedin && (
                    <a href={founder.links.linkedin} className="text-primary hover:text-primary/80">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {founder.links.email && (
                    <a href={`mailto:${founder.links.email}`} className="text-primary hover:text-primary/80">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}