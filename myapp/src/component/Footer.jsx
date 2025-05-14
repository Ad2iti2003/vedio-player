import React from 'react'
import {Box, Button, HStack, Heading, Input, Stack, VStack,Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']} >
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} transform={'uppercase'} textAlign={['center','left']}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'}>
                    <Input placeholder='enter email here..... ' border={'none'} borderRadius='none' outline={'none'} focusBorderColor='none'/>
                    <Button p={'0'} colorScheme='purple' variant={'Ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend/>
                    </Button>
                </HStack>
            </VStack >
            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    Vedio Hub

                </Heading>
                <Text>
                    All rigth received
                </Text>
                

            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'}>
                    Social media
                </Heading>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='_blank' href="https://youtube.com">Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='_blank' href="https://youtube.com">GitHub</a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='_blank' href="https://youtube.com">Instragram</a>
                </Button>

            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer;
