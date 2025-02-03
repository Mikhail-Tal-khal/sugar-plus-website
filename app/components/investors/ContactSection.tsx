import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from 'lucide-react';
import React from "react";

export const ContactSection = () => (
  <section className="py-16 bg-primary/5">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Contact Us</h2>
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Investment Inquiries</h3>
              <div className="space-y-4">
                <ContactInfo icon={<Mail />} text="invest@sugarplus.com" href="mailto:invest@sugarplus.com" />
                <ContactInfo icon={<Phone />} text="+1 (234) 567-890" href="tel:+1234567890" />
                <ContactInfo icon={<MapPin />} address={["123 Innovation Drive", "San Francisco, CA 94105"]} />
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
);

const ContactInfo = ({ icon, text, href, address }: { 
  icon: React.ReactNode;
  text?: string;
  href?: string;
  address?: string[];
}) => (
  <div className="flex items-center gap-3">
    {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5 text-primary" })}
    {href ? (
      <a href={href} className="text-black hover:text-primary">
        {text}
      </a>
    ) : address ? (
      <span className="text-black">
        {address.map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </span>
    ) : (
      <span className="text-black">{text}</span>
    )}
  </div>
);