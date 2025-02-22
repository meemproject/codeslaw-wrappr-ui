import { useContractRead, useNetwork } from 'wagmi'
import { WRAPPR, deployments } from '~/constants'
import { useQuery } from '@tanstack/react-query'
import { ethers } from 'ethers'
import { Avatar } from '@kalidao/reality'

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
		addressOrName: chain
			? (deployments[Number(chain.id)][entity as keyof (typeof deployments)[1]] as string)
			: ethers.constants.AddressZero,
		contractInterface: WRAPPR,
		functionName: 'uri',
		args: [tokenId],
	})
	const { isLoading, error: reactError, data } = useQuery(['wrappr', uri], () => fetchWrapprData(String(uri)))

	if (isLoadingURI && isLoading) return <>Fetching</>

	return <Avatar src={data?.image} label="Minted NFT image" shape="square" size="96" />
}
