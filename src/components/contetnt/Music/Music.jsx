import React from 'react'
import data from "../Cards/data.json"
import { Filter } from "../Filter/Filter"

export const Music = () => {
    const { music } = data

    return (
        <>
            <h2>Music</h2>
            <Filter props={music} />
        </>
    )
}