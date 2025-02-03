import { Card } from "@/components/ui/card";
import { futureInsights } from "@/lib/investor-data";
import { LineChart } from "lucide-react";

export const FutureInsights = ({ insights }: { insights: typeof futureInsights }) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Future Insights</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight) => (
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
);