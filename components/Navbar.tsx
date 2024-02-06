import { Container, Flex,Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";


export default function Navbar() {
    return (
        <Container maxW={"1200px"} py={6} >
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading  bgGradient='linear(to-l, #718096,#E53E3E, #FF0080,#97266D)'
                            bgClip='text'
                            fontSize='4xl'
                            fontWeight='900' 
                >
                V1BIZ
                <text> Staking </text>
                
                </Heading>
                <ConnectWallet />
            </Flex>
        </Container>
    )
}