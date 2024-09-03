import { SearchUi } from "@/src/features/search";
import Link from "next/link";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="p-2">
            <div className="my-2 flex justify-between">
                <nav>
                    <Link href="/products">Products</Link>
                    |
                    <Link href="/price-plans">Price plans</Link>
                    |
                    <Link href="/pages">Pages</Link>
                </nav>
                <div className="flex">
                    <span>Search:&nbsp;</span>
                    <SearchUi />
                </div>
            </div>
            {children}
        </main>
    );
}