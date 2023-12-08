"use client";
import { Providers } from "@/app/providers";
import React from "react";

import { Box, ColorModeScript } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Head from "next/head";
import Header from "./Header";
// import ViewsShare from "@/components/ViewsNShare";

const mont = Inter({ subsets: ["latin"] });
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const router = usePathname();
  return (
    <div>
        <Box
                  paddingBottom={{ lg: "10", sm: "10", base: "10" }}
                  marginX={{ lg: "40", md: "2", sm: "2", base: "2" }}
                  paddingX={{ lg: "10", md: "5", sm: "5", base: "5" }}
                  marginTop={{ lg: "10", md: "5", sm: "5", base: "5" }}
                  > {children}</Box>
       
        </div>

  );
};

export default HomeLayout;