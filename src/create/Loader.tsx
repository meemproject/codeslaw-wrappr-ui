import Image from 'next/image'
import { Stack, Text } from '@kalidao/reality'

export default function Loader({ message }: { message: string }) {
  return (
    <Stack>
      {message != '' && <Text>{message}</Text>}
      <Image alt="Loading" src={'/loading.png'} height={150} width={150} unoptimized />
    </Stack>
  )
}
