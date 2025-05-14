import { Button, Container, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

const login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        
            <form>
                <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                    <Heading>Welcome Back</Heading>
                    <Input placeholder={"Email"} type='email' required focusBorderColor={'purple.500'}/>
                    <Input placeholder={"Password"} type='Password' required focusBorderColor={'purple.500'}/>
                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to={'/forgetpassward'}>forget passward?</Link>
                    </Button>
                    <Button >Login</Button>
                    <Text textAlign={'right'} color={'purple'}>
                        new user?{" "}
                        <Button colorScheme='purple' variant={'link'}>
                        <Link to={'/signup'}>Signup</Link>
                    </Button>
                        </Text>
                    


                </VStack>
            </form>

     

    </Container>
  )
}

export default login
