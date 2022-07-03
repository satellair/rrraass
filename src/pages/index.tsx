import { useState, useRef } from "react";
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
  Image,
  SimpleGrid,
  createIcon,
} from "@chakra-ui/react";
import { การ์ดฟีเจอร์, การ์ดสินค้า, Model } from "@components";
// import สินค้าการ์ด from "@components/productCard";
import { FcAssistant } from "react-icons/fc";
const Home: NextPage = () => {
  const [speed, setSpeed] = useState(30);
  const orderNowRef = useRef<null | HTMLDivElement>(null);
  const executeScroll = () =>
    orderNowRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Head>
        <title>RRRaaSs | 👦🏻🎤🕺🏻</title>
        <meta
          name="description"
          content="Real Rick Roll as a Service(s) for your loved ones."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script async src="https://api.countapi.xyz/hit/RRRaaSs/visits" />
      </Head>
      <Button
        position="fixed"
        right={5}
        top={5}
        w={"48px"}
        h={"48px"}
        fontSize={24}
        onClick={() => setSpeed(speed * 1.25)}
      >
        ⚡️
      </Button>
      {speed > 200 && (
        <Button
          position="fixed"
          right={5}
          top={20}
          w={"48px"}
          h={"48px"}
          fontSize={24}
          onClick={() => setSpeed(30)}
        >
          🐌
        </Button>
      )}
      {/* Proudly presented model :3 */}
      <Box
        position="fixed"
        right={{ base: 0 }}
        w={{ base: "100%", md: "50%" }}
        // top={"12.5%"}
        zIndex={-1}
        h="100vh"
        filter={{ base: "blur(2px)", md: "none" }}
        opacity={{ base: 0.5, md: 1 }}
      >
        <Model speed={speed} scale={25} />
      </Box>
      {/* text โว้ยยยย */}
      <Flex w={"100vw"} direction="row">
        <Stack
          textAlign={"center"}
          pl={{ base: 4, sm: 16, md: 16, lg: 24 }}
          pr={{ base: 4, sm: 16, md: 40 }}
          flex={1}
          align="center"
          spacing={56}
        >
          {/* HEro */}
          <Stack
            spacing={8}
            h={"100vh"}
            align={"center"}
            justifyContent={"center"}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
              lineHeight={"110%"}
              // minW={"400px"}
            >
              Reverse Rickroll <br />
              as a Service&nbsp;
              <span style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
                solution
              </span>
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
                bg={"orange.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "orange.500",
                }}
                onClick={executeScroll}
              >
                Order Now
              </Button>
            </Stack>
          </Stack>
          {/* section 2 */}
          <Stack py={24} spacing={12}>
            <Heading alignSelf={"center"}>A Rickroll you can touch</Heading>
            <Stack spacing={10} align={"center"}>
              <การ์ดฟีเจอร์
                หัวข้อ={"Rickroll for Everyone"}
                ข้อความ={
                  "Accessible and affordable, this service is designed for everyone. Even a deaf, or blind, can get rickrolled!"
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <การ์ดฟีเจอร์
                หัวข้อ={"Breaking the Cliché"}
                ข้อความ={
                  "Get rid of URL or QR Code rememberer. Tada, a 3D waveform model you can get rickrolled even a deaf or blind!"
                }
                ภาพของพระผู้เป็นเจ้า={<Icon as={FcAssistant} w={10} h={10} />}
              />
              <การ์ดฟีเจอร์
                หัวข้อ={"Satisfaction Guaranteed"}
                ข้อความ={
                  "Not satisfied? We're happy to get rickrolled as you want!"
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
          // bgColor={"red.300"}
          flex={{ base: 0, md: 1 }}
        ></Box>
      </Flex>
      {/* buy now section */}
      <Stack
        spacing={{ base: 20, md: 28 }}
        w={"100vw"}
        minH={"100vh"}
        bgColor={"orange.300"}
        zIndex={0}
        p={20}
        justifyContent={"center"}
        direction={"column"}
        ref={orderNowRef}
      >
        <Heading textAlign={"center"}>
          Don't make your loved{" "}
          <span style={{ fontSize: "0.5rem", fontStyle: "italic" }}>
            or hated
          </span>{" "}
          ones dissapointed!
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <การ์ดสินค้า />
          <การ์ดสินค้า />
          <การ์ดสินค้า />
        </SimpleGrid>
        <Button
          colorScheme={"green"}
          bg={"orange.400"}
          rounded={"full"}
          px={6}
          _hover={{
            bg: "orange.500",
          }}
          onClick={() => window.open("https://youtu.be/dQw4w9WgXcQ")}
        >
          I want this!
        </Button>
      </Stack>
      {/* <Flex w={"100vw"} bg={"blue.100"} overflow="scroll">
        <Stack py={{ base: 32, md: 40 }}>
          <Heading alignSelf={"center"}>Catalog</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            
          </SimpleGrid>
        </Stack>
      </Flex> */}

      {/* Footer */}
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.700",
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.700",
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image src="favicon.png" w={20} />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          🄯 2022 RRRaaSs. All lefts reserved
        </Text>
      </Box>
    </>
  );
};

export default Home;
