import "./globals.css";
import Header from "@components/ui/Header";
import { QueryProvider } from "./providers/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Header />
          <main className="main">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
