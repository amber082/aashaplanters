import React, {useState, useEffect} from 'react'
import Image1 from '../../assets/plant_test.jpg'
import Image2 from '../../assets/plant_test2.jpg'
import Image3 from '../../assets/plant_test3.jpg'
import Product from '../Product'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Flex, Stack, Text, Box } from '@chakra-ui/layout';
import Explore from './Explore'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Ourproducts() {
    const [data, setData] = useState({ hits: [] });
    const [isLoading, setIsLoading] = useState(true);

    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        arrows:true,
        easing:true,
        accessibility:true,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                className: "center",
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows:false,
                easing:true,
                accessibility:true,
                autoplay:true,
                autoplaySpeed:3000,
              }
            }]
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/landproducts');
            setData(result.data);
            setIsLoading(false);
        };
        fetchData();
    },[])

    return (
        <Box>
            <Flex direction='row' align='center' justify='center' m='5' data-aos='fade-down'>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='800' color="#233862">
                    Our Products
                </Text>
            </Flex>
            {isLoading ? (
            <Stack mb='5' data-aos='fade-up'>
                <Slider {...settings} >
                    <Product IMAGE={Image1}/>
                    <Product IMAGE={Image2}/>
                    <Product IMAGE={Image3}/>
                    <Product IMAGE={Image1}/>
                    <Product IMAGE={Image2}/>
                    <Product IMAGE={Image3}/>
                    <Product IMAGE={Image1}/>
                    <Product IMAGE={Image2}/>
                    <Product IMAGE={Image3}/>
                </Slider>
            </Stack>) : (
                <Stack mb='5' data-aos='fade-up'>
                    <Slider {...settings} >
                        {data.map(item => (
                            <Link to={'/detail/'+ item.id} ><Product IMAGE={item.image} name={item.name} price={item.price} key={item.id}/></Link>
                        ))}
                    </Slider>
                </Stack>
            )}
            <Flex direction='row' align='center' justify='center' m='8'>
                <Explore/>
            </Flex>
        </Box>
    )
}
