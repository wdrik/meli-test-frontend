import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ListProducts from '../components/ListProducts';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Header />
        <ListProducts />
      </main>
    </div>
  );
};

export default Home;
