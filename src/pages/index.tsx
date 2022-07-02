import Head from "next/head";
import type { NextPage } from "next";
import {
  Box,
  Flex,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  SimpleGrid,
  createIcon,
} from "@chakra-ui/react";
import ฟีเจอร์การ์ด from "@components/featureCard";
// import สินค้าการ์ด from "@components/productCard";
import { FcAssistant } from "react-icons/fc";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RRRaaSs</title>
      </Head>
      <Flex w={"100vw"} bg={"gray.300"} direction="row">
        <Stack
          textAlign={"center"}
          pt={{ base: 60, md: 48 }}
          pl={{ base: 4, sm: 16, md: 16, lg: 24 }}
          pr={{ base: 4, sm: 16, md: 40 }}
          flex={1}
          align="center"
          spacing={56}
        >
          {/* HEro */}
          <Stack spacing={8}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
              lineHeight={"110%"}
              // minW={"400px"}
            >
              Real Rick Roll as a Service
              <span style={{ fontSize: "1.5rem", fontStyle: "italic" }}>s</span>
            </Heading>
            <Text color={"gray.500"} maxW={600}>
              Never gonna give you up, never gonna let you down, never gonna run
              around and desert you. Never gonna make you cry, never gonna say
              goodbye, never gonna tell a lie and hurt you.
            </Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                Buy now
              </Button>
            </Stack>
          </Stack>
          {/* section 2 */}
          <Stack py={{ base: 32, md: 40 }} spacing={12}>
            <Heading alignSelf={"center"}>
              Making deaf can be rick rolled
            </Heading>
            <Stack spacing={10} align={"center"}>
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
            </Stack>
          </Stack>
        </Stack>

        {/* Flex marker */}
        <Box
          w="100px"
          h="100px"
          bgColor={"red.300"}
          flex={{ base: 0, md: 1 }}
        ></Box>
      </Flex>
      {/* buy now section */}
      <Flex w={"100vw"} minH={"100vh"} bgColor={"red.300"}>
        <Container>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}></SimpleGrid>
        </Container>
      </Flex>
      {/* <Flex w={"100vw"} bg={"blue.100"} overflow="scroll">
        <Stack py={{ base: 32, md: 40 }}>
          <Heading alignSelf={"center"}>Catalog</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <สินค้าการ์ด></สินค้าการ์ด>
          </SimpleGrid>
        </Stack>
      </Flex> */}
    </>
  );
};

export default Home;
