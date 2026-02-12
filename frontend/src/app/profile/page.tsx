"use client";

import { Header } from "../../shared/layout/Header";
import { Footer } from "../../shared/layout/Footer";
import ProfilePage from "../../pages/profile";

export default function ProfileRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ProfilePage />
      </main>
      <Footer />
    </div>
  );
}

