"use client"

import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from "../components"
import StateProvider from "./StateProvider";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        <Navbar />
        <main>
          <StateProvider>
            {children}
          </StateProvider>

        </main>
        <ToastContainer />
      </body>
    </html>
  );
}
