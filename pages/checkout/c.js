import Head from 'next/head';
//import styles from '../styles/modules/Product.module.css';
import { ShippingForm } from '../../src/components/Checkout/ShippingForm';
import { Checkout } from '../../src/components/Checkout/Checkout'

export default function Mock() {
  return (
    <div className={""}>
      <Head>
        <title>Home | Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
      </main>
      <section>
	<Checkout />
      </section>
    </div>
  )
}
