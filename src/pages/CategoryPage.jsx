import React from "react"
import {useLocation, useParams } from "react-router-dom"
import { Transition } from "@headlessui/react"

import CategoriesFile from "../assets/mocks/categories.json"
import SubcategoryCard from "../components/category/SubcategoryCard"


const CategoryPage = () => {
    const location = useLocation()
    const { categorySlug } = useParams()
    
    const [category, setCategory] = React.useState({})

    const getCategory = React.useCallback(() => {
        const categories = CategoriesFile.filter(
          cat => cat.slug === categorySlug
        )
        setCategory(categories[0])
    }, [setCategory, categorySlug])

    React.useEffect(() => {
        setTimeout(() => {
            getCategory()
        }, 1000)
    }, [getCategory])

    return (
        <>
        <Transition
                as="div"
                appear={true} //THIS will make the transition run everytime the component is rendered
                show={true}
                enter="transition-all duration-300"
                enterFrom="transform translate-x-full"
                enterTo="transform translate-x-0"
                leave="transition-all duration-300"
                leaveFrom="transform translate-x-0"
                leaveTo="transform translate-x-full"
                afterLeave={() => location.push('/')}
            >
              { Object.keys(category).length !== 0 && (
                <div className="flex flex-col justify-center text-center">
                  <div className="absolute text-5xl text-indigo-400 top-0 m-2 md:m-5 p-2 md:p-5">
                    X
                  </div>
                  <img src={require(`../assets${category.image}`)} alt="category" className="w-full md:h-96" />
                  <div className="py-5 md:py-10 font-bold text-2xl md:text-5xl">
                    {category.name}
                  </div>
                  <div>
                    <button>alergenos</button>
                  </div>
                  <div className="grid-cols-1">
                    {category.subcategories.map((subCat, key) => {
                        return <SubcategoryCard subcategory={subCat} key={key} />
                    })}
                  </div>
                </div>
              )}
            </Transition>
        </>
    )
}

export default CategoryPage
