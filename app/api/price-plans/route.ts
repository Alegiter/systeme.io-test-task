import { db } from "@/src/shared/api/db";

export async function GET(request: Request) {
    debugger
    const params = new URL(request.url).searchParams
    const q = params.get("q")
    return Response.json(db.pricePlans.find(q))
}