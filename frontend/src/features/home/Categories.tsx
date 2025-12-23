import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../lib/data';
import { Button } from '../../ui/button';

export function Categories() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[600px] w-full py-20 bg-secondary/5 flex flex-col justify-center">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4">6 Core Interaction Categories</h2>
          <p className="text-muted-foreground text-lg">Master web interactions with these essential techniques</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full transition-all duration-300 bg-card/50 backdrop-blur border-muted/40 hover:shadow-lg group relative overflow-hidden cursor-pointer"
                  style={{
                    '--category-color': category.color
                  } as React.CSSProperties}
                  onClick={() => navigate(`/category/${category.id}`)}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: category.color }}
                  />
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <Icon 
                          className="h-5 w-5" 
                          style={{ color: category.color }}
                        />
                      </div>
                      <CardTitle className="text-lg m-0">
                        {category.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full group/btn"
                      style={{
                        borderColor: `${category.color}40`,
                      }}
                      onClick={() => navigate(`/category/${category.id}`)}
                    >
                      View Patterns
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
