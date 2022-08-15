import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


let client = require('contentful').createClient,
space: process.env.NEXT_CONTENTFUL_SPACE_ID,
accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <h1>Hello world</h1>
      </main>

   
    </div>
  )
}
