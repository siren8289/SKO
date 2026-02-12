"use client";

import { Header } from "../../../shared/layout/Header";
import { Footer } from "../../../shared/layout/Footer";
import { PatternView } from "../../../features/pattern/PatternView";

interface PatternPageProps {
  params: { id: string };
}

export default function PatternPage({ params }: PatternPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PatternView id={params.id} />
      </main>
      <Footer />
    </div>
  );
}

