import { FC } from "react";
import { getProductList } from "../api";
import { Table } from "@/src/shared/ui";
import type { Product } from "@/src/shared/api/db";
import Link from "next/link";

export async function ProductList() {
    const products = await getProductList()

    return (
        <Table
            data={products}
            ThCell={ProductHeaderCell}
            TdCell={ProductCell}
            keyGetter={productKeyGetter}
            omitKeys={["id"]}
            ActionTdCell={ProductEditCell}
        />
    )
}

function productKeyGetter(product: Product): string {
    return product.id.toString()
}

const ProductCell: FC<{
    objKey: keyof Product,
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
        default:
            return null
    }
}

const ProductHeaderCell: FC<{
    objKey: keyof Product
}> = (props) => {
    const { objKey: key } = props

    switch (key) {
        case "active":
            return <>ActiveIcon</>
        default:
            return <>{key}</>
    }
}

const ProductEditCell: FC<{
    obj: Product
}> = ({ obj }) => {
    const productId = obj.id

    return (
        <Link
            href={`/products/edit/${productId}`}
            className="dark:bg-slate-400 px-2 py-1 rounded"
        >
            Edit
        </Link>
    )
}