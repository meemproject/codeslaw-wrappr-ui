import { Skeleton, Box, Spinner, Avatar, Text } from '@kalidao/reality'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import * as styles from '~/wrap/styles.css'

type Props = {
	tokenURI: string
	chainId: string
	address: string
	id: string
}

const CollectionCard = ({ tokenURI, chainId, address, id }: Props) => {
	const { isLoading, data } = useQuery(['wrappr', tokenURI], () => fetchCollectionData(tokenURI))

	return (
		<Link href={`/${chainId}/${address}/${id}`} passHref>
			<Box
				className={styles.wrapprCard}
				as="a"
				display="flex"
				flexDirection={'column'}
				justifyContent="center"
				alignItems="center"
				gap="2"
			>
				{isLoading ? (
					<Avatar shape="square" size="52" label={`Image`} placeholder />
				) : (
					<Avatar src={data?.['image']} shape="square" size="52" label={`Image for ${data?.['name']}`} />
				)}
				<Text variant="label">{data ? data?.['name'] : 'Fetching...'}</Text>
			</Box>
		</Link>
	)
}

const fetchCollectionData = async (URI: string) => {
	const res = await fetch(URI)
	return res.json()
}

export default CollectionCard
