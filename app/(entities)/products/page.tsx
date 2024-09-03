import { setSearchParam } from "@/src/app/context";
import { ProductListPage } from "@/src/pages/products";

export default function Page(params: {searchParams: {q: string}}) {
    debugger
    setSearchParam(params.searchParams.q)
    return (
        <ProductListPage/>
    )
}