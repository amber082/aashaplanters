import { Flex, Text, FormControl, FormLabel, Button, FormHelperText, Input, Textarea, Image } from '@chakra-ui/react'
import React from 'react'
import {PhoneIcon,EmailIcon} from '@chakra-ui/icons'
import  {IoLocationSharp} from 'react-icons/io5'
import Contactsvg from '../assets/contact.svg'

export default function Contact() {
    return (
        <div>
        <Flex direction={{base:'column-reverse',md:'row'}} align='center' justify='space-around'>
            <Flex direction='column' align='flex-start' justify='space-around' m='5' p='5' bg="#FFE8D6" color='#233862' rounded='2xl' boxShadow='2xl' data-aos='fade-right'>
                <Text fontSize='2xl' my='3' fontWeight='semibold'>Contact Information</Text>
                <Text my='2'> <PhoneIcon/> +91 888-888-8888 </Text>
                <Text my='2'> <EmailIcon/> test.123@example.com </Text>
                <Text my='2'> <IoLocationSharp className='location'/> 128/369 Y-1 Block Kidwai Nagar, Kanpur </Text>
            </Flex>
            <Flex direction='column' align='flex-start' justify='space-around' color='#233862' data-aos='fade-left'>
                <Text fontSize='5xl' my='3' fontWeight='semibold'>Contact Us</Text>
                <form>
                    <Flex direction={{base:'column',md:'row'}} justify='space-around'>
                        <FormControl id="name" mr='4' isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" bg="#FFE8D6" boxShadow='xl'/>
                        </FormControl>
                        <FormControl id="phone">
                            <FormLabel>Contact No.</FormLabel>
                            <Input type="tel" bg="#FFE8D6" boxShadow='xl'/>
                            <FormHelperText>We'll never share your contact no.</FormHelperText>
                        </FormControl>
                    </Flex>
                    <FormControl id="email" my='2' isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" bg="#FFE8D6" boxShadow='xl'/>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl id="req" isRequired>
                        <FormLabel>Requirements</FormLabel>
                        <Textarea bg="#FFE8D6" boxShadow='xl'/>
                    </FormControl>
                    <Button bg='#E63946' color='white' rounded='lg' my='5' _hover={{bg:'green.700', boxShadow:'3xl'}} boxShadow='2xl'>Submit</Button>
                </form>
            </Flex>
        </Flex>
        <Flex direction='column' align='center'>
            <Image objectFit='fill' src={Contactsvg} w='60%' mb='-24'></Image>
        </Flex>
        </div>
    )
}
