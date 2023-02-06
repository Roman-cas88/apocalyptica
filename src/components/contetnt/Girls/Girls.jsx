import React from 'react'
import data from "../Cards/data.json"
import { Filter } from "../Filter/Filter"

export const Girls = () => {
    const { girls } = data

    return (
        <>
            <h2>Girls</h2>
            <Filter props = {girls}/>
        </>
    )

}