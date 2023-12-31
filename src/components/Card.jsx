import React from 'react'

function Card({ products, handleCounter }) {
    return (
        <div className='cardMap'>
            {products.map((item) => (
                <div key={item.id}>
                    <img src={item.img} />
                    <h1>{item.name}</h1>
                    <h4>{item.price}$</h4>
                    <button onClick={() => handleCounter(item.id)}>Add</button>
                </div>
            ))}
        </div>
    )
}

export default Card;