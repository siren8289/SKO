import React from 'react';
import { CategoryView } from '../features/category/CategoryView';
import { Header } from '../shared/layout/Header';
import { Footer } from '../shared/layout/Footer';

export default function CategoryPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryView />
      </main>
      <Footer />
    </>
  );
}
