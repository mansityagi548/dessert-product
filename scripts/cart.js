import { moneyConvert , desserts } from "./product.js";


const cartQuantity = document.querySelector(".cartQuantity");
const totalPrice = document.querySelector(".order-total-price");


export const cartItems = JSON.parse(localStorage.getItem("cartDessertItems")) || []; //  here the products you add will be in here .. 

// this fun local storage
export function saveToStorage(){
    localStorage.setItem("cartDessertItems"  , JSON.stringify(cartItems));
}

// this func. for cart total update 
export function updateYourCart(){
    const totalQuan = cartItems.reduce((sum , items)=>{
            return sum + items.quantity;
    } , 0)
    cartQuantity.textContent = `(${totalQuan})`;

    totalPrice.textContent = `$${moneyConvert(calculateGrandTotal())}`;
}



// this func. for  total update 
export function calculateGrandTotal() {
 return cartItems.reduce((sum , items)=>{
       const matching = desserts.find((dessert)=>{
         return dessert.id === items.productId;
       })
    if (!matching) return sum; 
       return sum + matching.price * items.quantity;
  },0)
}

 
