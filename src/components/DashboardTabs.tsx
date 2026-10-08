
import { useState } from "react";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Summary } from 'lucide-react';
import { LayoutGrid } from 'lucide-react';

export function DashboardTabs() {
  const [mode, setMode] = useState<"Overview" | "ByCategory">("Overview");
  return (
    <div className="w-full">
      <Tabs
        value={mode}
        onValueChange={(v) => setMode(v as "Overview" | "ByCategory")}
      >
        <TabsList>
          <TabsTrigger value="Overview"> <Summary/>Overview</TabsTrigger>
          <TabsTrigger value="ByCategory"> <LayoutGrid />ByCategory</TabsTrigger>
        </TabsList>
        <TabsContent value="Overview" className="pt-2">
          <OverviewCards />
        </TabsContent>
        <TabsContent value="ByCategory" className="pt-2">
          <CategoryCards/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
