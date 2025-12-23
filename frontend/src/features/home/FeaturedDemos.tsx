import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Heart, Eye, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_DEMOS, CATEGORIES } from '../../lib/data';

export function FeaturedDemos() {
  const navigate = useNavigate();
  
  // Get top 4 demos by likes
  const featuredDemos = [...MOCK_DEMOS]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);

  return (
    <section className="min-h-[600px] w-full py-24 flex flex-col justify-center bg-muted/5">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="m-0">Featured Demos</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Top-rated animations from our creative community
            </p>
          </div>
          <Button 
            variant="ghost" 
            className="hidden sm:flex hover:text-primary"
            onClick={() => navigate('/explore')}
          >
            View All
          </Button>
        </div>

        {/* Large Card Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredDemos.map((demo, index) => {
            const category = CATEGORIES.find(c => c.id === demo.category);
            const Icon = category?.icon;
            
            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="hover:border-primary/50 transition-all cursor-pointer group overflow-hidden h-full"
                  onClick={() => navigate(`/demo/${demo.id}`)}
                >
                  {/* Single Column Content */}
                  <div className="p-8 flex flex-col h-full justify-between">
                    {/* Top */}
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        {category && (
                          <Badge 
                            variant="outline"
                            className="text-xs px-2.5 py-0.5"
                            style={{ 
                              backgroundColor: `${category.color}10`, 
                              color: category.color,
                              borderColor: `${category.color}40`
                            }}
                          >
                            {Icon && <Icon className="h-3 w-3 mr-1.5" />}
                            {category.name}
                          </Badge>
                        )}
                      </div>

                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="text-2xl font-bold m-0 group-hover:text-primary transition-colors">
                            {demo.title}
                          </h3>
                          <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                        </div>
                        
                        <p className="text-muted-foreground line-clamp-2 text-base leading-relaxed">
                          {demo.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="flex items-center justify-between pt-6 border-t mt-6">
                      <p className="text-sm text-muted-foreground m-0">
                        by {demo.author.name}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Heart className="h-4 w-4" />
                          {demo.likes}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Eye className="h-4 w-4" />
                          {demo.views}
                        </span>
                      </div>
                    </div>
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
