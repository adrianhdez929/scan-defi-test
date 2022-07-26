import React from "react"

import ProductFile from "../../assets/mocks/products.json"
import ProductInfo from "./ProductInfo"


const SubcategoryCard = ({subcategory}) => {
    const subcatImg = require(`../../assets${subcategory.image}`)

    const [showText, setShowText] = React.useState(false)
    const [products, setProducts] = React.useState([])

    const getProducts = React.useCallback(() => {
        setProducts(ProductFile.filter(product => product.subcategory_id === subcategory.id))
    }, [setProducts, subcategory.id])

    React.useEffect(() => {
        setTimeout(() => {
            getProducts()
        }, 1000)
    }, [getProducts])

    return (
        <>
            <button 
                className="flex items-center justify-center bg-cover 
                h-48 w-full md:w-1/4 my-3 md:mx-3 p-3"
                style={{backgroundImage: `url(${subcatImg})`}}
                onClick={() => setShowText((prev) => !prev)}
            >
                <span className="text-white text-2xl font-bold text-decoration drop-shadow-lg">
                    {subcategory.name}
                </span>
            </button>
            {showText && (
                <div>
                    {products.map((product, key) => {
                        return (<ProductInfo product={product} key={key} />)
                    })}
                </div>
            )}
        </>
    )
}

export default SubcategoryCard
