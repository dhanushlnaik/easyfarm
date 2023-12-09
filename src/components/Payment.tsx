// ProfilePage.tsx
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
  } from "@chakra-ui/react";
  import React from "react";
  
  const Payment: React.FC = () => {
    return (
      <Container maxW="container.lg" mt={10}>
        <Heading mb={6}>Profile Page</Heading>
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
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-green-400 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green focus:border-green-700"
              >
                Pay Now
              </button>
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    );
  };
  
  export default Payment;
  