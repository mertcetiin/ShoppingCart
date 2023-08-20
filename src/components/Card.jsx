import React from 'react'

function Card({ products }) {
    return (
        <div>
            {products.map((item) => (
                <div key={item.id}>
                    <img src={item.img} />
                    <h1>{item.name}</h1>
                    <h4>{item.price}</h4>
                    <button>Add</button>
                </div>
            ))}
        </div>
    )
}

export default Card;