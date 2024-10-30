import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proyecto prueba",
  description: "Proyecto prueba para TTT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>

      </header>
      <main>
        <body>
          {children}
        </body>
      </main>
      <footer>

      </footer>
    </html>
  );
}
