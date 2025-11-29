import { notFound } from 'next/navigation';
import { productCatalog, getProductBySlug, type ProductSlug } from '@/lib/products';
import LifecycleView from './LifecycleView';

type PageProps = {
  params: Promise<{
    product: ProductSlug;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return productCatalog.map((product) => ({ product: product.slug }));
}

export default async function LifecyclePage({ params }: PageProps) {
  const { product: productSlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product) {
    notFound();
  }

  return <LifecycleView product={product} />;
}

