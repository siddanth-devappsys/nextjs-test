import Link from 'next/link'


function ProductList() {
  return (
    <>
        <Link href="/product/1">
        <p>Product 1</p>
        </Link>
        <Link href="/product/2">
        <p>Product 2</p>
        </Link>
        <Link href="/product/3">
        <p>Product 3</p>
        </Link>
    </>
  )
}

export default ProductList