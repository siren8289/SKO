

## 프로젝트 개요

* 모션/인터랙션 데모 **생성·저장·관리** 풀스택 웹 앱 구현 구성.
* 데모 제작 과정에서 결과 확인·정리·관리·공유 흐름 단절 문제 개선 목표 구성.
* MVP는 **인증 + 내 데모 대시보드(CRUD)** 중심 구성.

---

## 기술 스택

* **프론트**: Next.js 14(App Router), React, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion 구성.
* **백엔드**: Spring Boot 3, Java 17, JPA/Hibernate 구성.
* **DB**: PostgreSQL 구성.
* **빌드**: 백엔드 Gradle, 프론트 npm 빌드 구성.

---

## 기술 선정 이유

### Next.js 14 (App Router) / React / TypeScript

* App Router 기반 라우팅·레이아웃 구조 정리 구성(대시보드 중심 UI 일관성 확보).
* React 컴포넌트 기반 UI 재사용 설계 구성(폼/테이블/모달 중심).
* TypeScript 기반 API 요청/응답 타입 고정 구성(필드 누락/타입 오류 감소 목적).

### Tailwind CSS / Shadcn UI

* Tailwind CSS 기반 빠른 스타일 적용 구성(토큰 기반 일관성 관리 목적).
* shadcn/ui 기반 공통 UI 표준화 구성(버튼/폼/다이얼로그/테이블 중심, 개발 속도·유지보수성 확보).

### Framer Motion

* 모션/인터랙션 중심 서비스 특성 반영 구성(컴포넌트 단위 애니메이션 적용).
* UI 전환, 리스트 인터랙션, 미세 피드백 애니메이션 구현 구성.

### Spring Boot 3 / Java 17 / JPA(Hibernate)

* 인증/인가 포함 REST API 서버 표준 구조 구성 목적.
* Java 17 기반 런타임 안정성 확보 구성.
* Users–Demos–Favorites 관계 중심 도메인 모델링 구성 + JPA 트랜잭션/연관관계 관리 구성.

### PostgreSQL

* 사용자/데모/즐겨찾기 관계형 모델 적합 구성.
* 유니크 제약 + FK 기반 데이터 정합성 DB 레벨 강제 구성.
* 조회수/좋아요/즐겨찾기 집계 요구 대응 구성.

---

## 필수 기능 2가지 (MVP)

### 1) 인증(로그인/회원가입)

* 이메일/비밀번호 기반 회원가입·로그인 제공 구성.
* 백엔드 인증 API 연동 구성.

  * `POST /api/auth/signup` 회원가입 처리 연동.
  * `POST /api/auth/login` 로그인 처리 연동.
* 가입 시 사용자 정보 DB 저장 구성.
* 비밀번호 해시 저장 적용 구성.
* 로그인 성공 이후 기능 전부 **로그인 사용자 기준 동작** 구성.

---

### 2) 사용자 대시보드(CRUD)

* 로그인 사용자 기준 **“내 데모”** 목록/상세/생성/수정/삭제 제공 구성.
* 즐겨찾기 + 통계 포함 관리 화면 완성도 확보 구성.
* 기능 전체 백엔드 API 및 DB 연동 처리 구성.

#### 제공 기능

* 내 데모 목록 조회 구성.
* 내 데모 상세 조회 구성.
* 내 데모 생성 구성.
* 내 데모 수정 구성.
* 내 데모 삭제 구성.
* 데모 즐겨찾기 추가/제거 구성.
* 통계 집계 및 표시 구성(데모 수/조회수 합계/좋아요·즐겨찾기 관련 집계).

#### 연동 API

* **Demos**

  * `GET /api/demos` 목록 조회 연동.
  * `GET /api/demos/{id}` 상세 조회 연동.
  * `POST /api/demos` 생성 연동.
  * `PUT /api/demos/{id}` 수정 연동.
  * `DELETE /api/demos/{id}` 삭제 연동.
* **Favorites**

  * `POST /api/favorites/{demoId}` 즐겨찾기 추가 연동.
  * `DELETE /api/favorites/{demoId}` 즐겨찾기 제거 연동.
  * `GET /api/favorites` 즐겨찾기 목록 조회 연동.

---

## DB 모델 요약

* **Users**: email 유니크 관리 구성, password 해시 저장 구성.
* **Demos**: `user_id(FK)` 기반 소유자 고정 구성, `views/likes` 기반 통계 집계 구성.
* **Favorites**: `(user_id, demo_id)` 유니크 제약 적용 구성(중복 즐겨찾기 방지).

---

## 구현 포인트

* 데모 수정/삭제 소유자 권한 검증 전제 구성.
* 즐겨찾기 중복 DB 유니크 제약 기반 원천 차단 구성.
* 대시보드 통계 “내 데모 기준” 집계 구성(한 화면 확인 목적).


