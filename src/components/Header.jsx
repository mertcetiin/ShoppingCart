import React, { useState } from 'react';
import '../App.css';

function Header({ products, totalItemCount, handleFilter }) {
    const [visible, setVisible] = useState(true);

    const onVisible = () => {
        setVisible((prevVisible) => !prevVisible);
    };

    return (
        <div>
            <input type='text' onChange={handleFilter} />
            <button className='basketDiv' onClick={onVisible}>
                {visible ? (
                    <span>Sepetteki ürün sayısı: {totalItemCount}</span>
                ) : (
                    <div className='counterDiv'>
                        <h2>Sepetteki ürün sayısı: {totalItemCount}</h2>
                        {products.map((item) => (
                            <div key={item.id}>
                                <h3>{item.name} x {item.count || 0}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </button>
        </div>
    );
}

export default Header;
