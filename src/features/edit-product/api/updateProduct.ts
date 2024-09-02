"use server";

import { revalidateTag } from "next/cache";

export async function updateProduct(id: number, formData: FormData) {
    // debugger
    await fetch(`${process.env.URL}/api/products/${id}`, {
        method: "PATCH",
        body: formData
    })

    revalidateTag("/products")
}
