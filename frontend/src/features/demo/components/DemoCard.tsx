 "use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '../../../ui/card';
import { Badge } from '../../../ui/badge';
import { Heart, Eye } from 'lucide-react';
import { Demo, CATEGORIES } from '../../../lib/data';

interface DemoCardProps {
  demo: Demo;
  layout?: 'grid' | 'list';
}

/**
 * DemoCard 컴포넌트
 * 
 * @param {DemoCardProps} props - demo 객체, layout 모드
 * @returns {JSX.Element} 데모 카드
 */
export function DemoCard({ demo, layout = 'grid' }: DemoCardProps) {
  const router = useRouter();
  
  // 카테고리 정보 & 아이콘 가져오기
  const category = CATEGORIES.find(c => c.id === demo.category);
  const Icon = category?.icon;

  if (layout === 'list') {
    return (
      <Card
        className="hover:border-primary/50 transition-all cursor-pointer group overflow-hidden flex flex-row items-center p-4 gap-6"
        onClick={() => router.push(`/demos/${demo.id}`)}
      >
        {/* Left: Thumbnail/Icon placeholder if we had one, or just Category Icon large */}
        <div 
          className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${category?.color}20` }}
        >
          {Icon && <Icon className="h-8 w-8" style={{ color: category?.color }} />}
        </div>

        {/* Middle: Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
             <h3 className="text-lg font-bold group-hover:text-primary transition-colors truncate">
              {demo.title}
            </h3>
            {category && (
              <Badge 
                variant="outline"
                className="text-xs px-2 py-0.5"
                style={{ color: category.color, borderColor: `${category.color}40` }}
              >
                {category.name}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-1 mb-1">{demo.description}</p>
          <p className="text-xs text-muted-foreground">by {demo.author.name}</p>
        </div>

        {/* Right: Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-shrink-0">
           <span className="flex items-center gap-1.5">
              <Heart className={`h-4 w-4 ${demo.isFavorite ? 'fill-primary text-primary' : ''}`} />
              {demo.likes}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" />
              {demo.views}
            </span>
             {demo.difficulty && (
            <Badge variant="secondary" className="text-xs">
              {demo.difficulty}
            </Badge>
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card
      className="hover:border-primary/50 transition-all cursor-pointer group overflow-hidden"
      onClick={() => router.push(`/demos/${demo.id}`)}
    >
      <div className="p-8 space-y-8">
        {/* TOP: 카테고리 아이콘 & 배지 & 제목 */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
             {/* 카테고리 배지 */}
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

          {/* 제목 */}
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
            {demo.title}
          </h3>
        </div>

        {/* 작성자 */}
        <p className="text-sm text-muted-foreground m-0">
          by {demo.author.name}
        </p>

        {/* 통계 & 난이도 */}
        <div className="flex items-center justify-between pt-6 border-t">
          {/* 좋아요 & 조회수 */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {/* 좋아요 - 즐겨찾기면 fill */}
            <span className="flex items-center gap-1.5">
              <Heart className={`h-4 w-4 ${demo.isFavorite ? 'fill-primary text-primary' : ''}`} />
              {demo.likes}
            </span>
            
            {/* 조회수 */}
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" />
              {demo.views}
            </span>
          </div>
          
          {/* 난이도 배지 */}
          {demo.difficulty && (
            <Badge 
              variant="secondary"
              className="text-xs px-3 py-1"
            >
              {demo.difficulty}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
