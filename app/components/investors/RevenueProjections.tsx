import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { RevenueChart } from "./RevenueChart";

export const RevenueProjections = ({ data }: { data: { year: string; revenue: number }[] }) => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Revenue Projections</h2>
      <div className="max-w-4xl mx-auto mb-16">
        <Card className="p-6">
          <div className="h-[400px] w-full">
            <RevenueChart data={data} />
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RevenueStatCard year="1" value="$2.5M" />
        <RevenueStatCard year="3" value="$12M" />
        <RevenueStatCard year="5" value="$45M" />
      </div>
    </div>
  </section>
);

const RevenueStatCard = ({ year, value }: { year: string; value: string }) => (
  <Card className="p-6 text-center">
    <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
    <h3 className="text-2xl font-bold text-black mb-2">Year {year}</h3>
    <p className="text-3xl font-bold text-primary mb-2">{value}</p>
    <p className="text-black">Projected Revenue</p>
  </Card>
);
