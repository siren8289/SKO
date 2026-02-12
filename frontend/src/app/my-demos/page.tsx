"use client";

import { Header } from "../../shared/layout/Header";
import { Footer } from "../../shared/layout/Footer";
import MyDemosPage from "../../pages/my-demos";

export default function MyDemosRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <MyDemosPage />
      </main>
      <Footer />
    </div>
  );
}

