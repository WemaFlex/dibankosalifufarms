import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dibanko Salifu Farms",
  description: "Dibanko Salifu Farms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="wemaflex" />
        <meta name="description" content="Dibanko Salifu Farms" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/odometer.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
        <Script strategy="afterInteractive" src="/assets/js/jquery-3.7.1.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/bootstrap.bundle.min.js" />

        {/* 2. PLUGINS: Load these AFTER React has painted the page */}
        <Script strategy="afterInteractive" src="/assets/js/jquery.nice-select.min.js" />
        <Script strategy="beforeInteractive" src="/assets/js/odometer.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/jquery.appear.min.js" />
        <Script strategy="beforeInteractive" src="/assets/js/swiper-bundle.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/jquery.meanmenu.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/jquery.magnific-popup.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/wow.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/gsap.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/ScrollTrigger.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/SplitText.min.js" />
        <Script strategy="afterInteractive" src="/assets/js/splitType.js" />

        {/* 3. YOUR MAIN LOGIC: Also must wait! */}
        <Script strategy="afterInteractive" src="/assets/js/main.js" />
      </body>
    </html>
  );
}
