import React from 'react';
import { HomeView } from '../features/home/HomeView';
import { Header } from '../shared/layout/Header';
import { Footer } from '../shared/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeView />
      </main>
      <Footer />
    </>
  );
}
