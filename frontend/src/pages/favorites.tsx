 "use client";

import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Header } from '../shared/layout/Header';
import { Footer } from '../shared/layout/Footer';
import { MOCK_DEMOS } from '../lib/data';
import { DemoCard } from '../features/demo/components/DemoCard';

export default function FavoritesPage() {
  const router = useRouter();
  // Filter favorite demos
  const favorites = MOCK_DEMOS.filter(d => d.isFavorite);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Heart className="h-8 w-8 text-red-500 fill-red-500" />
              My Favorites
            </h1>
            <p className="text-muted-foreground">
              Collection of interactions you've saved for inspiration.
            </p>
          </div>

          {/* Demos List */}
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((demo, index) => (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DemoCard demo={demo} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border rounded-lg bg-muted/10 border-dashed">
              <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
              <p className="text-muted-foreground mb-6">Explore the community to find patterns you love.</p>
              <Button onClick={() => router.push('/explore')}>Explore Demos</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
