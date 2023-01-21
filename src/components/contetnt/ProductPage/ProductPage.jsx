import { useParams } from "react-router-dom"
import data from "../Cards/data.json"
import { ProductContent } from "./ProductContent"


export const ProductPage = () => {
const items = []
    let params = useParams()
    let { shirts, ticket, hoods, stuff, girls, music } = data

    const Page = () => {
        if (params.name === "shirts") {
          let product = shirts.find(i => i.id === params.id)
            return <ProductContent items={items} product={product}/>
       }

       if (params.name === "ticket") {
        let product = ticket.find(i => i.id === params.id)
        return <ProductContent items={items} product={product}/>
       }
       if (params.name === "hoods") {
        let product = hoods.find(i => i.id === params.id)
        return <ProductContent items={items} product={product}/>
       }
       if (params.name === "stuff") {
        let product = stuff.find(i => i.id === params.id)
        return <ProductContent items={items} product={product}/>
       }
       if (params.name === "girls") {
        let product = girls.find(i => i.id === params.id)
        return <ProductContent items={items} product={product}/>
       }
       if (params.name === "music") {
        let product = music.find(i => i.id === params.id)
        return <ProductContent items={items} product={product}/>
       }

       else {return <h1>Page not found</h1>}
    }
    return <Page />
}