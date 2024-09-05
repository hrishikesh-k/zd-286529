import Link from 'next/link'

export default function() {
  const id = Math.floor(Math.random() * 100000)
  return <Link href={`/products/${id}`}>Go to product #{id}</Link>
}