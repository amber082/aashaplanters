import {
    Box,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Search2Icon, EmailIcon, ChatIcon } from '@chakra-ui/icons';
  import { GrDeliver } from 'react-icons/gr'
  
  export default function Howcomp() {
    return (
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          m='6' data-aos-delay='2000'>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={"#FFE8D6"}
              p={2}
              px={3}
              color={"#233862"}
              rounded={'full'}>
              Step.1
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'} color={"#233862"}>
              <Text fontSize={'2xl'}><GrDeliver/></Text>
              <Text fontSize={'3xl'} fontWeight={800}>
                Search
              </Text>
            </Stack>
          </Stack>
  
          <Box bg={"#FFE8D6"} px={6} py={10} textAlign='center'>
            <Text>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            </Text>
  
            <Button
              mt={10}
              w={'full'}
              bg={'#E63946'}
              color={'white'}
              rounded={'full'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.700',
              }}
              _focus={{
                bg: 'green.700',
              }}>
              Start your trial
            </Button>
          </Box>
        </Box>
    );
  }