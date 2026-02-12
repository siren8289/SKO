

## 프로젝트 소개

모션/인터랙션 데모를 **만들고 저장하고 관리**할 수 있는 풀스택 웹 앱입니다.
사용자 관점에서는 “내 데모를 깔끔하게 CRUD로 관리”하는 흐름이 핵심이고, 개발자 관점에서는 인증 → 권한 → 데이터 모델 → API 연동 → 통계 집계까지 한 번에 경험할 수 있게 MVP를 구성했습니다.

---

## 기술 스택

* **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
* **Backend**: Spring Boot 3, Java 17, JPA/Hibernate
* **Database**: PostgreSQL
* **Build/Tooling**: Gradle(Backend), npm(Frontend)

### 왜 이 조합?

* **Next.js 14(App Router)**: 라우팅/서버 컴포넌트 기반으로 화면 구성 단순화 + 대시보드 같은 UI 개발 속도 좋음
* **Spring Boot 3 + JPA**: 인증/권한/도메인 모델 중심의 API를 안정적으로 설계하기 좋고, 유지보수/확장에 유리
* **PostgreSQL**: 유저/데모/즐겨찾기처럼 관계가 명확한 데이터에 적합 + 집계(views/likes) 처리도 안정적

---

## 아키텍처 요약

* **Frontend(Next.js)**: 로그인/회원가입, 내 데모 대시보드 UI, API 호출 및 상태 관리
* **Backend(Spring Boot)**: 인증(JWT), 데모 CRUD, 즐겨찾기, 통계 집계 API 제공
* **DB(PostgreSQL)**: Users / Demos / Favorites 중심의 관계 모델링, 유니크 제약으로 데이터 정합성 확보

---

## 핵심 기능 (MVP)

### 1) 인증 (로그인/회원가입)

이메일/비밀번호 기반으로 가입/로그인을 제공하고, 이후 기능은 **로그인 유저 기준으로만 동작**하게 구성했습니다.

* **Endpoints**

  * `POST /api/auth/signup`
  * `POST /api/auth/login`
* **처리 포인트**

  * 비밀번호는 해시 저장(보안 기본기)
  * 로그인 성공 시 토큰 발급(JWT 전제) → 프론트에서 보호 라우팅/대시보드 접근 제어

---

### 2) 사용자 대시보드 (CRUD)

“내 데모”를 **목록/상세/생성/수정/삭제**까지 한 흐름으로 제공합니다.
여기는 **전부 백엔드 API + DB 연동**으로 처리했고, 즐겨찾기랑 통계까지 같이 붙였습니다.

#### 기능 범위

* **내 데모 목록**: 로그인 유저 소유 데모 리스트
* **내 데모 상세**: 단건 상세(데모 정보/코드/메타)
* **데모 생성/수정/삭제**: 소유권 검증 포함
* **즐겨찾기(Favorites)**: 추가/삭제, 즐겨찾기 목록 조회
* **통계(집계)**: 내 데모 기준

  * 총 데모 수
  * 조회수 합계
  * 좋아요/즐겨찾기 관련 집계

#### Endpoints

* **Demos**

  * `GET /api/demos`
  * `GET /api/demos/{id}`
  * `POST /api/demos`
  * `PUT /api/demos/{id}`
  * `DELETE /api/demos/{id}`
* **Favorites**

  * `POST /api/favorites/{demoId}`
  * `DELETE /api/favorites/{demoId}`
  * `GET /api/favorites`

---

## 데이터 모델 (요약)

* **Users**

  * email(유니크), password(해시), nickname, profile, timestamps
* **Demos**

  * user_id(FK), title, description, code(html/css/js), is_public, views, likes, timestamps
* **Favorites**

  * user_id(FK), demo_id(FK)
  * `(user_id, demo_id)` 유니크로 중복 즐겨찾기 방지

> 여기서 중요한 건 “권한/정합성”이라서, 데모 수정/삭제는 **항상 소유자 검증**, 즐겨찾기는 **유니크 제약**으로 막는 식으로 갔습니다.

---

## 내가 한 일 (풀스택 기준으로 보여주기)

* **Frontend**

  * Next.js(App Router)로 인증/대시보드 라우팅 구성
  * Tailwind + shadcn/ui로 UI 컴포넌트 설계
  * API 연동 기반 CRUD 플로우 구현(목록/상세/폼/삭제)
* **Backend**

  * Spring Boot로 인증/도메인 API 설계 및 구현
  * JPA 엔티티/연관관계 설계 + 트랜잭션 처리
  * 즐겨찾기/통계 집계 API 구현
* **Database**

  * PostgreSQL 스키마/제약조건(유니크, FK) 설계로 데이터 정합성 확보

