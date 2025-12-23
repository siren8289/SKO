import React from 'react';
import { DemoView } from '../features/demo/DemoView';
import { Header } from '../shared/layout/Header';
import { Footer } from '../shared/layout/Footer';

export default function DemoPage() {
  return (
    <>
      <Header />
      <main>
        <DemoView />
      </main>
      <Footer />
    </>
  );
}
