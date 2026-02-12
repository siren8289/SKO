 "use client";

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/button';
import { useRouter } from 'next/navigation';
import { DemoCard } from '../demo/components/DemoCard';
import { MOCK_DEMOS } from '../../lib/data';

export function RecentDemos() {
  const router = useRouter();
  const recentDemos = MOCK_DEMOS.slice(0, 6);

  return (
    <section className="min-h-[600px] w-full py-24 flex flex-col justify-center">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="mb-2">Recent Demos</h2>
            <p className="text-muted-foreground text-lg">See what the community is building today.</p>
          </div>
          <Button variant="ghost" className="hidden sm:flex hover:text-primary" onClick={() => router.push('/explore')}>
            View All Demos
          </Button>
        </div>

        {/* 3 columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recentDemos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <DemoCard demo={demo} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
