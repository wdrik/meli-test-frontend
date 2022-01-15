import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Header from '../../components/Header';
import ProductDetail, {
  ProductDetailProps,
} from '../../components/ProductDetail';

function Items({ product }: ProductDetailProps) {
  return (
    <div>
      <Head>
        <title>Items</title>
      </Head>

      <main>
        <Header />

        <ProductDetail product={product} />
      </main>
    </div>
  );
}

// SSR - Server Side Rendering
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  console.log(id);

  return {
    props: {
      product: {
        id,
        description: 'Testeee',
        price: 1000,
      },
    },
  };
};

export default Items;
