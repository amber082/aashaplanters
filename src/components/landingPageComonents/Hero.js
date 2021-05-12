import React from 'react'
import {Flex,Text,Heading,Image} from '@chakra-ui/react'
import Main from '../../assets/main.svg'
import Explore from './Explore'

export default function Hero() {
    return (
        <Flex direction={{base:'column',md:'row'}} align='center' justify='space-around' wrap='wrap' mt={{base:'10',md:'0'}}>
            <div data-aos='fade-down'>
            <Flex  direction='column' align={{base:'center',md:'flex-start'}} justify='space-around' wrap='wrap'>
                <Heading fontSize={{base:'5xl',md:'6xl'}} fontWeight='920' color="#233862" letterSpacing='1px' display='flex' alignItems={{base:'center',md:'flex-start'}} flexDirection='column'> 
                    <Text>GROW MORE</Text>
                    <Text>SAVE MORE</Text>
                </Heading>
                <Explore/>
            </Flex>
            </div>
            <div data-aos='fade-up'>
            <Image objectFit='fill' src={Main} alt='Main SVG' boxSize='500' px={{base:'4',md:'0'}} my={{base:'-20',md:'0'}}></Image>
            </div>
        </Flex>
    )
}
