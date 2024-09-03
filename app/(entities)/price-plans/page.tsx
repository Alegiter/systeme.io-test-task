import { setSearchParam } from "@/src/app/context";
import { PricePlanListPage } from "@/src/pages/price-plans";

export default function Page(params: {searchParams: {q: string}}) {
    debugger
    setSearchParam(params.searchParams.q)
    return (
        <PricePlanListPage/>
    )
}