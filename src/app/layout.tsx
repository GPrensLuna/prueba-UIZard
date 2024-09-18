import { api } from "@/api";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ListItems } from "./(home)/components/ListItems";
import { ListItemsLoading } from "./(home)/components/ListItemsLoading";
import "./globals.css";

export const metadata: Metadata = {
  title: "template",
  description: "template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.JSX.Element> {
  const posts: number[] = await api.fetchTopPosts();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grid h-screen grid-rows-[60px,1fr,60px]">
        <header className="bg-yellow-400 text-black grid place-content-center font-semibold shadow-lg">
          <h1 className="text-xl">Uizard HackerNews Reader</h1>
        </header>
        <main className="grid grid-cols-[minmax(144px,384px),1fr] max-w-screen xl:px-40">
          <aside className="bg-gray-50 border-r border-gray-200">
            <ul className="px-4 py-2 grid gap-4">
              {posts.map((id) => (
                <li key={id} className="max-w-sm">
                  <Suspense fallback={<ListItemsLoading />}>
                    <Link
                      href={`/${id}`}
                      className="block p-4 bg-white rounded-lg shadow hover:bg-yellow-100 transition duration-200"
                    >
                      <ListItems id={id} />
                    </Link>
                  </Suspense>
                </li>
              ))}
            </ul>
          </aside>
          <section className="p-4 bg-white">{children}</section>
        </main>
      </body>
    </html>
  );
}
