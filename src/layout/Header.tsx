import { useRouter } from 'next/router'
import { Flex, Button } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import ModeSwitch from '../ModeSwitch'

export default function Header() {
  const router = useRouter()
  return (
    <Flex padding="0 10px" alignItems="center" justifyContent="space-between" minH="10vh">
      <Image src={'/logo.png'} height={60} width={80} />
      <Flex gap="15px">
        {/* <ModeSwitch /> */}
        <Button
          onClick={() => router.push('/create')}
          maxW="fit-content"
          colorScheme={'brand'}
          variant="outline"
          borderRadius={'none'}
        >
          Create
        </Button>
        <ConnectButton />
      </Flex>
    </Flex>
  )
}
