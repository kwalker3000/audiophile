
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
//import { useAppContext } from '../src/context/appContext';

import styles from '../../styles/modules/Product.module.css';

import { MongoClient } from 'mongodb';
import { Header } from '../../src/components/Header';
import { NavBack } from '../../src/components/NavBack';
import { ProductOvView } from '../../src/components/Product/ProductOvView';
import { ProductContent } from '../../src/components/Product/ProductContent';
import { ProductGallery } from '../../src/components/Product/ProductGallery';
import { Recommend } from '../../src/components/Recommend';
import { Menu } from '../../src/components/Menu';
import { About } from '../../src/components/About';
import { Footer } from '../../src/components/Footer';

import { Overlay } from '../../src/components/Overlay';



export default function Product({data}) {

    const router = useRouter()
    const {category, slug} = router.query
    let product = data.find(product => product.slug == slug)

    return (
        <div className={styles.page}>
	<Head>
	    <title>Headphones | Audiophile</title>
	  <meta
            name="description"
            content="Generated by create next app" />
	    <link rel="icon" href="/favicon.ico" />
	</Head>

          <header className={styles.pageHeader}>
            <Header />
          </header>

          <main className={`${styles.pageMain} ${styles.main}`}>
            <Overlay/>
            <section className={styles.mainNavBack}>
              <NavBack />
            </section>

            <section className={styles.mainProdOvView}>
              <ProductOvView product={product}/>
            </section>
            <section className={styles.mainProdContent}>
              <ProductContent
                features={product.features}
                includes={product.includes}/>
            </section>
            <section className={styles.mainProdGallery}>
              <ProductGallery gallery={product.gallery}/>
            </section>

            <section className={styles.mainRecommend}>
              <Recommend recommend={product.others}/>
            </section>
            <section className={styles.mainMenu}>
              <Menu />
            </section>
            <section className={styles.mainAbout}>
              <About />
            </section>
          </main>

          <footer className={styles.pageFooter}>
            <Footer />
          </footer>

        </div>

    )
}

export const getServerSideProps = async () => {

    // const router = useRouter()
    // const obj = router.query
    // console.log('inside serverProps', obj)


  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db('audiophile');

  const yourCollection = db.collection('product');

    let cursor = await yourCollection.find();
    //data._id = data._id.toString();
    let data = []

    await cursor.forEach(entry => {
        entry._id = entry._id.toString();
        data.push(entry)
    })

    //await cursor.forEach(entry => console.log(entry))
    cursor.close()
    //console.log('my data')
    //console.log(data)

  return {
      props: {
          data
      }
  };
}
