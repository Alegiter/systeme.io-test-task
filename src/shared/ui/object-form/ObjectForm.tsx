import { FC } from "react"
import { ignoreFormAction } from "@/src/shared/lib"

type Props<T> = {
    obj: T
    FormField: FC<{ objKey: keyof T; obj: T }>
    actionHandler: (formData: FormData) => Promise<void>
    discardHandler: () => void
}

export function ObjectForm<T extends object>(props: Props<T>) {
    const { obj, FormField, actionHandler, discardHandler } = props
    const keys = Object.keys(obj) as Array<keyof T>

    return (
        <form action={actionHandler}>
            {keys.map((key) => (
                <FormField key={key.toString()} objKey={key} obj={obj} />
            ))}
            <div className="w-full flex justify-between">
                <button
                    formAction={ignoreFormAction}
                    onClick={discardHandler}
                    className="border-2 dark:border-slate-400 px-2 py-1 rounded"
                >
                    Discard
                </button>
                <button 
                type="submit"
                className="dark:bg-slate-400 px-2 py-1 rounded"
                >Save</button>
            </div>
        </form>
    )
}

export function DefaultFormField<T extends object>(props: { objKey: keyof T; obj: T }) {
    const { objKey, obj } = props
    const key = objKey.toString()
    switch (typeof obj[objKey]) {
        case "string":
            return (
                <div className="pb-2">
                    <label
                        htmlFor={key}
                        className="pe-2 capitalize"
                    >{key}:</label>
                    <input
                        id={key}
                        name={key}
                        defaultValue={obj[objKey]}
                        className="w-full dark:bg-slate-500"
                    />
                </div>
            )

        default:
            return null
    }
}