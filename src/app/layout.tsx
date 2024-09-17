import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " template ",
  description: "template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grid h-screen grid-rows-[60px,1fr,60px]">
        <header className="w-full bg-yellow-400 text-black grid place-content-center font-semibold">
          Uizard HackerNews Reader
        </header>
        <main className="grid md:grid-cols-[minmax(250px,380px),1fr] max-w-screen-xl xl:px-40 grid-cols-1">
          <aside>left bar</aside>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
