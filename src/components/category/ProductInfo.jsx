import React from "react"


const ProductInfo = ({product}) => {
    return (
        <>
            <div className="flex justify-between items-center border py-2">
                <div className="flex flex-col items-start min-h-36 w-3/4 px-2 py-5">
                    <div className="text-left font-bold text-sm">{product.name}</div>
                    <div className="text-left text-sm font-light">{product.description}</div>
                    <div>{product.allergens.map((al, key) => <div key={key}>{al.name}</div>)}</div>
                    <div className="font-bold text-lg italic text-zinc-400">{product.price} €</div>
                </div>
                <div className="w-26 px-2">
                    <img 
                        className="h-24 w-24 rounded-full"
                        src={require(`../../assets${product.image}`)} alt="product" 
                    />
                </div>
            </div>
        </>
    )
}

export default ProductInfo
