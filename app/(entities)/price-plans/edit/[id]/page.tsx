import { getPricePlanById } from "@/src/entities/price-plan"
import { PricePlanEditFormUi } from "@/src/features/edit-price-plan"
import { notFound } from "next/navigation"

export default async function Page(props: { params: { id: string } }) {
    const { params } = props
    const product = await getPricePlanById(Number(params.id))

    if (!product) {
        notFound()
    }

    return (
        <PricePlanEditFormUi pricePlan={product} />
    )
}