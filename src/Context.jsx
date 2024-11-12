import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import { toast } from "react-toastify";
export const CartContext = createContext()
// to avoid reloading and adding a local storage
const getitem = JSON.parse (localStorage.getItem("cart")) || [];
//store cart in local storage
const CartProvider = ({children}) => {
    const [cart, setCart] = useState (getitem)
    // store cart in localStorage
    useEffect (() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    //add to cart
    const addToCart = (item) => {
        setCart ([...cart, {...item, quantity: 1}])
        toast.success("Product Added to Cart")
    };
    // increase quantity
    const handleIncrease = (item) => {
        const updatedCart = cart.map ((cartItem) => cartItem.id === item.id ? {...cartItem, quantity : cartItem.quantity + 1} : cartItem)
    setCart(updatedCart)};
    // decrease quantity
    const handleDecrease = (item) => {
        const updatedCart = cart.map ((cartItem) => cartItem.id === item.id ? {...cartItem, quantity : cartItem.quantity - 1} : cartItem)
    setCart(updatedCart)};
    // remove item 
 const removeItemCart = ((item) => {
    const remainingItems = cart.filter ((cartItem) => cartItem.id !== item.id);
    setCart(remainingItems);
    toast.success("Product has been removed")
 })
    //.clac total price 
    const totalPrice = cart.reduce ((total, cartItem)=> {
        return total + cartItem.price * cartItem.quantity;
    }, 0)
    //modal 
    const [showModal, setShowModal] = useState(false)
    const confirmOrder = () => {
        setShowModal(true);
    }
    const startNewOrder = () => {
        setCart ([]);
        setShowModal (false);
    }
    return <CartContext.Provider value={{cart, addToCart, totalPrice, removeItemCart, handleIncrease, handleDecrease, showModal, setShowModal, confirmOrder, startNewOrder}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;