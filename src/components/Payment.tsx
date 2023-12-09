import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Payment: React.FC = () => {
  const [paymentDone, setPaymentDone] = useState(false);

  const handlePayment = () => {
    // Add logic for payment processing here
    // For demonstration purposes, we'll set a timeout to simulate payment processing
    setTimeout(() => {
      setPaymentDone(true);
    }, 2000);
  };

  return (
    <Container maxW="container.lg" mt={10}>
      <Heading mb={6}>Checkout Page</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {/* Personal Details Section */}
        <GridItem colSpan={1}>
          <Stack spacing={4}>
            <Heading as="h2" size="md" mb={4}>
              Checkout
            </Heading>
            <Box>
              <Input type="text" placeholder="First Name" mb={2} />
              <Input type="text" placeholder="Last Name" mb={2} />
            </Box>
            <Box>
              <Input type="email" placeholder="Email" mb={2} />
              <Input type="tel" placeholder="Phone Number" mb={2} />
            </Box>
            <Box>
              <Heading as="h3" size="sm" mb={2}>
                Payment Method
              </Heading>
              <RadioGroup defaultValue="phonepe">
                <Stack direction="row">
                  <Radio value="phonepe">PhonePe</Radio>
                  <Radio value="paytm">Paytm</Radio>
                  <Radio value="gpay">GPay</Radio>
                  <Radio value="bhim">BHIm</Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Stack>
        </GridItem>

        {/* Card Details Section */}
        <GridItem colSpan={1}>
          <Stack spacing={4}>
            <Heading as="h2" size="md" mb={4}>
              Card Details
            </Heading>
            <Box>
              {/* Add input fields for card details */}
              {/* Example: */}
              <Input type="text" placeholder="Card Number" mb={2} />
              <Input type="text" placeholder="Card Holder Name" mb={2} />
              <Input type="text" placeholder="CVV" mb={2} />
            </Box>
            <Box>
              <NextLink href={"/checkout"} passHref>
                <button
                  onClick={handlePayment}
                  type="button"
                  className="w-full px-4 py-3 font-bold text-white bg-green-400 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green focus:border-green-700"
                >
                  Pay Now
                </button>
              </NextLink>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
      {paymentDone && (
        <Box mt={6} p={4} bg="green.100" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">
            Payment done successfully! Thank you for your purchase.
          </Text>
        </Box>
      )}
    </Container>
  );
};

export default Payment;
