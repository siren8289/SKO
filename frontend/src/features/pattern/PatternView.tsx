 "use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PATTERNS, CATEGORIES } from '../../lib/data';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ArrowLeft, Code, Eye, Share2, Heart, Copy, Check } from 'lucide-react';
import { Card } from '../../ui/card';

export function PatternView({ id }: { id: string }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const pattern = PATTERNS.find(p => p.id === id);
  
  if (!pattern) {
    return (
      <div className="container px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Pattern not found</h1>
        <Button onClick={() => router.push('/explore')}>Back to Explore</Button>
      </div>
    );
  }

  const category = CATEGORIES.find(c => c.id === pattern.categoryId);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pattern.code.jsx || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            className="mb-6 pl-0 hover:pl-2 transition-all"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge 
                  variant="outline" 
                  className="px-3 py-1"
                  style={{ 
                    borderColor: category?.color, 
                    color: category?.color,
                    backgroundColor: `${category?.color}10` 
                  }}
                >
                  {category?.name}
                </Badge>
                <Badge variant="secondary">{pattern.difficulty}</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-3">{pattern.name}</h1>
              <p className="text-xl text-muted-foreground">{pattern.description}</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button onClick={() => router.push(`/editor/${pattern.id}`)}>
                Open in Editor
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
          {/* Preview Panel */}
          <Card className="overflow-hidden border-2 bg-muted/20 flex flex-col">
            <div className="p-3 border-b bg-card flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Preview</span>
            </div>
            <div className="flex-1 relative flex items-center justify-center p-8 overflow-auto">
              {/* This is where the actual component would render. For now using an image/placeholder */}
              <div className="w-full h-full rounded-lg overflow-hidden relative shadow-2xl">
                <img 
                  src={pattern.preview} 
                  alt={pattern.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                  <p className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                    Live Preview Placeholder
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Code Panel */}
          <Card className="overflow-hidden border-2 flex flex-col">
            <div className="p-2 border-b bg-card flex items-center justify-between">
              <div className="flex items-center gap-2 px-2">
                <Code className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Source Code</span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleCopyCode}>
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </div>
            <div className="flex-1 bg-zinc-950 text-zinc-50 p-6 overflow-auto font-mono text-sm leading-relaxed">
              <pre>
                <code>{pattern.code.jsx}</code>
              </pre>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
