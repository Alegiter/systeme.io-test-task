import { FC } from "react";
import { getProductList } from "../api";
import { Table } from "@/src/shared/ui";
import type { Product } from "@/src/shared/api/db";

export const ProductList: FC = async () => {
    const products = await getProductList()

    return (
        <Table
            data={products}
            ThCell={ProductHeaderCell}
            TdCell={ProductCell}
            keyGetter={productKeyGetter}
            omitKeys={["id"]}
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