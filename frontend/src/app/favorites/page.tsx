"use client";

import { Header } from "../../shared/layout/Header";
import { Footer } from "../../shared/layout/Footer";
import FavoritesPage from "../../pages/favorites";

export default function FavoritesRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <FavoritesPage />
      </main>
      <Footer />
    </div>
  );
}

