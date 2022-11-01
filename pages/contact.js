import Head from 'next/head';
import Layout from '../component/Layout';
import SliderContact from '../component/SliderContact';

export default function Contact() {
     
  return (
    <>
      <Head>
        <title>Ghoroya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <SliderContact />
        {/* <HowItWork /> */}
        {/* <CounterSection /> */}
      </Layout>
    </>
  )
}
