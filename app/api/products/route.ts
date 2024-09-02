import { db } from "@/src/shared/api/db";

export async function GET() {
    return Response.json(db.products.find())
}