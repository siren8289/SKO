 "use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../../ui/resizable';
import { ScrollArea } from '../../ui/scroll-area';
import { Button } from '../../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip';
import { Separator } from '../../ui/separator';
import { Input } from '../../ui/input';
import { ArrowLeft, Play, Save, Settings, Download, Share2, Smartphone, Monitor, Tablet, RefreshCw, LayoutTemplate } from 'lucide-react';
import { PATTERNS, DEMOS } from '../../lib/data';

interface EditorViewProps {
  patternId?: string;
  demoId?: string;
}

export function EditorView({ patternId, demoId }: EditorViewProps) {
  const router = useRouter();
  
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('Untitled Project');
  const [previewKey, setPreviewKey] = useState(0);

  // Load initial content
  useEffect(() => {
    if (patternId) {
      const pattern = PATTERNS.find(p => p.id === patternId);
      if (pattern) {
        setCode(pattern.code.jsx || '// No code available');
        setTitle(`Remix of ${pattern.name}`);
        return;
      }
    }

    if (demoId) {
      const demo = DEMOS.find(d => d.id === demoId);
      if (demo) {
        setCode(demo.code.jsx || '// No code available');
        setTitle(`Remix of ${demo.title}`);
        return;
      }
    }

    setCode(`export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </div>
  );
}`);
  }, [patternId, demoId]);

  const handleRefresh = () => {
    setPreviewKey(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <div className="h-14 border-b flex items-center justify-between px-4 bg-card z-10">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xs">
                SKO
             </div>
             <Input 
               value={title} 
               onChange={(e) => setTitle(e.target.value)}
               className="h-8 w-64 border-none bg-transparent hover:bg-muted/50 focus:bg-muted/50 transition-colors font-medium" 
             />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" onClick={handleRefresh}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Run
                </Button>
              </TooltipTrigger>
              <TooltipContent>Run code (Ctrl + Enter)</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                 <Button size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </TooltipTrigger>
              <TooltipContent>Save project (Ctrl + S)</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Separator orientation="vertical" className="h-6 mx-2" />

          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
           <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          
          {/* Editor Panel */}
          <ResizablePanel defaultSize={50} minSize={30}>
             <div className="h-full flex flex-col bg-[#1e1e1e] text-white">
                <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#3e3e42]">
                   <span className="text-xs text-zinc-400">App.tsx</span>
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-xs text-zinc-500">Unsaved changes</span>
                   </div>
                </div>
                <div className="flex-1 relative font-mono text-sm">
                   <textarea
                      className="absolute inset-0 w-full h-full bg-transparent p-4 resize-none focus:outline-none leading-relaxed"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      spellCheck={false}
                   />
                </div>
             </div>
          </ResizablePanel>
          
          <ResizableHandle />
          
          {/* Preview Panel */}
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="h-full flex flex-col bg-background">
               <div className="h-10 border-b flex items-center justify-between px-4 bg-muted/20">
                  <div className="flex items-center gap-2">
                     <div className="flex items-center gap-1 bg-muted p-0.5 rounded-md">
                        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-sm">
                           <Monitor className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-sm">
                           <Tablet className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-sm">
                           <Smartphone className="h-3 w-3" />
                        </Button>
                     </div>
                     <span className="text-xs text-muted-foreground ml-2">1280 x 800 (100%)</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                     <LayoutTemplate className="h-4 w-4" />
                  </Button>
               </div>
               
               <div className="flex-1 bg-zinc-100 dark:bg-zinc-900 p-8 overflow-auto flex items-center justify-center">
                  <div className="bg-background shadow-2xl w-full h-full rounded-lg overflow-hidden relative">
                     {/* Preview Iframe Placeholder */}
                     <div className="absolute inset-0 flex items-center justify-center text-muted-foreground flex-col gap-4">
                        <Play className="h-12 w-12 opacity-20" />
                        <p>Preview Output Area</p>
                        <p className="text-xs opacity-50 max-w-xs text-center">
                           Code compilation and live preview would happen here in a real environment.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </ResizablePanel>
          
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
