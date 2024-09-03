import { FC } from "react";
import { getPricePlanList } from "../api";
import { Table } from "@/src/shared/ui";
import type { PricePlan } from "@/src/shared/api/db";
import Link from "next/link";
import { getSearchParam } from "@/src/app/context";

export async function PricePlanList() {
    debugger
    const q = getSearchParam()
    const pricePlans = await getPricePlanList({q})

    return (
        <Table
            data={pricePlans}
            ThCell={HeaderCell}
            TdCell={Cell}
            keyGetter={keyGetter}
            omitKeys={["id"]}
            extraRightColumns={["edit"]}
        />
    )
}

function keyGetter(product: PricePlan): string {
    return product.id.toString()
}

const Cell: FC<{
    objKey: keyof PricePlan | "edit",
    obj: PricePlan
}> = (props) => {
    const { objKey, obj } = props
    switch (objKey) {
        case "description":
            return <>{obj.description}</>
        case "active":
            return <>{obj.active ? "Active" : "Not active"}</>
        case "createdAt":
        case "removedAt":
            return <>{obj[objKey].toLocaleString()}</>
        case "edit": 
            return <EditCell id={obj.id}/>
        default:
            return null
    }
}

const HeaderCell: FC<{
    objKey: keyof PricePlan | "edit"
}> = (props) => {
    const { objKey: key } = props

    switch (key) {
        case "edit":
            return null
        default:
            return <>{key}</>
    }
}

const EditCell: FC<{
    id: number
}> = ({ id }) => {
    return (
        <Link
            href={`/price-plans/edit/${id}`}
            className="dark:bg-slate-400 px-2 py-1 rounded"
        >
            Edit
        </Link>
    )
}