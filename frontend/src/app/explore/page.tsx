"use client";

import { Header } from "../../shared/layout/Header";
import { Footer } from "../../shared/layout/Footer";
import { ExploreView } from "../../features/explore/ExploreView";

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ExploreView />
      </main>
      <Footer />
    </div>
  );
}

