import React from 'react'
import { useState } from 'react'
import '../App.css'

function Header({ count, products }) {

    const [basket, setBasket] = useState([]);
    const [visible, setVisible] = useState(true);

    const onVisible = () => {
        setVisible((visible) => (visible ? false : true))
    }

    return (
        <div>
            <input />
            <button className='basketDiv' onClick={onVisible}>
                {visible ? <span>Sepetteki ürün sayısı: {count}</span>
                    :
                    <div className='counterDiv'>
                        <span>Sepetteki ürün sayısı: {count}</span>
                        {products.map((item) => (
                            <div key={item.id}>
                                <h1>{item.name} - {count}</h1>
                            </div>
                        ))}
                    </div>}
            </button>
        </div>
    )
}

export default Header