import { getProductById } from "@/src/entites/product"
import { ProductEditFormUi } from "@/src/features/edit-product"
import { notFound } from "next/navigation"

export default async function Page(props: { params: { productId: string } }) {
    const { params } = props
    const product = await getProductById(Number(params.productId))

    if (!product) {
        notFound()
    }

    return (
        <ProductEditFormUi product={product} />
    )
}