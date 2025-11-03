## 프로젝트 개요

터보레포 기반의 모노레포로 구성된 과제 프로젝트입니다.
`web` 앱(Next.js)과 `storybook` 앱, 그리고 공용 UI 패키지 `@repo/ui`를 포함하여 기능과 디자인을 일관성 있게 개발하고 재사용할 수 있도록 구성했습니다.

## 사용 스택

- **Monorepo**: Turborepo + pnpm
- **웹 프레임워크**: Next.js App Router
- **스타일**: CSS Module
- **데이터 패칭**: TanStack Query
- **전역 상태관리**: Zustand
- **품질 관리**: ESLint, Prettier, TypeScript

## 모노레포 구조

```
apps/
  web/          # 사용자 웹 앱 (Next.js)
  storybook/    # 컴포넌트 도큐먼트/테스트 (Storybook)
packages/
  ui/           # 재사용 UI 컴포넌트 (Button 등)
  eslint-config/
  typescript-config/
```

## 시작 방법

### 웹 사이트

배포 링크: https://assignment-web-nine.vercel.app/

### 로컬 실행

> cf. Node >= 18, pnpm >= 9 필요

1. 의존성 설치

```bash
pnpm install
```

2. 개발 서버 실행

```bash
# 웹 앱
pnpm --filter web dev

# 스토리북
pnpm --filter storybook storybook
```

## Web (Next.js)

### 컴포넌트 폴더 가이드

- `components/`
  - `containers/`: 로직 중심 컴포넌트 (페이지 전환, 데이터 fetch, 액션/상태 관리 등)
  - `ui/`: 프리젠테이션(UI) 중심 컴포넌트 (마크업/스타일)

### 주요 화면/흐름

- 루트(`/`)에서 `다음` 버튼 클릭 시 `https://picsum.photos/id/0/info` 호출
- 응답 데이터는 전역 상태로 보관 후 `/result` 페이지에서 표시
- 이미지 미설정 접근 또는 데이터 부재 시 UX 가드 처리(예: 1초 후 홈으로 이동 등)
- 404/`not-found` 페이지 제공

### 데이터/상태 관리

- TanStack Query로 API 통신 및 로딩/캐시 관리
- Zustand로 조회된 사진 정보를 전역 관리
- 중복 호출은 디바운스/스로틀 대신 Query의 `isFetching`(로딩 상태)로 방지
- 헤더 내 초기화 버튼으로 Zustand 저장소 초기화 가능 (요구사항 외 추가 구현)

### 스타일 가이드

- CSS Module 채택 (`.module.css`)
- 공용 유틸: 클래스 조합 헬퍼 `combineClasses` (가독성/일관성 향상)

## UI 패키지 (`@repo/ui`)

### Button 컴포넌트

- 경로: `packages/ui/src/button.tsx`
- 스타일: `packages/ui/src/button.module.css`

### Loading 컴포넌트 (요구사항 외 추가 구현)

- 경로: `packages/ui/src/loading.tsx`
- 스타일: `packages/ui/src/loading.module.css`

## Storybook

### 실행

```bash
pnpm --filter storybook storybook
```

### 구성

- 버튼 상태별 스토리 제공
  - Default: 기본
  - Hover: 호버 시 배경 변화를 실제로 확인 (마우스를 올려 확인)
  - Pressed: 데코레이터로 눌림 상태를 시뮬레이션하여 항상 눌린 모습 표시

## 주요 요구사항 체크리스트

- [x] Turborepo + pnpm 모노레포 구성 (web, storybook)
- [x] 공용 Button 생성 및 web/스토리북에서 공용 사용
- [x] 버튼 상태별 Storybook 제공 (Default / Hover / Pressed)
- [x] 사진 조회 전/후 라우팅: `/` → `/result`
- [x] API: `https://picsum.photos/id/0/info` 사용, 결과 `/result` 전달/표시
- [x] 전역 상태(Zustand) + TanStack Query 연계
- [x] 404 페이지 제공
- [x] README 작성, ESLint/Prettier 적용
