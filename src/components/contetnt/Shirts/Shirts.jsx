import React from 'react'
import data from "../Cards/data.json"
import { Filter } from "../Filter/Filter";

export const Shirts = () => {
    const { shirts } = data

    return (
        <>
            <h2>Shirts</h2>
            <Filter props = {shirts}/>
        </>
    )
}
