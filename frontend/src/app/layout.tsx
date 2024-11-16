"use client"

import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StateProvider from "./StateProvider";
import { SessionProvider } from "next-auth/react"




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        <SessionProvider>
          <main>
            <StateProvider>
              {children}
            </StateProvider>

          </main>
          <ToastContainer />
        </SessionProvider>
      </body>
    </html>
  );
}
