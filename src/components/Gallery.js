import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import {Link, useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Product from './Product'
import axios from 'axios'

export default function Gallery() {
    let {cat,sub} = useParams();
    const [data, setData] = useState({ hits: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(process.env.REACT_APP_PROXY+'/api/products',{
                params: {
                    cat: cat,
                    sub: sub
                }
            });
            setData(result.data);
            setIsLoading(false);
        };
        fetchData();
    },[cat,sub])

    return (
        <Box>
            <Text fontSize='5xl' fontWeight='bold' color='#233862' align='center' mt='5'>Our Products</Text>
            {isLoading ? (<Text mb='100%'>Loading ...</Text>) : (
            <SimpleGrid columns={{base:'1',md:'3',lg:'4'}} spacing='10' m='10'>
                {data.map(item => (
                    <Link to={'/detail/'+ item.id} key={item.id}><Product IMAGE={item.image} name={item.name} price={item.price} key={item.id}/></Link>
                ))}
            </SimpleGrid> )}
        </Box>
    )
}
