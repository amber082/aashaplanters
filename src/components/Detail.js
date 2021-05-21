import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box, Button, Flex, Image, Stack, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure} from '@chakra-ui/react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Howwedo from './landingPageComonents/Howwedo'
import axios from 'axios'

export default function Detail() {
    let {id} = useParams();

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        easing:true,
        accessibility:true,
        autoplay:true,
        autoplaySpeed:3000,
    };

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState({ hits: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(process.env.REACT_APP_PROXY+'/api/detail',{
                params: {
                    id:id
                }
            });
            setData(result.data);
            setIsLoading(false);
        };
        fetchData();
    },[id])

    return (
        isLoading ? (<Text mb='100%'>Loading ...</Text>) : (
        <Flex direction={{base:'column',md:'row'}} align='center' justify='space-around' mx='10'>
            <Box boxSize={{base:'sm',md:'lg'}} mx='20' my='10' boxShadow='2xl'>
                <Slider {...settings}>
                    {data.images.map(item => (
                        <Image src={process.env.REACT_APP_PROXY+item} objectFit='fill' />
                    ))}
                </Slider>
            </Box>
            <Stack color="#233862" direction='column' align='flex-start' justify='space-around' w={{base:'80%',md:'40%'}} mb='5'>
                <Text fontSize={{base:'4xl',md:'5xl'}} fontWeight='800' >{data.name}</Text>
                <Text fontSize='3xl' fontWeight='bold' >₹{data.price}</Text>
                <Text fontSize='lg' fontWeight='semibold'> Description</Text>
                <Text className='description' mb='10'>{data.description}</Text>
                <Button onClick={onOpen} rounded='full' boxShadow='2xl' bg='#E63946' color='white' _hover={{bg:'green.700', boxShadow:'3xl'}}>How to Order</Button>
            </Stack>
            <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton/>
                    <Howwedo/>
                </ModalContent>
            </Modal>
        </Flex> )
    )
}
