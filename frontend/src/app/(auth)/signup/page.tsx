"use client";

import { Header } from "../../../shared/layout/Header";
import { Footer } from "../../../shared/layout/Footer";
import SignUpPage from "../../../pages/signup";

export default function SignUpRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <SignUpPage />
      </main>
      <Footer />
    </div>
  );
}

