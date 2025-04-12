import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

function DashboardPage() {
  const breadcrumbItems = [{ label: "Dashboard", href: "/dashboard" }];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 pb-8 ">
      <div className="mb-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-[#26334D]">
          <CardHeader>
            <CardTitle className="text-[#a3adc2]">Total Sales</CardTitle>
            <CardDescription className="text-[#a3adc2]">
              Total sales for the month of April 2025
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;
