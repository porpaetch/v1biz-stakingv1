import { Card, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { REWARD_TOKEN_ADDRESSES} from "../constants/addresses";
import { Link } from "@chakra-ui/react";

export default function RewardToken() {
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(REWARD_TOKEN_ADDRESSES);

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);
    

    return (
        <Card p={5} bgGradient='linear(to-l, #F56565, #B83280)'>
            <Stack>
                <Heading fontSize='xl' as='abbr'>MBIZ Reward Balance </Heading>
                <Text fontWeight='550' fontSize='sm' as ='samp' >
                TOKEN CONTRACT :
                </Text>
                
                <Text fontWeight='550' fontSize='sm' as ='samp' >
                <Link>0xc0961b7658A7DfC79F431CAB5De4d1A4cd1132BB</Link>
                </Text>

                <Skeleton h={5} w={"50%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
                </Skeleton>
                <Skeleton h={8} w={"100%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text fontSize='xl' fontWeight='800'>{tokenBalance?.displayValue} $</Text>
                </Skeleton>
            </Stack>
        </Card>
    )
}