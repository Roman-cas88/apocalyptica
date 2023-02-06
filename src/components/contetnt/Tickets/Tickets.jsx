import React from 'react'
import data from "../Cards/data.json"
import { Filter } from "../Filter/Filter"

export const Tickets = () => {
    const { ticket } = data

    return (
        <>
            <h2>Tickets</h2>
            <Filter props={ticket} />
        </>
    )
}