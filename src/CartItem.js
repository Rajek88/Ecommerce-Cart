import React from 'react'

const styles = {
    img: {
        height: 110,
        width: 100,
        borderRadius: 5,
        background: '#ccc',
    },
}

const CartItem = (props) => {
    // Destructure the data from props that the component is getting
    const { price, title, qty, img } = props.product
    const { product, onIncreaseQty, onDecreaseQty, onDelete } = props
    console.log('this.props :: ', props)

    return (
        <div className="cart-item">
            <div className="left-block">
                <img src={img} style={styles.img} alt={title} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty : {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    {/* use the function from props and pass the parameters to it to process */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                        className="action-icons"
                        alt="increase"
                        onClick={() => {
                            onIncreaseQty(product)
                        }}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                        className="action-icons"
                        alt="decrease"
                        onClick={() => {
                            onDecreaseQty(product)
                        }}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1617/1617543.png"
                        className="action-icons"
                        alt="delete"
                        onClick={() => {
                            onDelete(product)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CartItem
