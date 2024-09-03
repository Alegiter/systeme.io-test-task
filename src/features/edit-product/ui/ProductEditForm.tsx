"use client";

import { Product } from "@/src/shared/api/db";
import { FC } from "react";
import { updateProduct } from "../api/updateProduct";
import { useRouter } from "next/navigation";
import { DefaultFormFieldUi, ObjectFormUi } from "@/src/shared/ui/object-form";

type Props = {
    product: Product;
};
export const ProductEditForm: FC<Props> = (props) => {
    const { product } = props;
    const router = useRouter();
    const handle = async (formData: FormData) => {
        await updateProduct(product.id, formData);
        router.back();
    };
    const discard = () => {
        router.back();
    };
    return (
        <ObjectFormUi
            obj={product}
            FormField={ProductFormField}
            actionHandler={handle}
            discardHandler={discard}
        />
    );
};

const ProductFormField: FC<{
    objKey: keyof Product,
    obj: Product
}> = (props) => {
    const { objKey, obj } = props
    switch (objKey) {
        case "active":
            return (<div>
                <label>Is Active</label>
                <div>Some switch component</div>
            </div>)
        default:
            return <DefaultFormFieldUi objKey={objKey} obj={obj} />
    }
}
