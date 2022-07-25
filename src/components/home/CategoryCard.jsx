import React from "react"


const CategoryCard = ({category, key}) => {
    const catImg = require(`../assets${category.image}`)

    return (
        <div 
            className="flex items-center justify-center bg-cover rounded-lg 
                hover:bg-black hover:text-white h-48 w-full md:w-1/4 my-3 md:mx-3 p-3" 
            style={{backgroundImage: `url(${catImg})`}}
            key={key}
        >
            <div className="text-white font-bold text-2xl md:text-4xl">{category.name}</div>
        </div>
    )
}

export default CategoryCard
