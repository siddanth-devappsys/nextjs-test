import {useRouter} from 'next/router'


function ProductDetails() {
    const router = useRouter()
    const productId = router.query.productId
    
  return (
    <p>Product Details of {productId}</p>
  )
}

export default ProductDetails