"use server";

import { revalidateTag } from "next/cache";

export async function updatePricePlan(id: number, formData: FormData) {
    // debugger
    await fetch(`${process.env.URL}/api/price-plans/${id}`, {
        method: "PATCH",
        body: formData
    })

    revalidateTag("/price-plans")
}
