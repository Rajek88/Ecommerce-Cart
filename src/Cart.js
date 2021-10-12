import React from 'react'
import CartItem from './CartItem'

export default class Cart extends React.Component {
    constructor(){
        //whenever u use constructor for a class that extends React.Component, you need to call super() at very first moment 
        //it is constructor for the method from which current class is extended
        super();
        this.state = {
            products : [
                {
                    price : 25999,
                    title : 'Samsung M52 5G',
                    qty : 1,
                    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYzbEXLNrRpw0qf3HjHT8MuuGpei9Fz8pYw&usqp=CAU',
                    id :1
                },
                {
                    price : 78999,
                    title : 'Lenovo Legion 5',
                    qty : 1,
                    img : 'https://media.croma.com/image/upload/v1623994146/Croma%20Assets/Computers%20Peripherals/Laptop/Images/235451_qy3dvi.png',
                    id :2
                },
                {
                    price : 9999,
                    title : 'Sonata Classic Watch',
                    qty : 1,
                    img : 'https://staticimg.titan.co.in/Sonata/Catalog/87029NL06_1.jpg',
                    id : 3
                },
                {
                    price : 5199,
                    title : 'Samsung 250GB NVME M2 SSD',
                    qty : 1,
                    img : 'https://deltapage.com/image/cache/catalog/New_images/Samsung/samsung-980-pro-500gb_2-550x550h.jpg',
                    id : 4
                },
            ]
        }

    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                { products.map((product) => {
                    return <CartItem product={product} key={product.id}/>
                })}
            </div>
        )
    }
}
