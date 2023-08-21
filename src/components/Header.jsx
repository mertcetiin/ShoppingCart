import React from 'react'
import { useState } from 'react'
import '../App.css'

function Header({ count }) {

    const [basket, setBasket] = useState([]);



    return (
        <div>
            <input />
            <button>{count}</button>
        </div>
    )
}

export default Header