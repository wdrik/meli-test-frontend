import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Header from '../../components/Header';
import ProductDetail from '../../components/ProductDetail';
import { Item } from '../../contexts/appContext';
import { api } from '../../services/api';

export interface ProductDetailItem {
  item: Item;
}

function Items(item: ProductDetailItem) {
  return (
    <div>
      <Head>
        <title>Items</title>
      </Head>

      <main>
        <Header />

        <ProductDetail {...item} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await api.get(`items/${id}`);

  return {
    props: {
      item: response.data.item,
    },
  };
};

export default Items;
