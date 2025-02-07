import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

export const StatCard = ({
  icon,
  value,
  description,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
}) => (
  <Card className="p-6">
    {icon}
    <h3 className="text-xl font-semibold text-black mb-2">{value}</h3>
    <p className="text-black">{description}</p>
  </Card>
);