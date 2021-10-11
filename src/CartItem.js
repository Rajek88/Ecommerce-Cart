import React from "react";

const styles = {
    img : {
      height : 110,
      width : 100,
      borderRadius :5,
      background : '#ccc',
    }
}

class CartItem extends React.Component{
    constructor(){
        //whenever u use constructor for a class that extends React.Component, you need to call super() at very first moment 
        //it is constructor for the method from which current class is extended
        super();
        this.state = {
            price : 9999,
            title : 'Phone',
            qty : 1,
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYzbEXLNrRpw0qf3HjHT8MuuGpei9Fz8pYw&usqp=CAU',
        }
    }
    render(){
        const { price, title, qty, img} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} style={styles.img} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize:25}}>{title}</div>
                    <div style={{ color:'#777'}}>Rs {price}</div>
                    <div style={{ color:'#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" className="action-icons" alt="increase" />
                        <img src="https://cdn-icons-png.flaticon.com/128/992/992683.png" className="action-icons" alt="decrease" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1617/1617543.png" className="action-icons" alt="delete" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;