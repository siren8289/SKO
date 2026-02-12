import { NextResponse } from "next/server";

export async function GET() {
  // TODO: 백엔드(Spring) 헬스 체크와 연동하려면 아래 fetch를 사용하세요.
  // const res = await fetch(process.env.BACKEND_HEALTH_URL ?? "http://localhost:8080/api/health");
  // const data = await res.json();
  // return NextResponse.json(data);

  return NextResponse.json({
    status: "OK",
    service: "sko-frontend",
  });
}

