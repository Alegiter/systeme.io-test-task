import { PricePlanArraySchema, PricePlanSchema } from "@/src/shared/api"

export async function getPricePlanList(options?: { q: string }) {
    debugger
    const { q } = options || {}

    return fetch(process.env.URL + "/api/price-plans" + (q ? `?q=${q}` : ""), { next: { tags: ["/price-plans"] } })
        .then(res => res.json())
        .then(data => PricePlanArraySchema.parse(data))
}

export async function getPricePlanById(id: number) {
    // debugger
    return fetch(`${process.env.URL}/api/price-plans/${id}`, { next: { tags: ["/price-plans"] } })
        .then(res => res.json())
        .then(obj => PricePlanSchema.parse(obj))
}