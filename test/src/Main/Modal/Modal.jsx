
import { Button,Modal,ModalOverlay,ModalContent,ModalBody,ModalCloseButton,ModalFooter,ModalHeader } from "@chakra-ui/react"

export function BasicUsage({openModal,closeModal,setShowValue,modalheader,modalbody,modalfooter,handleopen,handleclose}) {
 


    return (
      <>
    
  
        <Modal isOpen={()=>handleopen()} onClose={()=>handleclose()}>
          <ModalOverlay />
          <ModalContent>
        {modalheader}
            <ModalCloseButton />
            <ModalBody>
            {modalbody}
            </ModalBody>
  
            <ModalFooter>
                {modalfooter}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }