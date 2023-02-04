import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import { Cards } from "./Card"
import data from "./data.json"
import { MemoryRouter } from 'react-router-dom'

let { shirts } = data;

describe ("test item Cards", () => {
    it("render title of 1st element in shirts data", () => {
        render (
        <MemoryRouter>
            <Cards card={shirts[0]}/>
        </MemoryRouter>
        )
    expect(screen.getByText(/T-Shirt - Mayhem/)).toBeInTheDocument()
    });

    it("'sold out' is not displayed", () => {
        render (
        <MemoryRouter>
            <Cards card={shirts[0]}/>
        </MemoryRouter>
        )
    expect(screen.queryByText("Sold Out")).not.toBeInTheDocument()
});

it("'sold out'rendering", () => {
    render (
    <MemoryRouter>
        <Cards card={shirts[1]}/>
    </MemoryRouter>
    )
expect(screen.queryByText("Sold Out")).toBeInTheDocument()
});

})