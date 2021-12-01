import React from 'react'
import './Grid.css'

export default function GridSquare({color}) {
    const classes = `grid-square color-${color}`

    return <div className={classes} />

}