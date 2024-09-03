import { SearchUi } from "@/src/features/search";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="p-2">
            <div className="my-2 flex justify-end">
                <span>Search:&nbsp;</span>
                <SearchUi />
            </div>
            {children}
        </main>
    );
}