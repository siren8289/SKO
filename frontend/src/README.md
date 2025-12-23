# SKO - Interaction Playground

"Aurora Soft Neon" 테마를 적용한 인터랙티브 웹 애플리케이션입니다.
React, Tailwind CSS, Framer Motion을 사용하여 다양한 인터랙션 패턴을 탐색하고 공유할 수 있습니다.

## 📁 프로젝트 구조

이 프로젝트는 기능 중심(Feature-Sliced) 아키텍처를 따릅니다.

```
src/
├── features/       # 기능별 모듈 (View, Components, Logic)
│   ├── home/       # 홈 페이지 관련
│   ├── explore/    # 탐색 페이지 관련
│   ├── demo/       # 데모 상세/카드 관련
│   ├── auth/       # 인증 관련 (Login/SignUp)
│   └── ...
├── pages/          # 라우팅 페이지 컴포넌트
├── shared/         # 공통 레이아웃 및 컴포넌트
│   └── layout/     # Header, Footer 등
├── ui/             # 공통 UI 라이브러리 (ShadCN 기반)
└── lib/            # 유틸리티, 데이터, 스토어
```

## 🛠 기술 스택

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animation**: Motion (Framer Motion)
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Router**: React Router DOM

## 🎨 디자인 테마 (Aurora Soft Neon)

- **Colors**: Soft gradients using `#9BD5FF`, `#CBA7FF`, `#FF8ECF`, `#85FFF0`
- **Typography**: Modern Sans-serif
- **Vibe**: Tech, Clean, Soft Glowing

## 🚀 시작하기

```bash
npm install
npm run dev
```
