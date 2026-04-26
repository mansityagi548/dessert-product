import { cartItems, calculateGrandTotal } from "./cart.js";
import { desserts, moneyConvert } from "./product.js";
const productDisplay = document.querySelector(".items");
export const cart = document.querySelector(".cart-items-container"); // this is the div where cart will go inside
const cartBottom = document.querySelector(".cart-bottom");


// this neeche one was for creating cart ..
export function renderCart() {
  let html = "";


  if (cartItems.length === 0) {
    html  = `
     <div class="empty-cart">
        <div class="item-info"> 
         <img src="assests/illustration-empty-cart.svg" alt="">
         <p>Your added items will appear here</p> 
        </div>
    </div>
    `;
    cartBottom.style.display = "none";
  } else {
    cartBottom.style.display = "block";
    cartItems.forEach((cartItem) => {
      const matchingProduct = desserts.find(
        (dessert) => dessert.id === cartItem.productId,
      ); // this is for getting the product all info through id ..

      if (!matchingProduct) return;

      const fullQuantity = matchingProduct.price * cartItem.quantity;

      html += `
      <div class="cart-item">
        <div class="item-info">
          <p class="item-name">${matchingProduct.name}</p>
          <div class="item-pricing">
            <span class="item-quantity">${cartItem.quantity}x</span>
            <span class="item-unit-price">@ $${moneyConvert(matchingProduct.price)}</span>
            <span class="item-total-price">$${moneyConvert(fullQuantity)}</span>
          </div>
        </div>
        <button class="remove-item-btn" data-id = "${cartItem.productId}">
          <img src="assests/icon-remove-item.svg" alt="">
        </button>
      </div>
    `;
    });
  }

  cart.innerHTML = html;
}

let html = "";
desserts.forEach((dessert) => {
  html += ` <div class="product-card">  
           <div class="product-image-container">
               <img src="${dessert.image.desktop}" alt="${dessert.name}" class="images">
               <div class="cart-control" data-id = "${dessert.id}">
                   <button class="add-to-cart-btn">
                       <img src="assests/icon-add-to-cart.svg" alt="">Add to cart
                   </button>
                   <div class="quantity-selector">
                       <button class="qty-btn" data-type="decrement"><img src="assests/icon-decrement-quantity.svg" alt=""></button>
                       <span class="quantity-num">0</span>
                       <button class="qty-btn" data-type="increment"><img src="assests/icon-increment-quantity.svg" alt=""></button>
                   </div>
               </div>
           </div>
           <p>${dessert.category}</p>
           <h2>${dessert.name}</h2>
           <span>$${moneyConvert(dessert.price)}</span>
       </div>
                   
      `;
});

productDisplay.innerHTML = html;

export function renderOrderConfirm() {
  const orderHtml = document.createElement("div");
  orderHtml.classList.add("modal-overlay");
  orderHtml.id = "order-modal-overlay";

  let html = "";
  cartItems.forEach((item) => {
    let matchingProduct;

    desserts.forEach((dessert) => {
      if (item.productId === dessert.id) {
        matchingProduct = dessert;
      }
    });

    const fullQuantity = matchingProduct.price * item.quantity;

    html += `
            <div class="oc-item">
          <div class="oc-item-left">
            <img src="${matchingProduct.image.thumbnail}" alt="" class="oc-thumbnail">
            <div class="oc-item-details">
              <p class="oc-item-name">${matchingProduct.name}</p>
              <div class="oc-item-meta">
                <span class="oc-item-qty">${item.quantity}</span>
                <span class="oc-item-unit">@ $${moneyConvert(matchingProduct.price)}</span>
              </div>
            </div>
          </div>
          <p class="oc-item-total">$${moneyConvert(fullQuantity)}</p>
        </div>`;
  });

  const grandTotal = `$${moneyConvert(calculateGrandTotal())}`;

  orderHtml.innerHTML = `
   <div class="modal-content">
      <img src="assests/icon-order-confirmed.svg" alt="" class="oc-check-icon">
      <h1 class="oc-title">Order Confirmed</h1>
      <p class="oc-subtitle">We hope you enjoy your food!</p>
      <div class="oc-summary-container">
        <div id="oc-item-list">
          ${html}
        </div>
        <div class="oc-total-row">
          <span>Order Total</span>
          <span class="oc-grand-total">${grandTotal}</span>
        </div>
      </div>
      <button id="start-new-order" class="oc-reset-btn">Start New Order</button>
    </div>
  `;

  document.body.appendChild(orderHtml);

  document.querySelector("#start-new-order").addEventListener("click", () => {
    orderHtml.remove();
    location.reload();
  });
}
