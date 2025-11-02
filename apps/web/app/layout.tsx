import localFont from "next/font/local";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>박다솜</header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
