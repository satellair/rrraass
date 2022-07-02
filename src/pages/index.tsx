import Head from "next/head";
import type { NextPage } from "next";
import {
  Flex,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  SimpleGrid as SimpleGrid,
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
      {/* hero page */}
      <Flex w={"100vw"} h={"100vh"} bg={"gray.300"} overflow="scroll">
      <Stack direction={{base: "column",md: "row"}}>
        <Stack
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 32, md: 40 }}
          flex={{ base: 1, md: 0 }}
        >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Real Rick Roll as a Service
              <span style={{ fontSize: "2rem", fontStyle: "italic" }}>s</span>
            </Heading>
            <Text color={"gray.500"}>
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
        </Stack>
      </Flex>
      {/* section 2 */}
      <Flex w={"100vw"} bg={"red.100"} overflow="scroll">
        <Container>
          <Stack py={{ base: 32, md: 40 }}>
            <Heading alignSelf={"center"}>
              Making deaf can be rick rolled
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={
                  <Icon as={FcAssistant} w={10} h={10} />
                }
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={
                  <Icon as={FcAssistant} w={10} h={10} />
                }
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={
                  <Icon as={FcAssistant} w={10} h={10} />
                }
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Flex>
      {/* section 3 */}
      <Flex w={"100vw"} bg={"blue.100"} overflow="scroll">
        <Stack py={{ base: 32, md: 40 }}>
          <Heading alignSelf={"center"}>Catalog</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {/* <สินค้าการ์ด></สินค้าการ์ด> */}
          </SimpleGrid>
        </Stack>
      </Flex>
    </>
  );
};

export default Home;
