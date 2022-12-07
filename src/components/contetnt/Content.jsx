import { Container } from "react-bootstrap/"
import { Routes, Route } from "react-router-dom"
import { Coffee } from "./Coffee"
import { Girls } from "./Girls"
import { Home } from "./Home"
import { Hoods } from "./Hoods"
import { Music } from "./Music"
import { Shirts } from "./Shirts"
import { Stuff } from "./Stuff"
import { Tickets } from "./Tickets"

export const Content = () => {
    return (
        <Container className="mt-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/shirts" element={<Shirts />} />
                <Route path="/girls" element={<Girls />} />
                <Route path="/hoods" element={<Hoods />} />
                <Route path="/music" element={<Music />} />
                <Route path="/stuff" element={<Stuff />} />
                <Route path="/coffee" element={<Coffee />} />
            </Routes>
        </Container>
    )
}