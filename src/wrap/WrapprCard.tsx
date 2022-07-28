import { Flex, Text, Button, Spinner } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

const fetchWrapprData = async (URI: string) => {
  const res = await fetch(URI)
  return res.json()
}

export default function WrapprCard({ wrappr }) {
  const router = useRouter()
  const { isLoading, error, data } = useQuery(['wrappr', wrappr['baseURI']], () => fetchWrapprData(wrappr['baseURI']))
  console.log('wrappr card', wrappr, data, error)

  return (
    <Flex
      direction="column"
      border="1px solid"
      borderColor={'gray.300'}
      padding={0}
      borderBottomRadius="lg"
      justifyContent={'space-between'}
    >
      {isLoading ? <Spinner /> : <Image src={data['image']} height="300px" width="250px" />}
      <Flex direction="column" padding={2} minHeight={'6rem'}>
        <Text fontWeight="700">{wrappr['name']}</Text>
        <Text fontWeight="500" noOfLines={2}>
          {isLoading ? 'Loading...' : data['description']}
        </Text>
      </Flex>
      <Button
        variant="outline"
        onClick={() => router.push(`/wrappr/4/${wrappr['id']}`)}
        borderTopRadius={0}
        background="gray.300"
        width={'100%'}
      >
        Expand
      </Button>
    </Flex>
  )
}
