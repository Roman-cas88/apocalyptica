import { useParams } from "react-router-dom"
import data from "../Cards/data.json"
import { ProductContent } from "./ProductContent"


export const ProductPage = () => {

    let params = useParams()
    let { shirts, ticket } = data

    const Page = () => {
        if (params.name === "shirts") {
          let product = shirts.find(i => i.id === params.id)
            return <ProductContent product={product}/>
       }

       if (params.name === "ticket") {
        let product = ticket.find(i => i.id === params.id)
        return <ProductContent product={product}/>
       }

       else {return <h1>Page not found</h1>
    }
   
    }



    
    return <Page />
    
}