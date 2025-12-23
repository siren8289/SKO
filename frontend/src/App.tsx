import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './lib/navigation';
import { AppProvider } from './lib/store';

// Page Imports
import HomePage from './pages/index';
import ExplorePage from './pages/explore';
import CategoryPage from './pages/category';
import PatternPage from './pages/pattern';
import DemoPage from './pages/demo';
import EditorPage from './pages/editor';
import MyDemosPage from './pages/my-demos';
import FavoritesPage from './pages/favorites';
import ProfilePage from './pages/profile';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';

/**
 * App Root Component
 * Handles routing and global context providers.
 */
function App() {
  return (
    <Router>
      <AppProvider>
        <NavigationProvider>
          <div className="dark bg-background font-sans antialiased text-foreground min-h-screen">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />
              
              {/* Explore & Browsing */}
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/pattern/:id" element={<PatternPage />} />
              <Route path="/demo/:id" element={<DemoPage />} />
              
              {/* Editor (Create/Edit) */}
              <Route path="/create" element={<EditorPage />} />
              <Route path="/editor" element={<EditorPage />} />
              
              {/* User Personal Pages */}
              <Route path="/my-demos" element={<MyDemosPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              
              {/* Auth */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </div>
        </NavigationProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
