"use client";
import React from 'react';
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import Head from './Head';
import ShoppingCart from '../icons/ShoppingCart';
import NextLink  from 'next/link';

export default function HomeMenu() {
  const bg = useColorModeValue("#f6f6f7", "#171923");

  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 flex justify-start"></div>

      <Head subtitle="Deals" title="Product" />

      <div className='grid grid-cols-3 gap-4 pt-4'>
        <ProductCard bg={bg} image="/dragon.png" title="Dragon Fruit" />
        <ProductCard bg={bg} image="/honeyb.png" title="Honey" />
        <ProductCard bg={bg} image="/rambutan.png" title="Rambutan" />
      </div>
    </section>
  );
}

interface ProductCardProps {
  bg: string;
  image: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ bg, image, title }) => {
  return (
    <Box
      className="w-full flex items-center justify-between rounded-3xl p-6 md:p-12 md:hover:cursor-pointer ease-in duration-200"
      borderRadius="0.55rem"
      bgColor={bg}
      overflow="clip"
      _hover={{
        border: "1px",
        borderColor: "#4ade80",
      }}
    >
      <div className="p-3 rounded-lg text-center">
        <img src={image} alt={title} />

        <Text fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }} fontWeight="bold" className="pt-4 pb-2">
          {title}
        </Text>
        <NextLink href="/checkout" passHref>
        <Button colorScheme="green" variant="outline" leftIcon={<ShoppingCart />} borderRadius={"40px"} >
          Buy Now
        </Button>
        </NextLink>
      </div>
    </Box>
  );
};