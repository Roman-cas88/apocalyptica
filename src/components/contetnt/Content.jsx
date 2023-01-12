import { Container } from "react-bootstrap/"
import { Routes, Route } from "react-router-dom"
import { Girls } from "./Girls/Girls"
import { Home } from "./Home/Home"
import { Hoods } from "./Hoods/Hoods"
import { Music } from "./Music/Music"
import { Shirts } from "./Shirts/Shirts"
import { Stuff } from "./Stuff/Stuff"
import { Tickets } from "./Tickets/Tickets"
import { ProductPage } from "./ProductPage/ProductPage"
import { Account } from "./Account/Account"
import { Privacy } from "./Privacy/Privacy"
import { WishList } from "./Account/WishList"
import { ContentImage } from "./ContentImage"
import { BuyPage } from "./BuyPage/BuyPage"

export const Content = () => {
    return (
        <>
        <ContentImage />
        <Container >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/shirts" element={<Shirts />} />
                <Route path="/girls" element={<Girls />} />
                <Route path="/hoods" element={<Hoods />} />
                <Route path="/music" element={<Music />} />
                <Route path="/stuff" element={<Stuff />} />
                <Route path="/:name/product-page/:id" element={<ProductPage />} />
                <Route path="/account" element={<Account />} />
                <Route path="/privacy" element={<Privacy />} />     
                <Route path="/wishlist" element={<WishList />} /> 
                <Route path="/buy-page" element={<BuyPage />} />   
            </Routes>
        </Container>
        </>
    )
}