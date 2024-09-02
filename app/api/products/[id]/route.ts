import { db } from "@/src/shared/api/db";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const product = db.products.findById(Number(params.id))
    if (!product) {
        return new Response("Product not found", {
            status: 404
        })
    }
    return Response.json(product)
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    debugger
    const formData = await request.formData()
    const product = db.products.findById(Number(params.id))

    if (!product) {
        return new Response("Product not found", {
            status: 404
        })
    }

    product.name = formData.get("name") as string || product.name
    return new Response(null, {
        status: 200
    })
}