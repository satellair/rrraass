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
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiMic, FiPlay, FiSquare } from "react-icons/fi";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const ProductAddToCart = () => {
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
        <Box minH={"300px"} maxW={"300px"}>
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
        </Box>

        <HStack p="6" alignItems="center" spacing="4" fontSize={20}>
          {isPlay ? (
            <>
              <IconButton
                aria-label="stop"
                icon={<FiSquare size={24} />}
                bg={"none"}
                onClick={Stop}
              />
              <Text>playing...</Text>
            </>
          ) : (
            <>
              <IconButton
                aria-label="play"
                icon={<FiPlay size={24} />}
                bg={"none"}
                onClick={Play}
              />
              <Text>play</Text>
            </>
          )}
        </HStack>
      </Box>
    </Flex>
  );
};

export default ProductAddToCart;
