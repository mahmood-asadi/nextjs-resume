import "./globals.css";
import { Inter } from "next/font/google";
import { ServerThemeProvider } from "next-themes";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body className={`${inter.className} dark:bg-neutral-900`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
