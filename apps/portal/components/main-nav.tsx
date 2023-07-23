"use client";

import { siteConfig } from "@/config/site";
import { Icons } from "@murshidazher/employee-manager-ui";
import Link from "next/link";
import * as React from "react";

const MainNav = () => {
  return (
    <div className="mr-4 md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
    </div>
  );
};

MainNav.displayName = "MainNav";

export { MainNav };
