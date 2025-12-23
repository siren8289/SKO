import { User, Layers, Code, Heart, LayoutTemplate, Settings, LogOut, FilePlus, Edit3, Eye, MousePointer2, Scroll, Sparkles, PenTool, Plane, Zap } from "lucide-react";

export type PageType = 
  | "HOME" 
  | "EXPLORE"
  | "CATEGORY"
  | "PATTERN_DETAIL"
  | "DEMO_LIST" 
  | "DEMO_VIEW" 
  | "DEMO_CREATE" 
  | "DEMO_EDIT" 
  | "MY_DEMOS" 
  | "MY_FAVORITES" 
  | "PROFILE" 
  | "LOGIN" 
  | "SIGNUP";

export interface Demo {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryId?: string; // Add categoryId for consistency
  pattern?: string; // Pattern subcategory
  author: {
    name: string;
    handle: string;
    avatar?: string; // Optional - if not provided, use User icon
  };
  code: {
    html?: string;
    css?: string;
    js?: string;
    jsx?: string;
    tsx?: string;
  };
  thumbnail: string;
  tags?: string[]; // Add tags
  createdAt: string;
  likes: number;
  views: number;
  stats?: {
    likes: number;
    views: number;
    forks: number;
  };
  isFavorite: boolean; // Mock user specific state
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface Pattern {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  code: {
    html?: string;
    css?: string;
    js?: string;
    jsx?: string;
    tsx?: string;
  };
  preview: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  likes: number;
  views: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

// 6 Core Interaction Categories
export const CATEGORIES = [
  { 
    id: "scroll-animation", 
    name: "Scroll", 
    icon: Scroll,
    description: "GSAP + ScrollTrigger based scroll animations",
    color: "#9BD5FF" // Aurora Blue
  },
  { 
    id: "page-animation", 
    name: "Page & Component", 
    icon: Sparkles,
    description: "Framer Motion page transitions and layout animations",
    color: "#CBA7FF" // Aurora Purple
  },
  { 
    id: "svg-interaction", 
    name: "SVG", 
    icon: PenTool,
    description: "SVG animations, morphing, and path drawing",
    color: "#FF8ECF" // Rose Neon
  },
  { 
    id: "lottie-micro", 
    name: "Lottie", 
    icon: Zap,
    description: "Button micro interactions and loader animations",
    color: "#85FFF0" // Mint Beam
  },
  { 
    id: "parallax", 
    name: "Parallax", 
    icon: Plane,
    description: "Layer parallax and smooth scrolling effects",
    color: "#9BD5FF" // Aurora Blue
  },
  { 
    id: "mouse-interaction", 
    name: "Mouse", 
    icon: MousePointer2,
    description: "Custom cursors, magnetic buttons, and hover effects",
    color: "#CBA7FF" // Aurora Purple
  },
];

// Patterns for each category
export const PATTERNS: Pattern[] = [
  // Scroll Animation Patterns
  {
    id: "scroll-reveal",
    name: "Scroll Reveal",
    description: "Elements fade and slide in as you scroll",
    categoryId: "scroll-animation",
    code: {
      jsx: `import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const boxRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(boxRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true
        }
      }
    );
  }, []);
  
  return (
    <div className="h-[200vh] flex items-center justify-center">
      <div ref={boxRef} className="w-64 h-64 bg-primary rounded-lg" />
    </div>
  );
}`,
    },
    preview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    difficulty: "beginner",
    likes: 342,
    views: 5678
  },
  {
    id: "scroll-pin",
    name: "Pin & Scrub",
    description: "Pin elements and scrub animations on scroll",
    categoryId: "scroll-animation",
    code: {
      jsx: `// Pin & Scrub example code...`,
    },
    preview: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    difficulty: "intermediate",
    likes: 156,
    views: 2341
  },
  // Page Animation Patterns
  {
    id: "page-transition",
    name: "Page Transition",
    description: "Smooth transitions between pages",
    categoryId: "page-animation",
    code: {
      jsx: `import { motion } from 'motion/react';

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}`,
    },
    preview: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    difficulty: "beginner",
    likes: 298,
    views: 4532
  },
  {
    id: "layout-animation",
    name: "Layout Animation",
    description: "Animate layout changes with layoutId",
    categoryId: "page-animation",
    code: {
      jsx: `// Layout animation code...`,
    },
    preview: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    difficulty: "intermediate",
    likes: 189,
    views: 2100
  },
  // SVG Interaction Patterns
  {
    id: "svg-stroke",
    name: "SVG Stroke Animation",
    description: "Animate SVG stroke path",
    categoryId: "svg-interaction",
    code: {
      jsx: `// SVG stroke animation code...`,
    },
    preview: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    difficulty: "beginner",
    likes: 276,
    views: 4123
  },
  {
    id: "svg-morph",
    name: "SVG Morphing",
    description: "Smooth morphing between SVG shapes",
    categoryId: "svg-interaction",
    code: {
      jsx: `// SVG morphing code...`,
    },
    preview: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    difficulty: "advanced",
    likes: 145,
    views: 1890
  },
  
  // Lottie Micro Interaction Patterns
  {
    id: "button-micro",
    name: "Button Micro Animation",
    description: "Lottie animations for button interactions",
    categoryId: "lottie-micro",
    code: {
      jsx: `// Button micro animation code...`,
    },
    preview: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    difficulty: "beginner",
    likes: 254,
    views: 3845
  },
  {
    id: "success-fail",
    name: "Success/Fail Feedback",
    description: "Visual feedback animations for user actions",
    categoryId: "lottie-micro",
    code: {
      jsx: `// Success/Fail feedback code...`,
    },
    preview: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    difficulty: "beginner",
    likes: 198,
    views: 2650
  },
  {
    id: "scroll-lottie",
    name: "Scroll-Controlled Lottie",
    description: "Lottie animations controlled by scroll position",
    categoryId: "lottie-micro",
    code: {
      jsx: `// Scroll-controlled Lottie code...`,
    },
    preview: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    difficulty: "intermediate",
    likes: 167,
    views: 2100
  },
  {
    id: "icon-looping",
    name: "Icon Looping",
    description: "Continuously looping icon animations",
    categoryId: "lottie-micro",
    code: {
      jsx: `// Icon looping code...`,
    },
    preview: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    difficulty: "beginner",
    likes: 134,
    views: 1560
  },
  
  // Parallax Patterns
  {
    id: "layer-parallax",
    name: "Layer Parallax",
    description: "Multi-layer parallax scrolling effect",
    categoryId: "parallax",
    code: {
      jsx: `// Layer parallax code...`,
    },
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    difficulty: "intermediate",
    likes: 231,
    views: 3567
  },
  {
    id: "hero-depth",
    name: "Hero Depth Motion",
    description: "3D depth effect for hero sections",
    categoryId: "parallax",
    code: {
      jsx: `// Hero depth motion code...`,
    },
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    difficulty: "advanced",
    likes: 210,
    views: 2890
  },
  {
    id: "smooth-scroll",
    name: "Smooth Scrolling",
    description: "Lenis-based smooth scrolling implementation",
    categoryId: "parallax",
    code: {
      jsx: `// Smooth scrolling code...`,
    },
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    difficulty: "intermediate",
    likes: 189,
    views: 2450
  },
  {
    id: "mouse-parallax",
    name: "Mouse-Controlled Parallax",
    description: "Parallax effect controlled by mouse movement",
    categoryId: "parallax",
    code: {
      jsx: `// Mouse-controlled parallax code...`,
    },
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    difficulty: "intermediate",
    likes: 176,
    views: 2100
  },
  
  // Mouse Interaction Patterns
  {
    id: "custom-cursor",
    name: "Custom Cursor",
    description: "Custom animated cursor that follows mouse",
    categoryId: "mouse-interaction",
    code: {
      jsx: `// Custom cursor code...`,
    },
    preview: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    difficulty: "intermediate",
    likes: 287,
    views: 3980
  },
  {
    id: "magnetic-cursor",
    name: "Magnetic Cursor",
    description: "Elements that attract the cursor on hover",
    categoryId: "mouse-interaction",
    code: {
      jsx: `// Magnetic cursor code...`,
    },
    preview: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    difficulty: "advanced",
    likes: 215,
    views: 3289
  },
  {
    id: "mouse-parallax-interaction",
    name: "Mouse Parallax",
    description: "Elements move based on mouse position",
    categoryId: "mouse-interaction",
    code: {
      jsx: `// Mouse parallax code...`,
    },
    preview: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    difficulty: "intermediate",
    likes: 198,
    views: 2760
  },
  {
    id: "hover-distortion",
    name: "Hover Distortion",
    description: "Distortion effects on hover interactions",
    categoryId: "mouse-interaction",
    code: {
      jsx: `// Hover distortion code...`,
    },
    preview: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    difficulty: "advanced",
    likes: 154,
    views: 1980
  },
  // Remove old patterns
  {
    id: "magnetic-button",
    name: "Magnetic Button",
    description: "Button that follows mouse on hover",
    categoryId: "mouse-interaction",
    code: {
      jsx: `// Magnetic button code...`,
    },
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    difficulty: "intermediate",
    likes: 220,
    views: 3100
  },
];

export const MOCK_DEMOS: Demo[] = [
  {
    id: "1",
    title: "Scroll Reveal Gallery",
    description: "Beautiful image gallery with scroll-triggered reveal animations",
    category: "scroll-animation",
    pattern: "scroll-reveal",
    author: {
      name: "Kim Developer",
      handle: "kimdev"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["gallery", "scroll", "reveal"],
    createdAt: "2024-12-01",
    likes: 120,
    views: 1520,
    stats: {
      likes: 120,
      views: 1520,
      forks: 50
    },
    isFavorite: true,
    difficulty: "beginner",
  },
  {
    id: "2",
    title: "Animated Page Transition",
    description: "Smooth page transitions with Framer Motion",
    category: "page-animation",
    pattern: "page-transition",
    author: {
      name: "Lee Designer",
      handle: "leedesign"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["page", "transition", "framer-motion"],
    createdAt: "2024-12-02",
    likes: 85,
    views: 950,
    stats: {
      likes: 85,
      views: 950,
      forks: 30
    },
    isFavorite: false,
    difficulty: "beginner",
  },
  {
    id: "3",
    title: "SVG Logo Animation",
    description: "Logo reveal with SVG stroke animation",
    category: "svg-interaction",
    pattern: "svg-stroke",
    author: {
      name: "Park Frontend",
      handle: "parkfrontend"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    tags: ["svg", "logo", "animation"],
    createdAt: "2024-11-28",
    likes: 230,
    views: 2840,
    stats: {
      likes: 230,
      views: 2840,
      forks: 100
    },
    isFavorite: true,
    difficulty: "intermediate",
  },
  {
    id: "4",
    title: "Custom Cursor Effect",
    description: "Interactive custom cursor that responds to elements",
    category: "mouse-interaction",
    pattern: "custom-cursor",
    author: {
      name: "Choi Fullstack",
      handle: "choifullstack"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    tags: ["cursor", "interaction", "custom"],
    createdAt: "2024-11-25",
    likes: 150,
    views: 1780,
    stats: {
      likes: 150,
      views: 1780,
      forks: 60
    },
    isFavorite: false,
    difficulty: "intermediate",
  },
  {
    id: "5",
    title: "Parallax Hero Section",
    description: "Multi-layer parallax effect for hero sections",
    category: "parallax",
    author: {
      name: "Jung Creative",
      handle: "jungcreative"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["parallax", "hero", "section"],
    createdAt: "2024-11-30",
    likes: 195,
    views: 2100,
    stats: {
      likes: 195,
      views: 2100,
      forks: 80
    },
    isFavorite: true,
    difficulty: "advanced",
  },
  {
    id: "6",
    title: "Button Micro Interactions",
    description: "Lottie-powered button animations for better UX",
    category: "lottie-micro",
    author: {
      name: "Song Motion",
      handle: "songmotion"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    tags: ["button", "micro", "lottie"],
    createdAt: "2024-12-03",
    likes: 310,
    views: 3520,
    stats: {
      likes: 310,
      views: 3520,
      forks: 150
    },
    isFavorite: false,
    difficulty: "beginner",
  },
  {
    id: "7",
    title: "Scroll-Triggered Text Animation",
    description: "Text reveals with split animation on scroll",
    category: "scroll-animation",
    author: {
      name: "Han Animator",
      handle: "hananimator"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    tags: ["text", "scroll", "animation"],
    createdAt: "2024-11-27",
    likes: 165,
    views: 1950,
    stats: {
      likes: 165,
      views: 1950,
      forks: 70
    },
    isFavorite: false,
    difficulty: "intermediate",
  },
  {
    id: "8",
    title: "Component Stagger Animation",
    description: "Staggered reveal of components with Motion",
    category: "page-animation",
    author: {
      name: "Kang UX",
      handle: "kangux"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["component", "stagger", "motion"],
    createdAt: "2024-11-29",
    likes: 98,
    views: 1120,
    stats: {
      likes: 98,
      views: 1120,
      forks: 40
    },
    isFavorite: true,
    difficulty: "beginner",
  },
  {
    id: "9",
    title: "SVG Morphing Menu",
    description: "Morphing SVG icon for hamburger menu",
    category: "svg-interaction",
    author: {
      name: "Yoon Interface",
      handle: "yooninterface"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    tags: ["svg", "morph", "menu"],
    createdAt: "2024-11-26",
    likes: 278,
    views: 3100,
    stats: {
      likes: 278,
      views: 3100,
      forks: 120
    },
    isFavorite: false,
    difficulty: "advanced",
  },
  {
    id: "10",
    title: "Magnetic Card Hover",
    description: "Cards that follow mouse cursor on hover",
    category: "mouse-interaction",
    author: {
      name: "Seo Interactive",
      handle: "seointeractive"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["card", "hover", "magnetic"],
    createdAt: "2024-11-24",
    likes: 189,
    views: 2240,
    stats: {
      likes: 189,
      views: 2240,
      forks: 90
    },
    isFavorite: true,
    difficulty: "intermediate",
  },
  {
    id: "11",
    title: "3D Parallax Layers",
    description: "Multi-depth parallax with 3D transforms",
    category: "parallax",
    author: {
      name: "Lim 3D",
      handle: "lim3d"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["parallax", "3d", "layers"],
    createdAt: "2024-11-23",
    likes: 245,
    views: 2890,
    stats: {
      likes: 245,
      views: 2890,
      forks: 110
    },
    isFavorite: false,
    difficulty: "advanced",
  },
  {
    id: "12",
    title: "Loading Spinner Collection",
    description: "10 different Lottie loading animations",
    category: "lottie-micro",
    author: {
      name: "Moon Loader",
      handle: "moonloader"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    tags: ["loading", "spinner", "lottie"],
    createdAt: "2024-12-04",
    likes: 420,
    views: 4680,
    stats: {
      likes: 420,
      views: 4680,
      forks: 180
    },
    isFavorite: true,
    difficulty: "beginner",
  },
  {
    id: "13",
    title: "Smooth Scroll Anchor",
    description: "GSAP smooth scrolling to anchor points",
    category: "scroll-animation",
    author: {
      name: "Bae Smooth",
      handle: "baesmooth"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    tags: ["scroll", "anchor", "gsap"],
    createdAt: "2024-11-22",
    likes: 142,
    views: 1680,
    stats: {
      likes: 142,
      views: 1680,
      forks: 55
    },
    isFavorite: false,
    difficulty: "beginner",
  },
  {
    id: "14",
    title: "Modal Enter Exit Animation",
    description: "Beautiful modal transitions with Motion",
    category: "page-animation",
    author: {
      name: "Oh Modal",
      handle: "ohmodal"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["modal", "transition", "motion"],
    createdAt: "2024-11-21",
    likes: 203,
    views: 2450,
    stats: {
      likes: 203,
      views: 2450,
      forks: 75
    },
    isFavorite: true,
    difficulty: "intermediate",
  },
  {
    id: "15",
    title: "SVG Drawing Animation",
    description: "Draw SVG paths on scroll or hover",
    category: "svg-interaction",
    author: {
      name: "Kwon Artist",
      handle: "kwonartist"
    },
    code: {
      html: `// HTML code here...`,
      css: `// CSS code here...`,
      js: `// JS code here...`,
      jsx: `// JSX code here...`,
      tsx: `// TSX code here...`
    },
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    tags: ["svg", "drawing", "animation"],
    createdAt: "2024-11-20",
    likes: 187,
    views: 2120,
    stats: {
      likes: 187,
      views: 2120,
      forks: 105
    },
    isFavorite: false,
    difficulty: "intermediate",
  },
];

// Export DEMOS as an alias for MOCK_DEMOS
export const DEMOS = MOCK_DEMOS;

export const MOCK_USER: UserProfile = {
  id: "u1",
  name: "Test User",
  email: "user@example.com",
  avatar: "",
};
