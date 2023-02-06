import React from 'react'
import data from "../Cards/data.json"
import { Filter } from "../Filter/Filter"

export const Hoods = () => {
    const { hoods } = data

    return (
        <>
            <h2>Hoods</h2>
            <Filter props={hoods} />
        </>
    )

}