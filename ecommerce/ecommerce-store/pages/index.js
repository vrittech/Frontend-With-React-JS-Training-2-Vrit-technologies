import FeaturedProducts from "@/components/FeaturedProducts";
import Navbar from "@/components/Navbar";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ products, product }) {
  return (
    <>
      <Navbar />
      {product && <FeaturedProducts product={product} />}
      {products?.length > 0 && <NewProducts products={products} />}
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '646de32cdcef9bdfc6d78a53';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);

  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });

  return {
    props: {
      product: JSON.parse(JSON.stringify(featuredProduct)),
      products: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
