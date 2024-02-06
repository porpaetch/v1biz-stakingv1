import { NextPage } from "next";
import { Box, Center, Container, Flex, Heading, SimpleGrid, VStack, Wrap } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";


const Home: NextPage = () => {
  const address = useAddress();

  if (!address) {
    return (
    <Container maxW={"900px"} >
      <Flex h={"200px"} justifyContent={"center"} alignItems={"center"}>
     
     </Flex> 
     <Center>
     <Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
       bgClip='text'
       fontSize='4xl'
       fontWeight='600'
         >                
         Welcome to staking and earn
     </Heading>
     </Center>
     <Box bg= ''  w='100%' p={3} color='black' fontSize='2xl'>
  <Center>
    <text fontSize='lg'>
    Pleas Connect your wallet
    </text>
  </Center>
     </Box>
      </Container>
      
    )
  }
  //ดึงข้อมูลโทเคนและรีวอท
  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={2} spacing={4}>
      <StakeToken />
      <RewardToken />
      </SimpleGrid>
      <Stake />
    </Container>
  );
  
};

export default Home;