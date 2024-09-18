/* eslint-disable no-console */
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import "./globals.css";
import type { HackerNewsPost } from "./typescript";

export const metadata: Metadata = {
  title: " template ",
  description: "template",
};
const ListItems = async ({
  id,
}: {
  id: HackerNewsPost["id"];
}): Promise<JSX.Element> => {
  const post = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
  ).then((res) => res.json() as Promise<HackerNewsPost>);
  return (
    <li className="grid h-16 gap-2 truncate">
      <p>{post.title || post.by}</p>
      <div className="flex justify-between items-center opacity-50">
        <p>{post.by}</p>
        <p>Visit website</p>
      </div>
    </li>
  );
};

const ListItemsLoading = (): JSX.Element => (
  <article className="grid h-16 items-center">
    <section className="w-full animate-pulse" role="status">
      <div className="h-2.5 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
      <span className="sr-only">Loading ...</span>
    </section>
    <div className="flex items-center justify-between">
      <section className="w-full animate-pulse" role="status">
        <div className="h-2.5 w-12 rounded-xl bg-gray-200 dark:bg-gray-700" />
        <span className="sr-only">Loading ...</span>
      </section>
      <section className="w-full animate-pulse" role="status">
        <div className="h-2.5 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
        <span className="sr-only">Loading ...</span>
      </section>
    </div>
  </article>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.JSX.Element> {
  const posts: number[] = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"`,
  ).then((res) => res.json() as Promise<number[]>);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grid h-screen grid-rows-[60px,1fr,60px]">
        <header className="w-full bg-yellow-400 text-black grid place-content-center font-semibold">
          Uizard HackerNews Reader
        </header>
        <main className=" md:grid-cols-[350px,1fr] max-w-screen grid xl:px-40 grid-cols-1">
          <aside>
            <ul className=" px-4 grid gap-4">
              {posts.map((id) => (
                <li key={id} className="">
                  <Suspense fallback={<ListItemsLoading />}>
                    <Link href={`/${id}`}>
                      <ListItems id={id} />
                    </Link>
                  </Suspense>
                </li>
              ))}
            </ul>
          </aside>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
