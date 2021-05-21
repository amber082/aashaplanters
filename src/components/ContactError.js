import React from 'react'
import {Box, Flex, Image} from '@chakra-ui/react'
import Errorsvg from '../assets/error.svg'

export default function ContactError() {
    return (
        <Flex direction='column' align='center' justify='space-around' m='5'>
            <Box p='4'
                m='5' 
                bg='#E63946' 
                color='white' 
                rounded='xl'  
                boxShadow='xl' 
                w={{base:'80%',md:'80%'}} align='center' fontWeight='bold'>
                Oops! Something Went Wrong, Try Again or directly contact us using Contact Information
            </Box>
            <Image objectFit='fill' src={Errorsvg} w={{base:'80%',md:'60%'}}></Image>
        </Flex>
    )
}
