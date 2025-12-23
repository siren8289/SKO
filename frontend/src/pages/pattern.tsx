import React from 'react';
import { PatternView } from '../features/pattern/PatternView';
import { Header } from '../shared/layout/Header';
import { Footer } from '../shared/layout/Footer';

export default function PatternPage() {
  return (
    <>
      <Header />
      <main>
        <PatternView />
      </main>
      <Footer />
    </>
  );
}
