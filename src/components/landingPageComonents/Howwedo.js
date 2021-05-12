import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Howcomp from './Howcomp'

export default function Howwedo() {
    return (
        <Flex direction='column' align='center' justify='space-around' m='5' wrap='nowrap'>
            <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='800' color="#233862" data-aos='fade-down'>
                How We Serve You?
            </Text>
            <Flex direction={{base:'column', md:'row'}} align='center' justify='space-evenly' data-aos='fade-up' wrap='nowrap'>
                <Howcomp/>
                <Howcomp/>
                <Howcomp/>
            </Flex>
        </Flex>
    )
}
