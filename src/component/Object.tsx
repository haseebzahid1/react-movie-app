import React, { useState } from 'react'

const Object = () => {
    const [drink, setDrink] = useState({
        title:"Pakistan",
        price:5,
        toggle:['haseeb'],
        addres: {
            city: "Islamabad",
            zipCode: '0000',
        },
        items:[
            {id:1, title:'Bug 1',quantity:1},
            {id:2, title:'Bug 2',quantity:1}
        ]
    })
    const handleClick = () =>{
        // const newDrink = {
        //     // title: drink.title = "Faisalabad",
        //     title: "Faisalabad",
        //     price: 6
        // }

        setDrink({...drink, price:6,items:drink.items.map(item => item.quantity === 1 ? {...item,quantity:item.quantity + 1 } : item )})
    }
  return (
    <div>
        <h1><span>{drink.price}</span>{}</h1>
        <h1>{drink.items[0].quantity}</h1>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Object