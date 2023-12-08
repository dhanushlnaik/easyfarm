"use client";
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../app/globals.css'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
import {Toaster} from "react-hot-toast";
import Header from "@/components/layout/Header";
import { Providers } from '@/app/providers';

// export const metadata: Metadata = {
//   title: 'Easy Farm',
//   description: '',
// }

export default function Layo({
  children,
}: {
  children: React.ReactNode,
}) {
  return (

        <Providers>
          <Toaster />
          <Header />
          {children}
          <footer className="border-t p-8 text-center text-gray-500 mt-16">
            &copy; 2023 All rights reserved
          </footer>
        </Providers>
  )
}
