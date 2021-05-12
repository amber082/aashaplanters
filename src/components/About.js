import { Flex, Image, Text, Stack, Avatar } from '@chakra-ui/react';
import React from 'react'
import Aboutsvg from '../assets/about.svg'


const TestimonialAvatar = ({
    src,
    name,
    title,
  }) => {
    return (
      <Flex align='center' mb={5} direction={'row'}>
        <Avatar src={src} alt={name} mr={2}/>
        <Stack spacing={-1} align={'flex-start'}>
          <Text fontWeight={600} color="#233862">{name}</Text>
          <Text fontSize={'sm'} color={"#233862"}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };

export default function About() {
    return (
        <Flex direction={{base:'column-reverse',md:'row'}} align='center' justify='space-around'>
            <Image objectFit='fill' src={Aboutsvg} w={{base:'70%',md:'35%'}} m='20'></Image>
            <Flex direction='column' align='flex-start' justify='space-around' color='#233862' m='20' data-aos='fade-down'>
                <Text fontSize='5xl' my='3' fontWeight='semibold'>
                    About Us
                </Text>
                <TestimonialAvatar
                src={
                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                }
                name={'John Doe'}
                title={'CEO at Aasha Planters'}
                />
                <Text align='justify' fontSize='sm'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Bibendum est ultricies integer quis auctor elit sed vulputate. In nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Ornare lectus sit amet est placerat in. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Lectus sit amet est placerat in egestas erat imperdiet sed. Sem nulla pharetra diam sit amet nisl. Ultrices dui sapien eget mi. Lorem donec massa sapien faucibus et. Proin libero nunc consequat interdum varius sit amet mattis. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Tempus imperdiet nulla malesuada pellentesque elit. Velit egestas dui id ornare arcu odio ut sem. Semper risus in hendrerit gravida rutrum quisque non tellus. Enim lobortis scelerisque fermentum dui faucibus. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Sed vulputate mi sit amet mauris commodo quis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae."
                </Text>
            </Flex>
        </Flex>
    )
}
