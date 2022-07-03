import React from "react";
import {
  Button,
  Text,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spacer,
} from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DownloadModal = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent width={{ base: "90%" }}>
        <ModalHeader>
          <HStack>
            <FiDownload />
            <Text>Download Model</Text>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            JK, but sorry, service not available yet. Please download the model
            and print by yourself :3
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            colorScheme="orange"
            onClick={() => (location.href = "/models/nevergonnagiveyouup.stl")}
          >
            <FiDownload />
            <Spacer />
            Download
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DownloadModal;
