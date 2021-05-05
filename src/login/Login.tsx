import React, { useState, useContext } from 'react';
import { Flex, Text, Input, Button, InputGroup, InputLeftElement, Icon, Link, useToast} from "@chakra-ui/react"
import { PhoneIcon } from '@chakra-ui/icons'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import {Link as RLink, useHistory} from "react-router-dom";
import { LoadingContext } from "../App"
import axiosInstance from "../utils/axiosInstance"

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
export const Login: React.FC = ():JSX.Element => {
    const history = useHistory()
    const toast = useToast()
    const setLoading = useContext(LoadingContext)
    const [phone, setPhone] = useState<string>("");

    const handleFacebook = ():void => {
        toast({
            title: "Login Successful",
            description: "Welcome! Logged In with Facebook.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top"
          })
    }

    const handleGoogle = ():void => {
        toast({
            title: "Login Successful",
            description: "Welcome! Logged In with Google.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top"
          })
    }

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
        
        setLoading(true);
        axiosInstance.get('/otp')
        .then(({data}) => {
            if(data.otp_medium_sms === 'true') {
                history.push('/otp/sms')
            } else {
                history.push('/otp/email')
            }
            setLoading(false);
        })
        .catch(err => {
            toast({
                title: "Unexpected Error",
                description: "Sorry there was a network error.",
                status: "error",
                duration: 1000,
                isClosable: true,
                position: "top"
              })            
              setLoading(false);
        })
        
    }
    
    return (
    <Flex direction="column" width="90%" justifyContent="center" alignItems="center">
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
        <Button colorScheme="facebook" borderRadius="0" leftIcon={<Icon as={FaFacebookF} />} {...commonStyle} marginRight="10px" padding="25px 0" onClick={handleFacebook}>Sign in with Facebook</Button>
        <Button colorScheme="red" borderRadius="0" leftIcon={<Icon as={FaGoogle} />} {...commonStyle} padding="25px 0" onClick={handleGoogle}>Sign in with Google</Button>
    </Flex>
    </Flex>
)}
export default Login;