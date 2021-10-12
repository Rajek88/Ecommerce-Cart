import React from 'react'

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20,
    },
    nav: {
        position: 'sticky',
        top: '0%',
        height: 70,
        padding: '0px 10px',
        background: '#40c4ff',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cartIconContainer: {
        position: 'relative',
    },
    cartCount: {
        width: 22,
        height: 22,
        background: 'yellow',
        borderRadius: '500px',
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        top: -9,
    },
}

const Navbar = (props) => {
    // console.log('navbar count ', getCount)
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img
                    style={styles.cartIcon}
                    src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
                    alt="Cart"
                />
                <span style={styles.cartCount}>{props.getCount}</span>
            </div>
        </div>
    )
}

export default Navbar
