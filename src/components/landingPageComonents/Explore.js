import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@chakra-ui/react'

export default function Explore() {
    return (
        <Link to='/gallery/0/0'>
            <Button px='6'
                        mt='5' 
                        bg='#E63946' 
                        color='white' 
                        rounded='full' 
                        _hover={{bg:'green.700', boxShadow:'3xl'}} 
                        boxShadow='xl'
            >
                EXPLORE NOW
            </Button>
        </Link>
    )
}
