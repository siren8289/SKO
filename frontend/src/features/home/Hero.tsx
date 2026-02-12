 "use client";

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/button';
import { useRouter } from 'next/navigation';
import { Sparkles, Play } from 'lucide-react';

/**
 * Hero 컴포넌트
 * 
 * @returns {JSX.Element} 전체 화면 히어로 섹션
 */
export function Hero() {
  const router = useRouter();

  return (
    <section className="relative h-[calc(100vh-64px)] min-h-[800px] w-full overflow-hidden flex flex-col items-center justify-center bg-background">
      {/* 
        Aurora Gradient Background 
        - 4개의 그라데이션 구체 (Aurora Blue, Purple, Rose, Mint)
        - 각기 다른 애니메이션 속도와 딜레이로 부드러운 효과
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Aurora Blue - 좌상단 */}
        <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] rounded-full bg-[#9BD5FF]/20 blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Aurora Purple - 우하단 */}
        <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] rounded-full bg-[#CBA7FF]/20 blur-[150px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Rose Neon - 우상단 */}
        <div className="absolute top-[30%] right-[15%] w-[50%] h-[50%] rounded-full bg-[#FF8ECF]/15 blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Mint Beam - 좌하단 */}
        <div className="absolute bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-[#85FFF0]/12 blur-[100px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
        
        {/* Grid Pattern Overlay - 미묘한 테크 느낌 */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#9BD5FF 1px, transparent 1px), linear-gradient(90deg, #9BD5FF 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container relative z-10 px-4 text-center flex flex-col items-center justify-center h-full -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 flex flex-col items-center max-w-6xl"
        >
          {/* Main Title - 대형 그라데이션 타이틀 */}
          <div className="relative">
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Interaction
              <br />
              Playground
            </motion.h1>
            
            {/* Aurora Glow - 타이틀 뒤 글로우 효과 */}
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-primary via-secondary to-accent -z-10" />
          </div>

          {/* Subtitle - 6가지 카테고리 키워드 */}
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* 카테고리별 색상 키워드 */}
            <span className="text-[#9BD5FF] font-semibold">Scroll</span>
            {' · '}
            <span className="text-[#CBA7FF] font-semibold">Motion</span>
            {' · '}
            <span className="text-[#FF8ECF] font-semibold">SVG</span>
            {' · '}
            <span className="text-[#85FFF0] font-semibold">Lottie</span>
            {' · '}
            <span className="text-[#9BD5FF] font-semibold">Parallax</span>
            {' · '}
            <span className="text-[#CBA7FF] font-semibold">Mouse</span>
            <br />
            {/* 서브 카피 */}
            <span className="text-foreground/80 text-2xl md:text-3xl">Build & Share Your Animation</span>
          </motion.p>

          {/* CTAs - 2개 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            {/* Primary CTA - Explore */}
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity gap-2 group shadow-lg shadow-primary/20"
              onClick={() => router.push('/explore')}
            >
              <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              Explore Interactions
            </Button>
            
            {/* Secondary CTA - Create */}
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-primary/40 hover:bg-primary/10 hover:border-primary gap-2 group backdrop-blur-sm"
              onClick={() => router.push('/editor/new')}
            >
              <Play className="h-6 w-6 fill-current group-hover:scale-110 transition-transform" />
              Start Creating
            </Button>
          </motion.div>

          {/* Scroll Indicator - 하단 스크롤 유도 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-12"
          >
            {/* 애니메이션되는 스크롤 인디케이터 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm tracking-wide">Scroll to explore</span>
              {/* 그라데이션 라인 */}
              <div className="w-[2px] h-16 bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
