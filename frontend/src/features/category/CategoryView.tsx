 "use client";

import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { CATEGORIES, PATTERNS, DEMOS } from '../../lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ArrowLeft, BookOpen, Layers, LayoutGrid } from 'lucide-react';
import { DemoCard } from '../demo/components/DemoCard';

export function CategoryView({ id }: { id: string }) {
  const router = useRouter();

  const category = CATEGORIES.find(c => c.id === id);
  const patterns = PATTERNS.filter(p => p.categoryId === id);
  const demos = DEMOS.filter(d => d.category === id);

  if (!category) {
    return (
      <div className="container px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        <Button onClick={() => router.push('/explore')}>Back to Explore</Button>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            className="mb-6 pl-0 hover:pl-2 transition-all"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <Icon 
                className="h-8 w-8" 
                style={{ color: category.color }}
              />
            </div>
            <h1 className="text-4xl font-bold">{category.name}</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {category.description}
          </p>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="patterns" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-[400px] mb-8">
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="demos">Demos</TabsTrigger>
            <TabsTrigger value="learn">Learn</TabsTrigger>
          </TabsList>

          <TabsContent value="patterns" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {patterns.map((pattern, index) => (
                <motion.div
                  key={pattern.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    className="hover:border-primary/50 transition-all cursor-pointer h-full"
                    onClick={() => router.push(`/patterns/${pattern.id}`)}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{pattern.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-xl">{pattern.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{pattern.description}</p>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative group">
                        <img 
                          src={pattern.preview} 
                          alt={pattern.name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="secondary" size="sm">View Pattern</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="demos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demos.map((demo, index) => (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <DemoCard demo={demo} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learn">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started with {category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Learn the fundamental concepts behind {category.name} interactions.
                  This section would contain educational content, best practices, and implementation guides.
                </p>
                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <div className="p-4 border rounded-lg bg-card/50">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Documentation
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Read the official docs for libraries used in this category.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg bg-card/50">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      Core Concepts
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Understand the math and logic behind the animations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
