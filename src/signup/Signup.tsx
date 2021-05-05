import React, { useState } from 'react';
import { Flex, Text, Button, Icon, useToast, Input, Link, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons';
import {Link as RLink} from "react-router-dom";
import { FaEye, FaEyeSlash, FaKey, FaUserAlt, FaEnvelope, FaArrowAltCircleLeft } from 'react-icons/fa';

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
export const Signup = ():JSX.Element => {
    const toast = useToast()
    const [phone, setPhone] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState<boolean>(false)


    const handlePasswordShow = () => setShow(!show)
    const handleOTP = () => {
        if(!phone) {
            toast({
                title: "Validation Unsuccessful",
                description: "Phone Number can't be empty",
                status: "error",
                duration: 1000,
                isClosable: true,
                position: "top"
              })            
        }
        else if(!name) {
            toast({
                title: "Validation Unsuccessful",
                description: "Name can't be empty",
                status: "error",
                duration: 1000,
                isClosable: true,
                position: "top"
              })            
        }
        else if(!password) {
            toast({
                title: "Validation Unsuccessful",
                description: "Password can't be empty",
                status: "error",
                duration: 1000,
                isClosable: true,
                position: "top"
              })            
        }
    }
    return (
    <Flex direction="column" width="100%" padding="50px" justifyContent="center" alignItems="center">
        <Text fontSize="4xl" align="left" width="100%" as="strong">Create a new account</Text>
        
        <InputGroup {...commonStyle}>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.500" />}
              height="100%"
            />
            <Input type="tel" placeholder="Phone Number (Required)" paddingTop="30px" paddingBottom="30px" fontSize="2xl" borderRadius="0" borderColor="black" onChange={(e) => setPhone(e.target.value)}/> 
        </InputGroup>

        <InputGroup {...commonStyle}>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaUserAlt} color="gray.500" />}
              height="100%"
            />
            <Input type="tel" placeholder="Name (Required)" paddingTop="30px" paddingBottom="30px" fontSize="2xl" borderRadius="0" borderColor="black" onChange={(e) => setName(e.target.value)}/> 
        </InputGroup>

        <InputGroup {...commonStyle}>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaEnvelope} color="gray.500" />}
              height="100%"
            />
            <Input type="tel" placeholder="Email" paddingTop="30px" paddingBottom="30px" fontSize="2xl" borderRadius="0" borderColor="black" onChange={(e) => setEmail(e.target.value)}/> 
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


        <Button {...commonStyle} size="lg" {...blackButtonStyle}  padding="30px 0" onClick={handleOTP}>
            <Text fontSize="2xl">Sign Up</Text>
        </Button>
        <Link fontSize="xl"  width="100%" as={RLink} to="/login" marginTop="10px"><Icon as={FaArrowAltCircleLeft} /> <Text as="strong">Go Back to Sign In</Text></Link>
    </Flex  > 
)}

export default Signup;