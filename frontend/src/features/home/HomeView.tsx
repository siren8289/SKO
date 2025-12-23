import React from 'react';
import { Hero } from './Hero';
import { Categories } from './Categories';
import { FeaturedDemos } from './FeaturedDemos';
import { TrendingPatterns } from './TrendingPatterns';
import { RecentDemos } from './RecentDemos';

/**
 * HomePage 컴포넌트
 * 
 * @returns {JSX.Element} 5개 섹션으로 구성된 홈페이지
 */
export function HomeView() {
  return (
    <div className="flex flex-col">
      {/* 1. 히어로 섹션 - 메인 타이틀 & 검색 */}
      <Hero />
      
      {/* 2. 카테고리 섹션 - 6개 핵심 카테고리 */}
      <Categories />
      
      {/* 3. 추천 데모 섹션 - 2x2 그리드 */}
      <FeaturedDemos />
      
      {/* 4. 트렌딩 패턴 섹션 - 1-6위 랭킹 */}
      <TrendingPatterns />
      
      {/* 5. 최근 데모 섹션 - 3-column 그리드 */}
      <RecentDemos />
    </div>
  );
}
