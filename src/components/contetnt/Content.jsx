import { Container } from "react-bootstrap/"
import { Routes, Route } from "react-router-dom"
import { Girls } from "./Girls/Girls"
import { Home } from "./Home/Home"
import { Hoods } from "./Hoods/Hoods"
import { Music } from "./Music/Music"
import { Shirts } from "./Shirts/Shirts"
import { Stuff } from "./Stuff/Stuff"
import { Tickets } from "./Tickets/Tickets"

export const Content = () => {
    return (
        <Container className="mt-1">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/shirts" element={<Shirts />} />
                <Route path="/girls" element={<Girls />} />
                <Route path="/hoods" element={<Hoods />} />
                <Route path="/music" element={<Music />} />
                <Route path="/stuff" element={<Stuff />} />
            </Routes>
        </Container>
    )
}