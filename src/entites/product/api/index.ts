import type { Product } from "@/src/shared/api"

export async function getProductList(options?: {/* like filter or limit */ }) {
    // debugger
    void options

    return fetch(process.env.URL + "/api/products", { next: { tags: ["/products"] } })
        .then(res => res.json())
        .then(obj => obj as Array<Product>)
}

export async function getProductById(id: number) {
    // debugger
    return fetch(`${process.env.URL}/api/products/${id}`, { next: { tags: ["/products"] } })
        .then(res => res.json())
        .then(obj => obj as Product)
}