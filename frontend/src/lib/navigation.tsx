import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PageType, Demo, MOCK_USER, UserProfile } from './data';

interface NavigationContextType {
  currentPage: PageType;
  previousPage: PageType | null;
  navigateTo: (page: PageType, params?: any) => void;
  goBack: () => void;
  currentParams: any;
  user: UserProfile | null;
  login: () => void;
  logout: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageType>("HOME");
  const [previousPage, setPreviousPage] = useState<PageType | null>(null);
  const [currentParams, setCurrentParams] = useState<any>(null);
  const [user, setUser] = useState<UserProfile | null>(null); // Start logged out

  const navigateTo = (page: PageType, params?: any) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
    setCurrentParams(params || null);
  };

  const goBack = () => {
    if (previousPage) {
      const temp = previousPage;
      setPreviousPage(null);
      setCurrentPage(temp);
    } else {
      setCurrentPage("HOME");
    }
  };

  const login = () => {
    setUser(MOCK_USER);
    navigateTo("HOME");
  };

  const logout = () => {
    setUser(null);
    navigateTo("LOGIN");
  };

  return (
    <NavigationContext.Provider value={{ currentPage, previousPage, navigateTo, goBack, currentParams, user, login, logout }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
