import "./globals.css";
import Header from "@components/ui/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
