import React from 'react'
import {Box, Flex, Image} from '@chakra-ui/react'
import SuccessSvg from '../assets/success.svg'

export default function ContactError() {
    return (
        <Flex direction='column' align='center' justify='space-around' m='5'>
            <Box p='4'
                m='5' 
                bg='green.600' 
                color='white' 
                rounded='xl'  
                boxShadow='xl' 
                w={{base:'80%',md:'60%'}} align='center' fontWeight='bold'>
                Thank You For Contacting Us, We will reach out to you soon
            </Box>
            <Image objectFit='fill' src={SuccessSvg} w={{base:'80%',md:'60%'}}></Image>
        </Flex>
    )
}
