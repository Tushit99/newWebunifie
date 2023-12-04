import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react'

const InquiryForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Button colorScheme={"blue"} borderRadius={"50%"}  onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody> 
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default InquiryForm;

