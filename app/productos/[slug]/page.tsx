import Header from '@/components/Header'
import ProductDetail from '@/components/ProductDetail'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'

const validSlugs = ['lingotes', 'barras', 'recuperacion']

const slugToProductId: Record<string, 'ingots' | 'bars' | 'recovery'> = {
  'lingotes': 'ingots',
  'barras': 'bars',
  'recuperacion': 'recovery',
}

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug: slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const productId = slugToProductId[slug]

  if (!productId || !validSlugs.includes(slug)) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ProductDetail productId={productId} />
      <Footer />
    </main>
  )
}
