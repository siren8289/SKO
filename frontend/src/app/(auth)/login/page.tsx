"use client";

import { Header } from "../../../shared/layout/Header";
import { Footer } from "../../../shared/layout/Footer";
import LoginPage from "../../../pages/login";

export default function LoginRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <LoginPage />
      </main>
      <Footer />
    </div>
  );
}

