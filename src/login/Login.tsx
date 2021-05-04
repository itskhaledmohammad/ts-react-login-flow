<<<<<<< Updated upstream
import React from "react"
import {Text} from "@chakra-ui/react"
export const Login = ():JSX.Element => (
    <Text>Login Page</Text>
)
=======
import React, { useState } from 'react';
import { Flex, Text, Input, Button, InputGroup, InputLeftElement, Icon, Link, useToast} from "@chakra-ui/react"
import { PhoneIcon } from '@chakra-ui/icons'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import {Link as RLink, useHistory} from "react-router-dom"

const commonStyle = {
    width: "100%",
    margin: "10px 0"
}
const blackButtonStyle = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "0",
    _hover: {
        backgroundColor: "gray.900"
        
    }
}
export const Login = ():JSX.Element => {
    const history = useHistory()
    const toast = useToast()
    const [phone, setPhone] = useState<string>("");

    const handleSignIn = ():void => {
        if(!phone) {
            toast({
                title: "Validation Unsuccessful",
                description: "Phone number can't be empty",
                status: "error",
                duration: 1000,
                isClosable: true,
                position: "top"
              })            
              return
        }
        else {
            history.push('/otp/sms')
        }
    }
    
    return (
    <Flex direction="column" width="100%" padding="50px" justifyContent="center" alignItems="center">
        <Text fontSize="4xl" align="left" width="100%" as="strong">Log In</Text>
    <InputGroup {...commonStyle}>
        <InputLeftElement
          pointerEvents="none"
          children={<PhoneIcon color="gray.500" />}
          height="100%"
        />
        <Input type="tel" placeholder="Enter your phone number" paddingTop="30px" paddingBottom="30px" fontSize="2xl" borderRadius="0" borderColor="black" onChange={(e) => setPhone(e.target.value)}/> 
    </InputGroup>

    <Button {...commonStyle} size="lg" {...blackButtonStyle}  padding="30px 0" onClick={handleSignIn}>
        <Text fontSize="2xl">Sign In</Text>
    </Button>
    <Flex margin="20px 0">
        <Text>Or</Text>
    </Flex>
    <Button {...commonStyle} variant="outline" borderColor="black" borderRadius="0"  padding="25px 0" as={RLink} to="/login_with_password"><Text fontSize="xl">Sign in with password</Text></Button>
    <Text as="strong">Don't Have an account? <Link to="/signup" as={RLink}>Signup</Link></Text>
    <Flex marginTop="20px">
        <Text>Or</Text>
    </Flex>
    <Flex {...commonStyle} justifyContent="center">
        <Button colorScheme="facebook" borderRadius="0" leftIcon={<Icon as={FaFacebookF} />} {...commonStyle} marginRight="10px" padding="25px 0">Sign in with Facebook</Button>
        <Button colorScheme="red" borderRadius="0" leftIcon={<Icon as={FaGoogle} />} {...commonStyle} padding="25px 0">Sign in with Google</Button>
    </Flex>
    </Flex>
)}
>>>>>>> Stashed changes

export default Login;