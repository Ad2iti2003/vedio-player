import { Button, Container, Heading, Input, VStack,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'120vh'} p={'16'}>
        
            <form>
                <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                    <Heading>Video Hub</Heading>
                    <Avatar alignSelf={'center'} boxSize={'32'}/>
                    <Input placeholder={"Name"} type='text' required focusBorderColor={'purple.500'}/>
                    <Input placeholder={"Email"} type='email' required focusBorderColor={'purple.500'}/>
                    <Input placeholder={"Password"} type='Password' required focusBorderColor={'purple.500'}/>
                    
                    <Button >Signup</Button>
                    <Text textAlign={'right'} color={'purple'}>
                        already signup login?{" "}
                        <Button colorScheme='purple' variant={'link'}>
                        <Link to={'/login'}>Login now</Link>
                    </Button>
                        </Text>
                    


                </VStack>
            </form>

     

    </Container>
  )
}

export default Signup

