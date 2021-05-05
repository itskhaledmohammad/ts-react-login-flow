import React, { useState } from 'react';
import { Flex, Text, Button, Icon, useToast, Input, Link, InputGroup, InputLeftElement} from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons';
import { FaArrowAltCircleLeft, FaEnvelope } from 'react-icons/fa';
import {Link as RLink} from "react-router-dom";

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



    const handleOTP = () => {
        if(!phone) {
            toast({
                title: "Validation Unsuccessful",
                description: "Please enter a valid OTP",
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

        <Button {...commonStyle} size="lg" {...blackButtonStyle}  padding="30px 0" onClick={handleOTP}>
            <Text fontSize="2xl">Sign Up</Text>
        </Button>
        <Link fontSize="xl"  width="100%" as={RLink} to="/login" marginTop="10px"><Icon as={FaArrowAltCircleLeft} /> <Text as="strong">Go Back to Sign In</Text></Link>
    </Flex  > 
)}

export default Signup;