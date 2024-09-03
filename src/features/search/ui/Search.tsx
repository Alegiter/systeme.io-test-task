import { getSearchParam } from "@/src/app/context"

export function Search() {
    const q = getSearchParam()
    return (
        <form>
            <input
                type="search"
                name="q"
                defaultValue={q}
                className="w-full px-1 dark:bg-slate-500"
            />
        </form>
    )
}