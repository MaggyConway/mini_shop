import ProductsList from '../../components/Shop/ProductsList'
import BluePanel from '../../components/Shop/BluePanel'
import { useStoreon } from 'storeon/react'

const Products = ({pageType}) => {
    const { products } = useStoreon('products')
    return (
        <>
            <BluePanel />
            <ProductsList items={products} pageType={pageType} />
        </>
    )
}

export default Products