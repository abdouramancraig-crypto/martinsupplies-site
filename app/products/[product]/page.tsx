import { notFound } from 'next/navigation';
import { productCatalog, getProductBySlug, type ProductSlug } from '@/lib/products';
import ProductBrochureView from './ProductBrochureView';

type PageProps = {
  params: Promise<{
    product: ProductSlug;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return productCatalog.map((product) => ({ product: product.slug }));
}

export default async function ProductBrochurePage({ params }: PageProps) {
  const { product: productSlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product) {
    notFound();
  }

  return <ProductBrochureView product={product} />;
}

