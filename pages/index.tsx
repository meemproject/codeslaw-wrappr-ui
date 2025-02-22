import type { NextPage } from 'next'
import Layout from '~/layout'
import Minter from '~/minter'
import { useAutoConnect } from '~/hooks'

const Home: NextPage = () => {
	useAutoConnect()

	return (
		<Layout heading="Home" content="Wrappable entities">
			<Minter />
		</Layout>
	)
}

export default Home
