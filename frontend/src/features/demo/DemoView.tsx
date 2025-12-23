import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DEMOS, CATEGORIES } from '../../lib/data';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Card } from '../../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ArrowLeft, Code, Eye, Share2, Heart, Copy, Check, Info } from 'lucide-react';

export function DemoView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const demo = DEMOS.find(d => d.id === id);

  if (!demo) {
    return (
      <div className="container px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Demo not found</h1>
        <Button onClick={() => navigate('/explore')}>Back to Explore</Button>
      </div>
    );
  }

  const category = CATEGORIES.find(c => c.id === demo.category);

  const handleCopyCode = () => {
    // In a real app, you'd probably copy specific file content or the whole snippet
    navigator.clipboard.writeText('// Code content would go here');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-6 pl-0 hover:pl-2 transition-all" onClick={() => navigate('/explore')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Explore
          </Button>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
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
                {demo.tags?.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-muted-foreground bg-muted/50">
                    #{tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold">{demo.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">{demo.description}</p>
              
              <div className="flex items-center gap-3 pt-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={demo.author.avatar} alt={demo.author.name} />
                  <AvatarFallback>{demo.author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <span className="font-medium">{demo.author.name}</span>
                  <span className="text-muted-foreground ml-1">@{demo.author.handle}</span>
                </div>
                <span className="text-muted-foreground mx-2">•</span>
                <span className="text-sm text-muted-foreground">{new Date(demo.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant={demo.isFavorite ? "default" : "outline"} size="icon" className={demo.isFavorite ? "bg-red-500 hover:bg-red-600 border-red-500" : ""}>
                <Heart className={`h-4 w-4 ${demo.isFavorite ? "fill-white" : ""}`} />
              </Button>
              <Button onClick={() => navigate(`/editor?demo=${demo.id}`)}>
                Open in Editor
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="preview" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <Eye className="h-4 w-4" /> Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center gap-2">
                <Code className="h-4 w-4" /> Code
              </TabsTrigger>
              <TabsTrigger value="info" className="flex items-center gap-2">
                <Info className="h-4 w-4" /> Info
              </TabsTrigger>
            </TabsList>
            
            {/* Contextual Actions based on tab could go here */}
          </div>

          <TabsContent value="preview" className="mt-0">
            <Card className="h-[600px] overflow-hidden border-2 bg-muted/10 relative group">
              {/* Interactive Preview Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                 {/* 
                    Ideally this would be an iframe or a sandboxed runner. 
                    For now using the thumbnail image with a blur effect and overlay.
                 */}
                 <div 
                  className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm" 
                  style={{ backgroundImage: `url(${demo.thumbnail})` }}
                 />
                 
                 <div className="relative z-10 text-center p-8 bg-background/80 backdrop-blur-md rounded-xl shadow-2xl max-w-md border">
                    <h3 className="text-xl font-bold mb-2">Interactive Preview</h3>
                    <p className="text-muted-foreground mb-6">
                      This is a static placeholder. In the real app, the code would be executed here.
                    </p>
                    <Button onClick={() => navigate(`/editor?demo=${demo.id}`)}>
                      Run in Editor
                    </Button>
                 </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="code" className="mt-0">
            <Card className="h-[600px] border-2 flex flex-col overflow-hidden">
              <div className="bg-zinc-900 border-b border-zinc-800 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs text-zinc-400 ml-3 font-mono">App.tsx</span>
                </div>
                <Button variant="ghost" size="sm" className="h-7 text-zinc-400 hover:text-zinc-100" onClick={handleCopyCode}>
                   {copied ? <Check className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                   {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
              <div className="flex-1 bg-zinc-950 p-6 overflow-auto">
                <pre className="font-mono text-sm text-zinc-300 leading-relaxed">
                  <code>{demo.code.jsx || demo.code.tsx || demo.code.js || '// No code provided'}</code>
                </pre>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="info">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2 p-6">
                <h3 className="text-lg font-semibold mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {demo.description}
                </p>
                
                <h3 className="text-lg font-semibold mt-8 mb-4">Implementation Details</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built with React and Tailwind CSS</li>
                  <li>Uses Framer Motion for animations</li>
                  <li>Fully responsive design</li>
                  <li>Accessible interaction patterns</li>
                </ul>
              </Card>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <Heart className="h-4 w-4" /> Likes
                      </span>
                      <span className="font-bold">{demo.likes}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <Eye className="h-4 w-4" /> Views
                      </span>
                      <span className="font-bold">{demo.views}</span>
                    </div>
                     <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" /> Forks
                      </span>
                      <span className="font-bold">{demo.stats?.forks || 0}</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Author</h3>
                   <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={demo.author.avatar} />
                      <AvatarFallback>{demo.author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{demo.author.name}</div>
                      <div className="text-xs text-muted-foreground">@{demo.author.handle}</div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">View Profile</Button>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
