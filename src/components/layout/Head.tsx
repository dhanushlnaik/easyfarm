import { motion, Transition } from 'framer-motion';
import { Box, Text, useTheme } from '@chakra-ui/react';
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Head: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Text
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 } as any}
        fontSize={{base: "2xl",md:"2xl", lg: "6xl"}}
        fontWeight="bold"
        color="#4ade80"

      >
        {title}
      </Text>
      <Text
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 } as any}
        fontSize={{base: "lg",md:'lg', lg: "2xl"}}
        className=""
      >
        {subtitle}
      </Text>
    </Box>
  );
};

export default Head;