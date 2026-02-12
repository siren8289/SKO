"use client";

import { Header } from "../shared/layout/Header";
import { Footer } from "../shared/layout/Footer";
import { HomeView } from "../features/home/HomeView";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HomeView />
      </main>
      <Footer />
    </div>
  );
}

