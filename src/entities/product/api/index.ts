import { ProductArraySchema, ProductSchema } from "@/src/shared/api"

export async function getProductList(options?: { q: string }) {
    debugger
    const { q } = options || {}

    return fetch(process.env.URL + "/api/products" + (q ? `?q=${q}` : ""), { next: { tags: ["/products"] } })
        .then(res => res.json())
        .then(data => ProductArraySchema.parse(data))
}

export async function getProductById(id: number) {
    // debugger
    return fetch(`${process.env.URL}/api/products/${id}`, { next: { tags: ["/products"] } })
        .then(res => res.json())
        .then(obj => ProductSchema.parse(obj))
}