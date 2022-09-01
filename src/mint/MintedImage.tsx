import Image from 'next/image'
import { useContractRead, useNetwork } from 'wagmi'
import { WRAPPR, deployments } from '../constants'
import { useQuery } from '@tanstack/react-query'
import { ethers } from 'ethers'
import { Skeleton } from '@chakra-ui/react'

const fetchWrapprData = async (URI: string | undefined) => {
  if (URI) {
    const res = await fetch(URI)
    return res.json()
  }
}

export default function MintedImage({ entity, tokenId }: { entity: string; tokenId: number }) {
  const { chain } = useNetwork()
  const {
    data: uri,
    isLoading: isLoadingURI,
    isSuccess,
    error,
  } = useContractRead({
    addressOrName: chain ? deployments[chain.id][entity] : ethers.constants.AddressZero,
    contractInterface: WRAPPR,
    functionName: 'uri',
    args: [tokenId],
  })
  const { isLoading, error: reactError, data } = useQuery(['wrappr', uri], () => fetchWrapprData(String(uri)))

  if (isLoadingURI && isLoading) return <>Fetching</>

  return (
    <Skeleton isLoaded={!isLoadingURI && !isLoading}>
      <Image height="300px" width="300px" layout="responsive" src={data?.image} alt="Minted NFT image" />
    </Skeleton>
  )
}