 "use client";

import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { ArrowRight, Flame } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { CATEGORIES, PATTERNS } from '../../lib/data';

export function TrendingPatterns() {
  const router = useRouter();

  // Sort patterns by likes (simulating popularity)
  const trendingPatterns = [...PATTERNS]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 6);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-background to-muted/5">
      <div className="container px-4 mx-auto">
        <div className="mb-16 flex items-center justify-between">
          <div className="text-center flex-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Flame className="h-6 w-6 text-secondary" />
              <h2 className="m-0">Trending Patterns</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Most popular patterns this week
            </p>
          </div>
          <Button
            variant="ghost" 
            className="hidden sm:flex hover:text-primary"
            onClick={() => router.push('/explore')}
          >
            View All
          </Button>
        </div>

        {/* Compact List Style - Single Column */}
        <div className="max-w-4xl mx-auto space-y-4">
          {trendingPatterns.map((pattern, index) => {
            const category = CATEGORIES.find(c => c.id === pattern.categoryId);
            const Icon = category?.icon;
            
            // Rank Badge Colors
            const getRankBadgeColor = (rank: number) => {
              const colors = [
                '#9BD5FF', // #1 - Aurora Blue
                '#CBA7FF', // #2 - Aurora Purple  
                '#FF8ECF', // #3 - Rose Neon
                '#85FFF0', // #4 - Mint Beam
                '#9BD5FF', // #5 - Aurora Blue
                '#CBA7FF'  // #6 - Aurora Purple
              ];
              return colors[rank];
            };
            
            return (
              <motion.div
                key={pattern.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="hover:border-primary/50 transition-all cursor-pointer group overflow-hidden"
                  onClick={() => router.push(`/patterns/${pattern.id}`)}
                >
                  {/* Horizontal Compact Layout */}
                  <div className="flex items-center gap-6 p-5">
                    {/* Rank Badge - Large */}
                    <div 
                      className="flex items-center justify-center w-16 h-16 rounded-xl font-bold text-2xl flex-shrink-0"
                      style={{ 
                        backgroundColor: `${getRankBadgeColor(index)}20`,
                        color: getRankBadgeColor(index),
                        border: `2px solid ${getRankBadgeColor(index)}40`
                      }}
                    >
                      #{index + 1}
                    </div>

                    {/* Icon */}
                    {Icon && (
                      <div 
                        className="p-3 rounded-xl flex-shrink-0"
                        style={{ backgroundColor: `${category.color}15` }}
                      >
                        <Icon 
                          className="h-10 w-10" 
                          style={{ color: category.color }}
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg m-0 group-hover:text-primary transition-colors truncate">
                          {pattern.name}
                        </h3>
                        {category && (
                          <Badge 
                            className="text-xs flex-shrink-0"
                            style={{ 
                              backgroundColor: `${category.color}30`, 
                              color: category.color,
                              borderColor: category.color
                            }}
                          >
                            {category.name}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1 m-0">
                        {pattern.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
