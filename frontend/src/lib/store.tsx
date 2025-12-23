import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface Demo {
  id: string;
  title: string;
  description: string;
  category: string;
  code: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  thumbnail?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AppContextType {
  user: User | null;
  demos: Demo[];
  favorites: string[]; // IDs of favorited demos
  login: (email: string, name: string) => void;
  logout: () => void;
  signup: (email: string, name: string) => void;
  addDemo: (demo: Omit<Demo, 'id' | 'authorId' | 'authorName' | 'createdAt'>) => void;
  updateDemo: (id: string, updates: Partial<Demo>) => void;
  toggleFavorite: (demoId: string) => void;
  getDemo: (id: string) => Demo | undefined;
  getUserDemos: (userId: string) => Demo[];
  getFavoriteDemos: () => Demo[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Mock Data
const MOCK_DEMOS: Demo[] = [
  {
    id: '1',
    title: 'Modern Landing Page',
    description: 'A high-conversion landing page template with React and Tailwind.',
    category: 'Landing',
    code: '<h1>Hello World</h1>',
    authorId: 'user-1',
    authorName: 'Alice Dev',
    createdAt: '2023-10-01',
    thumbnail: 'https://images.unsplash.com/photo-1467232004560-23a951e63551?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard layout with sidebar and charts.',
    category: 'Dashboard',
    code: '<div>Dashboard Content</div>',
    authorId: 'user-2',
    authorName: 'Bob Smith',
    createdAt: '2023-10-05',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    title: 'Auth Forms',
    description: 'Login and Signup forms with validation.',
    category: 'Components',
    code: '<form>...</form>',
    authorId: 'user-1',
    authorName: 'Alice Dev',
    createdAt: '2023-10-10',
    thumbnail: 'https://images.unsplash.com/photo-1555421689-492a6d36d189?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '4',
    title: 'Portfolio Grid',
    description: 'Masonry grid layout for portfolio items.',
    category: 'Portfolio',
    code: '<div>Grid</div>',
    authorId: 'user-3',
    authorName: 'Charlie Art',
    createdAt: '2023-10-12',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60',
  },
];

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null); // Start logged out
  const [demos, setDemos] = useState<Demo[]>(MOCK_DEMOS);
  const [favorites, setFavorites] = useState<string[]>([]);

  const login = (email: string, name: string) => {
    setUser({
      id: 'current-user',
      email,
      name,
      avatar: 'https://github.com/shadcn.png',
    });
  };

  const signup = (email: string, name: string) => {
    // In a real app, this would create a user. Here we just auto-login.
    login(email, name);
  };

  const logout = () => {
    setUser(null);
  };

  const addDemo = (newDemo: Omit<Demo, 'id' | 'authorId' | 'authorName' | 'createdAt'>) => {
    if (!user) return;
    const demo: Demo = {
      ...newDemo,
      id: Math.random().toString(36).substring(7),
      authorId: user.id,
      authorName: user.name,
      createdAt: new Date().toISOString(),
    };
    setDemos((prev) => [demo, ...prev]);
  };

  const updateDemo = (id: string, updates: Partial<Demo>) => {
    setDemos((prev) => prev.map((d) => (d.id === id ? { ...d, ...updates } : d)));
  };

  const toggleFavorite = (demoId: string) => {
    setFavorites((prev) =>
      prev.includes(demoId) ? prev.filter((id) => id !== demoId) : [...prev, demoId]
    );
  };

  const getDemo = (id: string) => demos.find((d) => d.id === id);

  const getUserDemos = (userId: string) => demos.filter((d) => d.authorId === userId);

  const getFavoriteDemos = () => demos.filter((d) => favorites.includes(d.id));

  return (
    <AppContext.Provider
      value={{
        user,
        demos,
        favorites,
        login,
        logout,
        signup,
        addDemo,
        updateDemo,
        toggleFavorite,
        getDemo,
        getUserDemos,
        getFavoriteDemos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
