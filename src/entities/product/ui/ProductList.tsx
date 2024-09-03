import { FC } from "react";
import { getProductList } from "../api";
import { Table } from "@/src/shared/ui";
import type { Product } from "@/src/shared/api/db";
import Link from "next/link";
import { getSearchParam } from "@/src/app/context";

export async function ProductList() {
    debugger
    const q = getSearchParam()
    const products = await getProductList({q})

    return (
        <Table
            data={products}
            ThCell={ProductHeaderCell}
            TdCell={ProductCell}
            keyGetter={productKeyGetter}
            omitKeys={["id"]}
            extraRightColumns={["edit"]}
        />
    )
}

function productKeyGetter(product: Product): string {
    return product.id.toString()
}

const ProductCell: FC<{
    objKey: keyof Product | "edit",
    obj: Product
}> = (props) => {
    const { objKey, obj } = props
    switch (objKey) {
        case "name":
            return <>{obj.name}</>
        case "options":
            return <>{JSON.stringify(obj.options)}</>
        case "active":
            return <>{obj.active ? "Active" : "Not active"}</>
        case "createdAt":
            return <>format({JSON.stringify(obj.createdAt)})</>
        case "edit": 
            return <ProductEditCell productId={obj.id}/>
        default:
            return null
    }
}

const ProductHeaderCell: FC<{
    objKey: keyof Product | "edit"
}> = (props) => {
    const { objKey: key } = props

    switch (key) {
        case "active":
            return <>ActiveIcon</>
        case "edit":
            return null
        default:
            return <>{key}</>
    }
}

const ProductEditCell: FC<{
    productId: number
}> = ({ productId }) => {
    return (
        <Link
            href={`/products/edit/${productId}`}
            className="dark:bg-slate-400 px-2 py-1 rounded"
        >
            Edit
        </Link>
    )
}