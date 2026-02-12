"use client";

import type { ReactNode } from "react";
import { AppProvider } from "../lib/store";
import { NavigationProvider } from "../lib/navigation";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </AppProvider>
  );
}

