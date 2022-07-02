import Head from "next/head";
import type { NextPage } from "next";
import {
  Box as หมาเห่า,
  Flex as ดิ้น,
  Heading as หัวเรื่อง,
  Container as บรรจุภัณฑ์,
  Text as แท็กข้อความ,
  Button as ปุ่ม,
  Stack as สุม,
  Icon as สัญลักษณ์,
  SimpleGrid as กริดง่ายๆ,
  createIcon,
} from "@chakra-ui/react";
import ฟีเจอร์การ์ด from "../components/featureCard";
import { FcAssistant } from "react-icons/fc";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RRRaaSs</title>
      </Head>
      {/* hero page */}
      <ดิ้น w={"100vw"} h={"100vh"} bg={"gray.300"} overflow="scroll">
        <บรรจุภัณฑ์ maxW={"3xl"}>
          <สุม
            as={หมาเห่า}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 32, md: 40 }}
          >
            <หัวเรื่อง
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Real Rick Roll as a Service
              <span style={{ fontSize: "2rem", fontStyle: "italic" }}>s</span>
            </หัวเรื่อง>
            <แท็กข้อความ color={"gray.500"}>
              Never gonna give you up, never gonna let you down, never gonna run
              around and desert you. Never gonna make you cry, never gonna say
              goodbye, never gonna tell a lie and hurt you.
            </แท็กข้อความ>
            <สุม
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <ปุ่ม
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                Buy now
              </ปุ่ม>
              <ปุ่ม variant={"link"} colorScheme={"blue"} size={"sm"}>
                Buy now
              </ปุ่ม>
            </สุม>
          </สุม>
        </บรรจุภัณฑ์>
      </ดิ้น>
      {/* section 2 */}
      <ดิ้น w={"100vw"} bg={"red.100"} overflow="scroll">
        <บรรจุภัณฑ์>
          <สุม py={{ base: 32, md: 40 }}>
            <หัวเรื่อง alignSelf={"center"}>
              Making deaf can be rick rolled
            </หัวเรื่อง>
            <กริดง่ายๆ columns={{ base: 1, md: 3 }} spacing={10}>
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={
                  <สัญลักษณ์ as={FcAssistant} w={10} h={10} />
                }
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={
                  <สัญลักษณ์ as={FcAssistant} w={10} h={10} />
                }
              />
              <ฟีเจอร์การ์ด
                หัวข้อ={"Lifetime Support"}
                ข้อความ={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
                ภาพของพระผู้เป็นเจ้า={
                  <สัญลักษณ์ as={FcAssistant} w={10} h={10} />
                }
              />
            </กริดง่ายๆ>
          </สุม>
        </บรรจุภัณฑ์>
      </ดิ้น>
    </>
  );
};

export default Home;
