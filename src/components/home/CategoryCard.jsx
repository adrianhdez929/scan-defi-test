import React from "react"
import { Link } from "react-router-dom"


const CategoryCard = ({category}) => {
    const catImg = require(`../../assets${category.image}`)

    return (
        <>
            <Link 
                to={`/${category.slug}`}
                className="flex items-center justify-center bg-cover rounded-lg 
                    hover:bg-black hover:text-white h-48 w-full md:w-1/4 my-3 md:mx-3 p-3" 
                style={{backgroundImage: `url(${catImg})`}}
            >
                <div className="text-white font-bold text-2xl md:text-4xl">{category.name}</div>
            </Link>
        </>
    )
}

export default CategoryCard
