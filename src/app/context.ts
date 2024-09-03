import { createServerContext } from "@/src/shared/lib/server-context";

// search param is "q"
export const [getSearchParam, setSearchParam] = createServerContext("")