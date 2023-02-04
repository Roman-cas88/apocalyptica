import { useParams } from "react-router-dom"
import data from "../Cards/data.json"
import { ProductContent } from "./ProductContent"


export const ProductPage = () => {
    let params = useParams()
    let product = data[params.name].find(i => i.id === params.id)

    return <ProductContent product={product}/>
}