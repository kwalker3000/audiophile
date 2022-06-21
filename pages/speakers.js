
import { useEffect } from 'react';
import { useAppContext } from '../src/context/appContext';
import Head from 'next/head';
import styles from '../styles/modules/Category.module.css';

import { MongoClient } from 'mongodb';
import { Headline } from '../src/components/Headline';
import { ProductQkView } from '../src/components/ProductQkView';
import { Header } from '../src/components/Header';
import { Menu } from '../src/components/Menu';
import { About } from '../src/components/About';
import { Footer } from '../src/components/Footer';

import { Overlay } from '../src/components/Overlay';

export default function Speakers({data}) {
    const { addProducts } = useAppContext();

    data = data.sort((a, b) => b.new - a.new)

    useEffect(() => {
        addProducts(data);
    }, [])

    return (
        <div className={styles.page}>

	<Head>
	    <title>Speakers | Audiophile</title>
	  <meta
            name="description"
            content="Generated by create next app" />
	    <link rel="icon" href="/favicon.ico" />
	</Head>
          <header className={styles.pageHeader}>
            <Header />
          </header>
          <main className={`${styles.pageMain} ${styles.main}`}>
            <section className={styles.mainHeadline}>
              <Headline title="speakers"/>
            </section>
              <Overlay />
	    <section
              className={`${styles.ProductQkView} ${styles.mainQkView}`}>
		<ProductQkView data={data}/>
	    </section>
            <section className={styles.mainMenu}>
              <Menu />
            </section>
            <section className={styles.mainAbout}>
              <About/>
            </section>
	  </main>
          <footer className={styles.pageFooter}>
            <Footer />
          </footer>
	</div>
    )
} 

export const getServerSideProps = async () => {

  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db('audiophile');

  const yourCollection = db.collection('product');

    let cursor = await yourCollection.find({category: "speakers"});
    let data = []

    await cursor.forEach(entry => {
        entry._id = entry._id.toString();
        data.push(entry)
    })

    cursor.close()

  return {
      props: {
          data
      }
  };
}