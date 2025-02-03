import { StatCard } from "./StatCard";
import { Users, Target, TrendingUp } from "lucide-react";

export const MarketOpportunity = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-black text-center mb-12">
        Market Opportunity
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <StatCard
          icon={<Users className="h-12 w-12 text-primary mb-4" />}
          value="537M"
          description="People with diabetes worldwide"
          title={""}
        />
        <StatCard
          icon={<Target className="h-12 w-12 text-primary mb-4" />}
          value="$966B"
          description="Global diabetes care market by 2026"
          title={""}
        />
        <StatCard
          icon={<TrendingUp className="h-12 w-12 text-primary mb-4" />}
          value="16.8%"
          description="CAGR in digital health solutions"
          title={""}
        />
      </div>
    </div>
  </section>
);
