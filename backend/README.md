# SKO Backend (Spring Boot + PostgreSQL)

## Tech Stack

- Java 17
- Spring Boot 3 (Web, Data JPA, Validation)
- Gradle (Groovy DSL)
- PostgreSQL

## Getting Started

```bash
cd backend
./gradlew bootRun        # 또는 'gradle bootRun' (전역 Gradle 설치 시)
```

기본 서버 포트는 `8080`이며, 헬스 체크 엔드포인트는 아래와 같습니다.

- `GET http://localhost:8080/api/health`

## Database Configuration

기본 Postgres 설정은 `src/main/resources/application.yml` 에 있으며,
환경 변수로 덮어쓸 수 있습니다.

- `DB_URL` (기본값: `jdbc:postgresql://localhost:5432/sko`)
- `DB_USERNAME` (기본값: `postgres`)
- `DB_PASSWORD` (기본값: `postgres`)

예시:

```bash
export DB_URL=jdbc:postgresql://localhost:5432/sko
export DB_USERNAME=sko_user
export DB_PASSWORD=secret

cd backend
./gradlew bootRun
```

