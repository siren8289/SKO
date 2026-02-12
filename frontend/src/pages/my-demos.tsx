 "use client";

import React from 'react';
import { motion } from 'motion/react';
import { Layers, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Header } from '../shared/layout/Header';
import { Footer } from '../shared/layout/Footer';
import { DemoGrid } from '../features/explore/ExploreView'; // Reusing components (in a real app, might extract to shared/components)

// We need to re-export or extract DemoGrid properly if we want to reuse it cleanly.
// For this quick refactor, I'll assume we can import it or I should replicate a simple grid view here.
// Actually, let's create a simple grid view here to avoid circular dependencies if ExploreView exports are messy.

import { Card } from '../ui/card';
import { MOCK_DEMOS, MOCK_USER } from '../lib/data';
import { DemoCard } from '../features/demo/components/DemoCard';

export default function MyDemosPage() {
  const router = useRouter();
  // Filter demos for mock user
  // In real app, fetch from API
  const myDemos = MOCK_DEMOS.slice(0, 3); // Just simulating some owned demos

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <Layers className="h-8 w-8 text-primary" />
                My Demos
              </h1>
              <p className="text-muted-foreground">
                Manage your created interactions and projects.
              </p>
            </div>
            <Button onClick={() => router.push('/editor/new')} className="bg-gradient-to-r from-primary to-secondary">
              <Plus className="h-4 w-4 mr-2" />
              Create New Demo
            </Button>
          </div>

          {/* Demos List */}
          {myDemos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myDemos.map((demo, index) => (
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
              <Layers className="h-12 w-12 mx-auto text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No demos yet</h3>
              <p className="text-muted-foreground mb-6">Start building your first interaction today!</p>
              <Button onClick={() => router.push('/editor/new')}>Create Demo</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
