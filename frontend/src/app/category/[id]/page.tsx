"use client";

import { Header } from "../../../shared/layout/Header";
import { Footer } from "../../../shared/layout/Footer";
import { CategoryView } from "../../../features/category/CategoryView";

interface CategoryPageProps {
  params: { id: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CategoryView id={params.id} />
      </main>
      <Footer />
    </div>
  );
}

