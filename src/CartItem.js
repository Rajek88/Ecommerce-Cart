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

    Increase = () => {
        console.log('this.state :: ',this.state);
        this.setState((prevState) => {
            return {
                qty : prevState.qty + 1,
                price : (prevState.qty + 1)*9999,
            }
        })
    }

    Decrease = () => {
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        console.log('this.state :: ',this.state);
        this.setState((prevState) => {
            return {
                qty : prevState.qty - 1,
                price : (prevState.qty - 1)*9999,
            }
        })
    }

    render(){
        const { price, title, qty, img} = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} style={styles.img} alt={title}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize:25}}>{title}</div>
                    <div style={{ color:'#777'}}>Rs {price}</div>
                    <div style={{ color:'#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" className="action-icons" alt="increase" onClick={this.Increase}/>
                        <img src="https://cdn-icons-png.flaticon.com/128/992/992683.png" className="action-icons" alt="decrease" onClick={this.Decrease} />
                        <img src="https://cdn-icons-png.flaticon.com/128/1617/1617543.png" className="action-icons" alt="delete" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;