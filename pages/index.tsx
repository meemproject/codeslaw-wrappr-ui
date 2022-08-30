import type { NextPage } from 'next'
import Layout from '../src/layout'
import Minter from '../src/mint'

const Home: NextPage = () => {
  return (
    <Layout heading="Home" content="Wrap anything" back={false}>
      <Minter />
    </Layout>
  )
}

export default Home
