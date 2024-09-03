import { getPricePlanById } from "@/src/entities/price-plan";
import { PricePlanEditFormUi } from "@/src/features/edit-price-plan";
import { notFound } from "next/navigation";

export default async function Page(props: { params: { productId: string } }) {
    const { params } = props
    const product = await getPricePlanById(Number(params.productId))

    if (!product) {
        notFound()
    }

    return (
        <dialog
            open
            className="top-1/2 p-2 text-inherit bg-slate-800"
        >
            <PricePlanEditFormUi pricePlan={product} />
        </dialog>
    )
}