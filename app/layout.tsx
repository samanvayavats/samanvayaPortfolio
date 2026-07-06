// @ts-ignore: side-effect import for CSS
import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import {VT323}  from 'next/font/google';
import Navbar from "@/components/ui/navbar";
import ModeToggle from "@/components/ui/modetoggle";
const vt323 = VT323({

  subsets: ['latin'],
  weight: '400', // VT323 only has one weight
  variable: '--font-turbo', // optional CSS variable
});

export const metadata = {
  title: 'SamanvayaTurboPortfolio',
  description: 'Turbo C++ Themed App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="en" suppressHydrationWarning>
  <body className={vt323.variable}>
    {/* <ModeToggle /> */}
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
    <Navbar type="header" />
      {children}
    </ThemeProvider>
  </body>
</html>
  );
}
