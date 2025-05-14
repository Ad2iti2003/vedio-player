import { Box, Container, Heading,Image, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img7 from '../assets/img7.jpg'
import { transform } from 'framer-motion';

const Home = () => {
    
    
  return (
    <Box>
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
            <Box w="full" h={'100vh'}>
                <Image src={img1}/>
                <Heading bgColor={'whitesmoke'} color={'black'} pos={"absolute"} left={"50%"} top={"50%"} transform="translate(-50%,-50%)" p={"4"}>
                    See your future
                </Heading>
    
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img2}/>
                <Heading bgColor={'whitesmoke'} color={'black'} pos={"absolute"} left={"50%"} top={"50%"} transform="translate(-50%,-50%)" p={"4"}>
                    See your future
                </Heading>
    
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img3}/>
                <Heading bgColor={'whitesmoke'} color={'black'} pos={"absolute"} left={"50%"} top={"50%"} transform="translate(-50%,-50%)" p={"4"}>
                    See your future
                </Heading>
    
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img4}/>
                <Heading bgColor={'whitesmoke'} color={'black'} pos={"absolute"} left={"50%"} top={"50%"} transform="translate(-50%,-50%)" p={"4"}>
                    See your future
                </Heading>
    
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img5}/>
                <Heading bgColor={'whitesmoke'} color={'black'} pos={"absolute"} left={"50%"} top={"50%"} transform="translate(-50%,-50%)" p={"4"}>
                    See your future
                </Heading>
    
            </Box>
    
        </Carousel>
        <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
            <Heading textTransform={"uppercase"} py={'2'} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'}>
                Services
            </Heading>
            <Stack
            h='full'
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
          
            justifyContent={'center'}
            >
                <Image src={img7} filter={'hue-rotate(-130deg)'} h={[40,400]} borderRadius={'full'}/>
                <Text letterSpacing={'widset'} lineHeight={'190%'} p={['4','16']} alignItems={'center'}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod corrupti, accusamus et explicabo quisquam illo. Necessitatibus amet consequuntur autem perferendis tempore. Dolorum debitis error, repellat asperiores, ipsum ducimus, minus magni iusto et voluptate deleniti obcaecati iste molestiae culpa commodi. Soluta natus, cupiditate officiis animi obcaecati dicta culpa quod error, ex quidem fugiat enim ab itaque sint temporibus alias commodi quia! Obcaecati cumque est possimus error assumenda autem sapiente inventore vel ntia autem. Recusandae consectetur, veritatis fugiat illo consequuntur quam at ipsum? Iste adipisci sint maiores quidem eos aliquam assumenda tempore.
                </Text>

            </Stack>

        </Container>
        
    </Box>
    
  )
  
}

export default Home
