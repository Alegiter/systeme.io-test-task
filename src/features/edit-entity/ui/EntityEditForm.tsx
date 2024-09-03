"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { DefaultFormFieldUi, ObjectFormUi } from "@/src/shared/ui/object-form";

type Props = {
    entity: object;
    update: (formData: FormData) => Promise<void>
};
export const EntityEditForm: FC<Props> = (props) => {
    const { entity, update } = props;
    const router = useRouter();
    const handle = async (formData: FormData) => {
        await update(formData);
        router.back();
    };
    const discard = () => {
        router.back();
    };
    return (
        <ObjectFormUi
            obj={entity}
            FormField={DefaultFormFieldUi}
            actionHandler={handle}
            discardHandler={discard}
        />
    );
};
