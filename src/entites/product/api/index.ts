import { db } from "@/src/shared/api"

export function getProductList(options?: {/* like filter or limit */}) {
    void options

    return db.products
}