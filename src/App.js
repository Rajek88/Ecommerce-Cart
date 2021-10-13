import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

class App extends React.Component {
    constructor() {
        //whenever u use constructor for a class that extends React.Component, you need to call super() at very first moment
        //it is constructor for the method from which current class is extended
        super()
        this.state = {
            products: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        // let products = []
        // firebase
        //     .firestore()
        //     .collection('products')
        //     .get()
        //     .then((snapshot) => {
        //         snapshot.docs.map((doc) => {
        //             console.log(doc.data())
        //             // products.push(doc.data())
        //         })
        //         const products = snapshot.docs.map((doc) => {
        //             const data = doc.data()
        //             data['id'] = doc.id
        //             return data
        //         })
        //         // console.log('products ', products)

        //         this.setState({
        //             products: products,
        //             isLoading: false,
        //         })
        //     })

        //sync with firebase continuously with onSnapshot function
        firebase
            .firestore()
            .collection('products')
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    console.log(doc.data())
                    // products.push(doc.data())
                })
                const products = snapshot.docs.map((doc) => {
                    const data = doc.data()
                    data['id'] = doc.id
                    return data
                })
                // console.log('products ', products)

                this.setState({
                    products: products,
                    isLoading: false,
                })
            })
    }

    handleIncrease = (product) => {
        console.log('Hey increase product qty : ', product)
        // get the arry of all the products from the state
        const { products } = this.state
        //now find the index of product whose qty we need to increase
        const index = products.indexOf(product)
        // products[index].qty = products[index].qty + 1
        // products[index].price = products[index].qty * products[index].basePrice
        // this.setState({
        //     products: products,
        //     // we can simply put 'products' only as key and value both are same
        // })
        const docRef = firebase
            .firestore()
            .collection('products')
            .doc(products[index].id)
        docRef
            .update({
                qty: products[index].qty + 1,
            })
            .then(() => {
                console.log('Document updated !')
            })
            .catch((err) => {
                console.log('Error :: ', err)
            })
    }

    handleDecrease = (product) => {
        // get the arry of all the products from the state
        const { products } = this.state

        //now find the index of product whose qty we need to increase
        const index = products.indexOf(product)
        //check if the product qty is already zero
        if (products[index].qty === 0) {
            return
        }
        const docRef = firebase
            .firestore()
            .collection('products')
            .doc(products[index].id)
        docRef
            .update({
                qty: products[index].qty - 1,
            })
            .then(() => {
                console.log('Document deleted !')
            })
            .catch((err) => {
                console.log('Error :: ', err)
            })
    }

    handleDelete = (product) => {
        // get the arry of all the products from the state
        const { products } = this.state

        //now find the index of product whose qty we need to delete
        const index = products.indexOf(product)
        //delete the product from array
        // products.splice(index, 1)
        // this.setState({
        //     products: products,
        // })

        const docRef = firebase
            .firestore()
            .collection('products')
            .doc(products[index].id)
        docRef
            .delete()
            .then(() => {
                console.log('Document uploaded !')
            })
            .catch((err) => {
                console.log('Error :: ', err)
            })
    }

    getCartCount = () => {
        const { products } = this.state
        let count = 0
        products.forEach((product) => {
            count = count + product.qty
        })
        return count
    }

    getFinalAmount = () => {
        const { products } = this.state
        let famount = 0
        products.forEach((product) => {
            famount = famount + product.qty * product.price
        })
        return famount
    }

    addProduct = () => {
        firebase
            .firestore()
            .collection('products')
            .add({
                img: '',
                price: 9999,
                qty: 3,
                title: 'Washing machine',
            })
            .then((docRef) => {
                console.log(docRef, ' product has been added.')
            })
            .catch((err) => {
                console.log(err, ' error in adding project.')
            })
    }

    render() {
        const { products, isLoading } = this.state
        return (
            <div className="App">
                {isLoading && <h1>Loading products...</h1>}
                {/* to show the count of items on cart */}
                <Navbar getCount={this.getCartCount()} />
                {/* <button onClick={this.addProduct}>Add a product</button> */}
                <header className="App-header">
                    <h1>Cart</h1>
                    <Cart
                        products={products}
                        onIncreaseQty={this.handleIncrease}
                        onDecreaseQty={this.handleDecrease}
                        onDelete={this.handleDelete}
                    />
                </header>
                <div>
                    <h1>Total : Rs {this.getFinalAmount()}</h1>
                </div>
            </div>
        )
    }
}

export default App
