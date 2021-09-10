import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/Header';

export default function Home() {
  return(
    <div>
      <Head>
        <title>Kadmus | Início</title>
      </Head>
      <Header/>
    </div>
    )
}
