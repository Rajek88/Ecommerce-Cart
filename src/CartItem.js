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
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.img} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize:25}}>Phone</div>
                    <div style={{ color:'#777'}}>Rs 9999</div>
                    <div style={{ color:'#777'}}>Qty : 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;