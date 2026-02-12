 "use client";

import React from 'react';
import Link from 'next/link';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* Logo Symbol */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded blur-sm opacity-60" />
                <div className="relative w-5 h-5 border-2 border-primary rounded flex items-center justify-center bg-background/80 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
                </div>
              </div>
              {/* Logo Text */}
              <div className="tracking-tighter text-foreground">
                SKO
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interaction Playground for developers and designers to share, fork, and learn from web interactions.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-1">Platform</h4>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
            <Link to="/explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Explore</Link>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-1">Legal</h4>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help</Link>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-1">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © 2025 SKO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
