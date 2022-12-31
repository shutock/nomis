import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { SearchModal } from "./ui";

export const useSearch = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const ModalComponent = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter={`blur(1rem)`} />
        <ModalContent
          bg={colorMode === "dark" ? "gray.900" : "gray.200"}
          maxW={"4xl"}
          borderRadius={"2xl"}
        >
          <ModalHeader>Nomis Score</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SearchModal />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  return { open: onOpen, Modal: ModalComponent };
};
