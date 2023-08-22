import React from 'react'
import { useState } from 'react'
import '../App.css'

function Header({ products, totalItemCount }) {

    const [visible, setVisible] = useState(true);

    const onVisible = () => {
        setVisible((prevVisible) => !prevVisible)
    }

    return (
        <div>
            <input />
            <button className='basketDiv' onClick={onVisible}>
                {visible ? <span>Sepetteki ürün sayısı: {totalItemCount}</span>
                    :
                    <div className='counterDiv'>
                        <span>Sepetteki ürün sayısı: {totalItemCount}</span>
                        {products.map((item) => (
                            <div key={item.id}>
                                <h1>{item.name} - {item.count || 0}</h1>
                            </div>
                        ))}
                    </div>}
            </button>
        </div>
    )
}

export default Header