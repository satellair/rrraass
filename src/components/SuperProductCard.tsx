import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  IconButton,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMic, FiPlay, FiSquare } from "react-icons/fi";

const ProductCard = ({ ซอสอะไร๊ }: { ซอสอะไร๊: string }) => {
  let ซอส;
  let เสียง: HTMLAudioElement;
  {
    switch (ซอสอะไร๊) {
      case "ซอสมะเขือเทศ":
        ซอส = "/pig/rick.png";
        if (typeof Audio != "undefined") {
          เสียง = new Audio("/sounds/nevergonnagiveyouup.mp3");
        }
        break;
      case "ซอสมะพร้าว":
        ซอส = "/pig/jarndeang.png";
        if (typeof Audio != "undefined") {
          เสียง = new Audio("/sounds/dhamma.mp3");
        }
        break;
      case "ซอสมาโย":
        ซอส = "/pig/president.jpeg";
        if (typeof Audio != "undefined") {
          เสียง = new Audio("/sounds/hi.mp3");
        }
        break;
    }
  }

  const { isOpen: isPlay, onOpen: Play, onClose: Stop } = useDisclosure();

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Box maxW={"300px"} filter={"blur(14px)"}>
          <Image
            src={ซอส}
            alt={ซอสอะไร๊}
            boxSize={"300px"}
            roundedTop="lg"
            objectFit={"cover"}
          />
        </Box>

        <HStack p="6" alignItems="center" spacing="4" fontSize={20}>
          {isPlay ? (
            <>
              <IconButton
                aria-label="stop?"
                icon={<FiPlay size={24} />}
                bg={"none"}
                onClick={() => {
                  Stop();
                  เสียง.pause();
                  เสียง.currentTime = 0;
                }}
              />
              <Text>play</Text>
            </>
          ) : (
            <>
              <IconButton
                aria-label="play"
                icon={<FiPlay size={24} />}
                bg={"none"}
                onClick={() => {
                  Play();
                  เสียง.play();
                }}
              />
              <Text>play</Text>
            </>
          )}
        </HStack>
      </Box>
    </Flex>
  );
};

export default ProductCard;
