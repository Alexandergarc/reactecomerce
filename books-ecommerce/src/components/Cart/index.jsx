import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const Cart = () => {

    const {cart, totalPrice} = useCartContext();

    const order ={
        buyer:{
            name:'Alexander',
            email: 'aegm146@gmail.com',
            phone:'0123456789',
            address:'Medellin, Colombia'
        },
        items:cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total:totalPrice(),
        }

    const handleClick = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id})=> console.log(id))
    }
    
    if (cart.length === 0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <Link to='/'>Hacer compras</Link>
            </>
        )
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                total:{totalPrice()}
            </p>
            <button onClick={handleClick}>Comprar</button>
        </>
    )
}

export default Cart;