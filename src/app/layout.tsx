import AOSInitializer from "@/components/AOSInitializer";
import MyContextProvider from "@/lib/MyContextProvider";
import SessionProviderForNextAuth from "@/nextAuth/SessionProviderForNextAuth";
import ReduxStoreProvider from "@/redux/ReduxStoreProvider";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Include the font weights you need
  variable: "--font-sora", // Optional: Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Vyazen",
  description: "Vyazen is a platform for developers to share their projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${sora.className} antialiased`}
      >
        <MyContextProvider>
          <SessionProviderForNextAuth>
            <ReduxStoreProvider>
              <Toaster />
              <AOSInitializer />
              {children}
            </ReduxStoreProvider>
          </SessionProviderForNextAuth>
        </MyContextProvider>
      </body>
    </html>
  );
}
