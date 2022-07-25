import React from "react"

import BannerIMG from '../assets/images/banner.jpeg'
import LogoIMG from '../assets/images/icon.svg'

import CompanyFile from '../assets/mocks/company.json'
import CategoriesFile from '../assets/mocks/categories.json'
import CategoryCard from "../components/home/CategoryCard"

const defaultCompanyState = {
    "id": 11,
    "user_id": 19,
    "name": "SCAN DEFI",
    "slug": "scan-defi",
    "logo": "/images/logo.svg",
    "banner": "/images/banner.jpeg",
    "nif": null,
    "phone": null,
    "email": null,
    "description": null,
    "tags": [],
    "address": [],
    "created_at": "2021-05-20T05:59:22.000000Z",
    "updated_at": "2021-05-20T07:52:22.000000Z",
    "deleted_at": null,
    "menu_languages": ["es", "en", "de", "fr"]
}

const HomePage = () => {
    const [company, setCompany] = React.useState(defaultCompanyState)
    const [categories, setCategories] = React.useState([])

    const getCompany = React.useCallback(() => {
        setCompany(CompanyFile)
    }, [setCompany])

    const getCategories = React.useCallback(() => {
        setCategories(CategoriesFile)
    }, [setCategories])

    React.useEffect(() => {
        setTimeout(() => {
            getCompany()
            getCategories()
        }, 1000)
    }, [getCompany, getCategories])

    return (
        <>
            <div className="relative h-48 md:h-64 w-full mb-24 md:mb-40">
                <img src={BannerIMG} alt="banner" className="h-48 md:h-64 w-full" />
                <div className="w-full flex justify-center absolute -bottom-1/3 md:-bottom-1/2">
                    <img src={LogoIMG} alt="logo" className="w-1/3 md:w-1/6" />
                </div>
            </div>
            
            <div className="text-center p-5">
                <div>
                    <h1 className="font-bold text-2xl md:text-5xl">
                        {company === {} ? "company-name": company.name}
                    </h1>
                    <div className="flex justify-center items-center py-5">
                        {categories.map((category, key) => {
                            return (
                                <div className="rounded-lg hover:bg-black hover:text-white px-3" key={key}>
                                    <span className="text-2xl md:text-4xl">{category.name}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center my-3 py-2">
                        {categories.map((category, key) => {
                            return (
                                <CategoryCard category={category} key={key} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
