"use client";

import { TabsList, TabsTrigger } from "@murshidazher/employee-manager-ui";
import { LayoutGrid, LayoutList } from "lucide-react";
import * as React from "react";

export const DataViewSelector = () => {
  return (
    <TabsList className="grid w-[88px] grid-cols-2">
      <TabsTrigger value="list">
        <LayoutList className="h-5 w-5" />
        <span className="sr-only">List view</span>
      </TabsTrigger>
      <TabsTrigger value="grid">
        <span className="sr-only">Grid view</span>
        <LayoutGrid className="h-5 w-5" />
      </TabsTrigger>
    </TabsList>
  );
};
