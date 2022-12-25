import { useParams } from "react-router-dom"
import data from "../Cards/data.json"
import { ProductPage } from "../ProductPage/ProductPage"

export const ShirtPage = () => {

    let params = useParams()
    
    let { shirts } = data
    let product = shirts.find(i => i.id === params.id)


    return  <ProductPage product = {product}/>
}