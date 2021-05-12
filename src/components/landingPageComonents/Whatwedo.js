import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import whatwedo from '../../assets/whatwedo.svg'
import Explore from './Explore'

export default function Whatwedo() {
    return (
        <div>
            <Flex direction={{base:'column-reverse',md:'row'}} align='center' justify='space-around' wrap='nowrap'>
                <div data-aos='fade-right'>
                    <Image objectFit='fill' alt='what we do SVG' src={whatwedo} boxSize='450' px={{base:'4',md:'0'}}></Image>
                </div>
                <div data-aos='fade-left'>
                    <Flex direction='column' align={{base:'center',md:'flex-start'}} justify='center' wrap='nowrap' boxSize={{base:'300',md:'450'}}>
                        <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='800' color="#233862">
                            What We Do?
                        </Text>
                        <Text align={{base:'center',md:'left'}}>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol”
                        </Text>
                        <Explore/>
                    </Flex>
                </div>
            </Flex>
        </div>
    )
}
