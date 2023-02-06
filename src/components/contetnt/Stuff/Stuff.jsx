import React from 'react'
import data from "../Cards/data.json"
import { Filter } from "../Filter/Filter"

export const Stuff = () => {
    const { stuff } = data

    return (
        <>
            <h2>Stuff</h2>
            <Filter props={stuff} />
        </>
    )
}