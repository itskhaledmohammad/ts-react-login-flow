import { Spinner, Flex, Text } from "@chakra-ui/react"
import React from 'react';

const LoadingPage = ():JSX.Element => {
    return (
        <Flex width="100%" justifyContent="center" alignItems="center">
            <Spinner size="xl"  />
            <Text fontSize="2xl">Loading</Text>
        </Flex>
    )
}

export default LoadingPage;