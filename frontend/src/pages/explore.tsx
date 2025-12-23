import React from 'react';
import { ExploreView } from '../features/explore/ExploreView';
import { Header } from '../shared/layout/Header';
import { Footer } from '../shared/layout/Footer';

export default function ExplorePage() {
  return (
    <>
      <Header />
      <main>
        <ExploreView />
      </main>
      <Footer />
    </>
  );
}
