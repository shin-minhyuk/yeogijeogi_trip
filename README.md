# yeogijeogi_trip

- 메인 레포지토리 : https://github.com/shin-minhyuk/yeogijeogi_trip.git

## 프로젝트 소개

oz코딩스쿨 메인 프로젝트 전, 타입스크립트를 써보고자 진행한 프로젝트입니다.
단, 중기날씨와 관광지/축제의 공공API를 활용하여, 관광지를 소개하는 웹사이트입니다.

## 팀원 구성

| 김진모(FE)                                                                                     | 신민혁(FE)                                                                                 | 한기선(FE)                                                                                    |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| <img src ="https://avatars.githubusercontent.com/u/162679625?v=4" width=200> <br /> @moriroKim | <img src ="https://avatars.githubusercontent.com/u/174288486?v=4" width=200> <br /> @minak | <img src ="https://avatars.githubusercontent.com/u/176655935?v=4" width=200> <br /> @kiseon77 |

## 1. 개발환경

Front : HTML, Tailwind, React, TypeScript
협업 툴 : Discord
기획 : Figma

## 2. 채택한 개발 기술과 브랜치 전략

### React, TypeScript, Tailwind

- React

  - 컴포넌트 기반 아키텍처
  - 각 리스트를 컴포넌트화하여 재사용 가능하게 하였습니다.

- TypeScript

  - 정적 타입 검사를 통해 개발 경험을 향상 시킬 수 있엇습니다.

- Tailwind
  - 유틸리티 기반 CSS를 활용하여 개발 속도를 향상 시켰습니다.

## 3. 프로젝트 프론트엔드 구조

```
📦
├─ .gitignore
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ api
│  │  ├─ fetchDetailData.tsx
│  │  └─ index.ts
│  ├─ atoms
│  │  └─ atoms.ts
│  ├─ components
│  │  ├─ Card.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  ├─ SearchModal.tsx
│  │  ├─ WeatherApp
│  │  │  ├─ WeatherApp.tsx
│  │  │  ├─ WeatherSkeleton.tsx
│  │  │  ├─ Weathers.tsx
│  │  │  ├─ weatherIconData.ts
│  │  │  └─ weather_icons
│  │  └─ buttons
│  │     ├─ SearchBtn.tsx
│  │     └─ ToggleThemeBtn.tsx
│  ├─ index.css
│  ├─ layouts
│  │  └─ CommonLayout.tsx
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Content.tsx
│  │  ├─ Festival.tsx
│  │  ├─ Home.tsx
│  │  └─ Search
│  │     └─ Search.tsx
│  ├─ setupProxy.js
│  ├─ types.ts
│  ├─ utils
│  │  ├─ getCoordinate.ts
│  │  └─ weatherApi.ts
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## 4. 역할분담

### 김진모

- 헤더
- 날씨 API

### 신민혁

- 검색
- 리스트

### 한기선

- 디테일
