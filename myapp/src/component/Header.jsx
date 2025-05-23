import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerCloseButton,Button,DrawerContent,useDisclosure, VStack, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
const Header = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>

        <Button pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} width={'10'} h={'10'} borderRadius={'full'} onClick={onOpen} zIndex={'overlay'}>
            <BiMenuAltLeft size={'20'}/>
        </Button>
        
        <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
            <DrawerOverlay/>
                <DrawerContent>
                    
                    <DrawerCloseButton/>
                    <DrawerHeader>
                        VIDEO HUB
                    </DrawerHeader>
                    <DrawerBody >
                        <VStack alignItems={'flex-start'}>
                            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                <Link to={'/'}>Home</Link>                            
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                <Link to={'/videos'}>Videos</Link>                            
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                <Link to={'/videos?catagory=free'}>Free Videos</Link>                            
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                <Link to={'/upload'}>Upload Video</Link>                            
                            </Button>
                        </VStack>
                        <HStack pos={'absolute'} bottom={'10'}>
                            <Button onClick={onClose} colorScheme='purple'>
                                <Link to={'login'}>Log in</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                                <Link to={'signup'}>Sign up</Link>
                            </Button>


                        </HStack>
                    </DrawerBody>

                </DrawerContent>
            

        </Drawer>
      
    </>
  )
}

export default Header
