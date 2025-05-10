import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedicTrack | Patient Appointment Booking & Medical Practice Management Software",
  description: "MedicTrack is an all-in-one clinic management software for medical practitioners to book appointments, manage patient records, send automated reminders, and reduce no-shows. Simplify your practice and enhance patient care. HIPAA-compliant",
  icons: {
    icon: '/favicon.ico'
  },
openGraph: {
    title: "MedicTrack | Patient Appointment Booking & Medical Practice Management Software",
    description: "MedicTrack is an all-in-one clinic management software for medical practitioners to book appointments, manage patient records, send automated reminders, and reduce no-shows. Simplify your practice and enhance patient care. HIPAA-compliant.",
    url: "https://medictrack.vercel.app",
    siteName: "MedicTrack",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedicTrack | Patient Appointment Booking & Medical Practice Management Software",
    description: "MedicTrack is an all-in-one clinic management software for medical practitioners to book appointments, manage patient records, send automated reminders, and reduce no-shows. Simplify your practice and enhance patient care. HIPAA-compliant.",
    images: '/og.png', // Local image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
