"use client";

import { PricePlan } from "@/src/shared/api/db";
import { FC } from "react";
import { updatePricePlan } from "../api/updatePricePlan";
import { useRouter } from "next/navigation";
import { DefaultFormFieldUi, ObjectFormUi } from "@/src/shared/ui/object-form";

type Props = {
    pricePlan: PricePlan;
};
export const PricePlanEditForm: FC<Props> = (props) => {
    const { pricePlan } = props;
    const router = useRouter();
    const handle = async (formData: FormData) => {
        await updatePricePlan(pricePlan.id, formData);
        router.back();
    };
    const discard = () => {
        router.back();
    };
    return (
        <ObjectFormUi
            obj={pricePlan}
            FormField={DefaultFormFieldUi}
            actionHandler={handle}
            discardHandler={discard}
        />
    );
};
