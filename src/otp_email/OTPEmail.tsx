import React, { useState, useContext } from 'react';
import { Flex, Text, Button, Icon, useToast, Input, Link} from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons';
import { FaArrowAltCircleLeft, FaEnvelope } from 'react-icons/fa';
import {Link as RLink} from "react-router-dom";
import axiosInstance from "../utils/axiosInstance"
import { AxiosResponse } from 'axios';
import { LoadingContext } from "../App"
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
export const OTPEmail: React.FC = ():JSX.Element => {
    const toast = useToast()
    const [otp, setOTP] = useState<string>("");
    const setLoading = useContext(LoadingContext)

    const handleOTP = () => {
        if(otp === "0" || !otp) {
            toast({
                title: "Validation Unsuccessful",
                description: "Please enter a valid OTP",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
              })        
              return    
        }
        setLoading(true);
        axiosInstance.post('/otp/email', JSON.stringify({otp}))
        .then((response:AxiosResponse) => {
            if(response.status === 200) {
                toast({
                    title: "Login Successful",
                    description: "Welcome the login was successful.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                  })
            }
            setLoading(false);
        })
        .catch(err => {
            toast({
                title: "Login Unsuccessful",
                description: "OTP was Invalid.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
              })
              setLoading(false)
        })
    }
    return (
    <Flex direction="column" width="90%" justifyContent="cent   er" alignItems="center">
        <Text fontSize="4xl" align="center" width="100%"><Icon as={FaEnvelope} /> OTP has been sent to your <Text as="strong">EMAIL</Text></Text>
        <Input variant="flushed" textAlign="center" fontSize="3xl" placeholder="Email OTP" {...commonStyle} marginTop="50px" onChange={(e) => setOTP(e.target.value)} />
        <Button {...commonStyle} size="lg" {...blackButtonStyle}  padding="30px 0" onClick={handleOTP}>
            <Text fontSize="2xl">Submit</Text>
        </Button>
        <Flex margin="20px 0">
            <Text>Or</Text>
        </Flex>
        <Button {...commonStyle} variant="outline" borderColor="black" borderRadius="0"  padding="25px 0"  as={RLink} to="/otp/sms"><Text fontSize="xl"><PhoneIcon />  Send OTP to my phone</Text></Button>
        <Link fontSize="xl"  width="100%" as={RLink} to="/login" marginTop="10px"><Text as="strong"><Icon as={FaArrowAltCircleLeft} /> Go Back to Sign In</Text></Link>
    </Flex  > 
)}

export default OTPEmail;