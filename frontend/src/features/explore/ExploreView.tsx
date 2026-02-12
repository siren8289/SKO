 "use client";

import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"
import { DemoCard } from '../demo/components/DemoCard';
import { DEMOS, CATEGORIES } from '../../lib/data';

export function ExploreView() {
  const router = useRouter();
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const filteredDemos = DEMOS.filter(demo => {
    const matchesSearch = demo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          demo.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || demo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Explore Patterns</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover a collection of interaction patterns and animations for your next project.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm py-4 mb-8 border-b">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
             <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search patterns..." 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
             
             <div className="flex items-center gap-3 w-full md:w-auto">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {CATEGORIES.map(cat => (
                      <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center border rounded-md bg-card">
                   <Button
                      variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
                      size="icon"
                      onClick={() => setViewMode('grid')}
                      className="rounded-none rounded-l-md h-9 w-9"
                   >
                      <Grid className="h-4 w-4" />
                   </Button>
                   <Button
                      variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
                      size="icon"
                      onClick={() => setViewMode('list')}
                       className="rounded-none rounded-r-md h-9 w-9"
                   >
                      <List className="h-4 w-4" />
                   </Button>
                </div>
             </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "flex flex-col gap-4"
        }>
          {filteredDemos.length > 0 ? (
            filteredDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={viewMode === 'list' ? "w-full" : ""}
              >
                <DemoCard demo={demo} layout={viewMode} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
               </div>
               <h3 className="text-xl font-semibold mb-2">No results found</h3>
               <p className="text-muted-foreground">Try adjusting your search or filters.</p>
               <Button 
                  variant="link" 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-2"
               >
                  Clear all filters
               </Button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// Also export DemoGrid for reuse if needed, though mostly used internally
export function DemoGrid({ demos }: { demos: typeof DEMOS }) {
  return (
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
  );
}
