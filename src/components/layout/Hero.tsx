import Right from "@/components/icons/Right";

import { Button } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-6xl font-bold">
        Harvested with 💚,<br />
        Delivered with Care<br />
          with &nbsp;
          <span className="text-primary">
          Easy
          <span className=" text-green-400">Farm</span>!
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-m">
        Cultivating Connections, Nurturing Communities – Your Direct Link to Farm-Fresh Goodness.
        </p>
        <div className="flex gap-4 text-sm">
        <Button colorScheme='green' variant='solid' rightIcon={<Right />}>
        Order now
  </Button>
  <Button rightIcon={<Right />} colorScheme='green' variant='outline'>
    Learn More
  </Button>
        </div>
      </div>
      <div className="relative  md:block">
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'df'} />
      </div>
    </section>
  );
}
