"use client"

import { Product } from "@/src/shared/api/db";
import { FC } from "react";
import { updateProduct } from "../api/updateProduct";
import { useRouter } from "next/navigation";
import { ignoreFormAction } from "@/src/shared/lib";

type Props = {
    product: Product
}
export const ProductEditForm: FC<Props> = (props) => {
    const { product } = props
    const router = useRouter()
    const handle = async (formData: FormData) => {
        await updateProduct(product.id, formData)
        router.back()
    }
    const discard = () => {
        router.back()
    }
    return (
        <form action={handle}>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" defaultValue={product.name} className="dark:bg-slate-500" />
            </div>
            <button
                formAction={ignoreFormAction}
                onClick={discard}
            >
                Discard
            </button>
            <button type="submit">Save</button>
        </form>
    )
}