"use client";

import { Header } from "../../../shared/layout/Header";
import { Footer } from "../../../shared/layout/Footer";
import { DemoView } from "../../../features/demo/DemoView";

interface DemoPageProps {
  params: { id: string };
}

export default function DemoPage({ params }: DemoPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <DemoView id={params.id} />
      </main>
      <Footer />
    </div>
  );
}

