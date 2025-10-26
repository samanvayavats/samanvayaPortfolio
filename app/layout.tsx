import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import {VT323}  from 'next/font/google';
import Navbar from "@/components/ui/navbar";
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
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
      className={vt323.variable}
      >
        <Navbar type="header"/>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
            {children}
          </ThemeProvider>
        <Navbar type="footer"/>
      </body>
    </html>
  );
}
