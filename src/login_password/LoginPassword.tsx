import React, { useState, useContext } from 'react';
import { Flex, Text, Input, Button, InputGroup, InputLeftElement, InputRightElement, Icon, Link, useToast} from "@chakra-ui/react"
import { PhoneIcon } from '@chakra-ui/icons'
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';
import {Link as RLink, useHistory} from "react-router-dom"
import { LoadingContext } from "../App"
import axiosInstance from "../utils/axiosInstance"
import { AxiosResponse } from 'axios';

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
export const LoginPassword: React.FC = ():JSX.Element => {
    const toast = useToast()
    const [phone, setPhone] = useState<string>("");
    const [show, setShow] = useState<boolean>(false)
    const [password, setPassword] = useState<string>("")
    const handlePasswordShow = () => setShow(!show)
    const setLoading = useContext(LoadingContext)

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
        } else if(!password) {
            toast({
                title: "Validation Unsuccessful",
                description: "Password can't be empty",
                status: "error",
                duration: 1000,
                isClosable: true,
                position: "top"
              })  
              return
        }

        setLoading(true)
        axiosInstance.post('/login', { phone, password })
        .then((response:AxiosResponse) => {
            if(response.status === 200) {
                toast({
                    title: "Login Successful",
                    description: "Welcome the login was successful.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top"
                  })
            }
            setLoading(false);
        })
        .catch(err => {
            toast({
                title: "Login Unsuccessful",
                description: "Unfortunately the login was unsuccessful, try again.",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top"
              })
              setLoading(false)
        })
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

    <InputGroup {...commonStyle}>
    <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FaKey} color="gray.500"/>}
          height="100%"
        />
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        paddingTop="30px" paddingBottom="30px" fontSize="2xl" borderRadius="0" borderColor="black" 
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputRightElement width="4.5rem" height="100%">
        <Button  size="lg" onClick={handlePasswordShow} backgroundColor="transparent" _hover={{backgroundColor: "transparent"}} >
          <Icon as={show ? FaEyeSlash : FaEye} />
        </Button>
      </InputRightElement>
    </InputGroup>

    
    <Button {...commonStyle} size="lg" {...blackButtonStyle}  padding="30px 0" onClick={handleSignIn}>
        <Text fontSize="2xl">Sign in with Password </Text>
    </Button>
    <Flex margin="20px 0">
        <Text>Or</Text>
    </Flex>
    <Button {...commonStyle} variant="outline" borderColor="black" borderRadius="0"  padding="25px 0"  as={RLink} to="/login"><Text fontSize="xl">Forgot Password? Sign in via other means!</Text></Button>
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

export default LoginPassword;