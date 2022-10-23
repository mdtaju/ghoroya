import Head from 'next/head'
import CounterSection from '../component/CounterSection'
import FoodOrder from '../component/FoodOrder'
import HowItWork from '../component/HowItWork'
import Layout from '../component/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ghoroya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HowItWork />
        <FoodOrder />
        <CounterSection />
      </Layout>
    </>
  )
}
