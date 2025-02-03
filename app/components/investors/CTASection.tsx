import { Button } from "@/components/ui/button";

export const CTASection = () => (
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
);