// import Head from 'next/head'
import CounterSection from '../component/CounterSection'
import FoodOrder from '../component/FoodOrder'
import HomeAppScreen from '../component/HomeAppScreen'
import HowItWork from '../component/HowItWork'
import Layout from '../component/Layout'
import Messenger from '../component/Messenger'
import Slider from '../component/Slider'

export default function Home() {
  return (
    <>
      {/* <Head>
        
      </Head> */}
      <Layout>
        <Slider />
        <HowItWork />
        <HomeAppScreen />
        <FoodOrder />
        <CounterSection />
        <Messenger />
      </Layout>
    </>
  )
}
