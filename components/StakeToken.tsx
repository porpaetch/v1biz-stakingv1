import { Card, Flex, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import {  useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { STAKE_TOKEN_ADDRESSES } from "../constants/addresses";
import { Link } from "@chakra-ui/react";


export default function StakeToken() {
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(STAKE_TOKEN_ADDRESSES);
    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);

    return (
        <Card p={8} bgGradient='linear(to-l, #F56565, #B83280)'>
            <Stack>
                <Heading fontSize='xl' as='abbr' >V1BIZ Token Balance</Heading>

                <Text fontWeight='550' fontSize='sm' as ='samp' >
                TOKEN CONTRACT :
                </Text>
                
                <Text fontWeight='550' fontSize='sm' as ='samp' >
                <Link>0x1ded76F9f81f81De16C17bE38A316De27Bdcb9be</Link>
                </Text>

                <Skeleton h={5} w={"50%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"} >${tokenBalance?.symbol}</Text>
                </Skeleton>
                
                <Skeleton h={4} w={"100%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text fontSize='xl' fontWeight='800' >{tokenBalance?.displayValue} $</Text>
                </Skeleton>
               
            
            </Stack>
        </Card>

    )
}