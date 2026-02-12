 "use client";

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Compass, Plus, Search, User, LogOut, Heart, Settings, Layers } from 'lucide-react';
import { Button } from '../../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu';
import { CATEGORIES } from '../../lib/data';

/**
 * Header 컴포넌트
 * 
 * @returns {JSX.Element} 전역 헤더
 */
export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  
  /**
   * Mock Auth State
   * TODO: 실제 앱에서는 Context/Redux로 관리
   * true: 로그인 상태 (프로필 드롭다운 표시)
   * false: 로그아웃 상태 (로그인/회원가입 버튼 표시)
   */
  const isLoggedIn = true; 

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border h-[64px] flex items-center">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        {/* LEFT SECTION: Logo & Navigation */}
        <div className="flex items-center gap-8">
          {/* SKO 로고 */}
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            {/* Logo Symbol */}
            <div className="relative w-7 h-7 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded blur-sm opacity-60" />
              <div className="relative w-6 h-6 border-2 border-primary rounded flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
              </div>
            </div>
            {/* Logo Text */}
            <div className="tracking-tighter text-foreground">
              SKO
            </div>
          </Link>
          
          {/* 메인 네비게이션 링크 */}
          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost" 
              className={`text-sm transition-all ${pathname === '/explore' ? 'text-white bg-gradient-to-r from-[#9BD5FF] to-[#CBA7FF]' : 'text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-[#9BD5FF] hover:to-[#CBA7FF]'}`}
              onClick={() => router.push('/explore')}
            >
              <Compass className="mr-2 h-4 w-4" />
              Explore
            </Button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-[#FF8ECF] hover:to-[#CBA7FF] transition-all">
                    Interaction Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        return (
                          <li key={category.id}>
                            <NavigationMenuLink asChild>
                              <a
                                onClick={() => router.push(`/category/${category.id}`)}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-[#9BD5FF]/20 hover:to-[#CBA7FF]/20 cursor-pointer group"
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div 
                                    className="p-2 rounded-lg"
                                    style={{ backgroundColor: `${category.color}20` }}
                                  >
                                    <Icon 
                                      className="h-4 w-4" 
                                      style={{ color: category.color }} 
                                    />
                                  </div>
                                  <div className="text-sm leading-none">
                                    {category.name}
                                  </div>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {category.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {isLoggedIn && (
              <Button
                variant="ghost" 
                className={`text-sm transition-all ${pathname === '/create' ? 'text-white bg-gradient-to-r from-[#FF8ECF] to-[#CBA7FF]' : 'text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-[#FF8ECF] hover:to-[#CBA7FF]'}`}
                onClick={() => router.push('/editor/new')}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Demo
              </Button>
            )}
          </div>
        </div>

        {/* RIGHT SECTION: Search & Profile */}
        <div className="flex items-center gap-2">
          {/* 검색 버튼 */}
          <Button
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-[#9BD5FF] hover:to-[#CBA7FF] transition-all" 
            onClick={() => router.push('/explore')} 
            title="Search demos"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* 로그인 상태별 UI 분기 */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="relative h-10 w-10 rounded-full text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-[#9BD5FF] hover:to-[#CBA7FF] transition-all ml-2"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">User Profile</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      user@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <DropdownMenuItem
                  onClick={() => router.push('/my-demos')}
                  className="cursor-pointer hover:bg-gradient-to-r hover:from-[#9BD5FF]/20 hover:to-[#CBA7FF]/20 focus:bg-gradient-to-r focus:from-[#9BD5FF]/20 focus:to-[#CBA7FF]/20 data-[highlighted]:bg-gradient-to-r data-[highlighted]:from-[#9BD5FF]/20 data-[highlighted]:to-[#CBA7FF]/20 transition-all"
                >
                  <Layers className="mr-2 h-4 w-4" />
                  <span>My Demos</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem
                  onClick={() => router.push('/favorites')}
                  className="cursor-pointer hover:bg-gradient-to-r hover:from-[#9BD5FF]/20 hover:to-[#CBA7FF]/20 focus:bg-gradient-to-r focus:from-[#9BD5FF]/20 focus:to-[#CBA7FF]/20 data-[highlighted]:bg-gradient-to-r data-[highlighted]:from-[#9BD5FF]/20 data-[highlighted]:to-[#CBA7FF]/20 transition-all"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  <span>My Favorites</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem
                  onClick={() => router.push('/profile')}
                  className="cursor-pointer hover:bg-gradient-to-r hover:from-[#9BD5FF]/20 hover:to-[#CBA7FF]/20 focus:bg-gradient-to-r focus:from-[#9BD5FF]/20 focus:to-[#CBA7FF]/20 data-[highlighted]:bg-gradient-to-r data-[highlighted]:from-[#9BD5FF]/20 data-[highlighted]:to-[#CBA7FF]/20 transition-all"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Profile Settings</span>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem
                  onClick={() => router.push('/login')}
                  className="cursor-pointer text-red-400 focus:text-red-400 focus:bg-red-400/10"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2 ml-2">
              <Button variant="ghost" size="sm" onClick={() => router.push('/login')}>
                Log in
              </Button>
              <Button
                size="sm" 
                className="bg-[#A783FF] hover:bg-[#9061ff] text-white"
                onClick={() => router.push('/signup')}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
