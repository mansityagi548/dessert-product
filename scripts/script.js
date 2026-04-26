import { cartItems, saveToStorage, updateYourCart } from "./cart.js";
import { renderCart, cart  , renderOrderConfirm} from "./renderHtml.js";

renderCart();
updateYourCart();

const cartBtn = document.querySelectorAll(".add-to-cart-btn"); // this is add to cart btn choose
const quantityBtn = document.querySelectorAll(".qty-btn"); // this is of increment and decremnet one
const confirmBtn = document.querySelector(".confirm-order-btn");

cartItems.forEach((cartItem) => {
  const control = document.querySelector(
    `.cart-control[data-id="${cartItem.productId}"]`,
  ); // this is for so we only select the id of the ones that are in the cart .
  if (control) {
    control.classList.add("active");
    const qtyNum = control.querySelector(".quantity-num");
    qtyNum.textContent = cartItem.quantity; // restore the quantity number too
  }
});



// in this one when you click add to cart sort of it's ui change so this is for that..
cartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const control = btn.closest(".cart-control"); // this one i have choosen bcz inside it only all the btns are there ...
    control.classList.add("active"); // this one is for like just adding the class
    const id = control.dataset.id;
    const qtyNum = control.querySelector(".quantity-num");
    qtyNum.textContent = 1;
    cartItems.push({ productId: id, quantity: 1 });
    renderCart();
    saveToStorage();
    updateYourCart();
   
  });
});

// this is the one for the quantity button
quantityBtn.forEach((amount) => {
  amount.addEventListener("click", (e) => {
    const control = amount.closest(".cart-control");
    let id = control.dataset.id; // get the id that which one has clicked which
    const qtyNum = control.querySelector(".quantity-num"); // this one is the span where numbers are changing ..
    let val = Number(qtyNum.textContent); // bcz iti is in string so converted in into number ..

    // this neeche if is working bcz i put the data attrivute to the incre and decreases btns ..
    if (amount.dataset.type === "increment") {
      val++;
    } else {
      if (val <= 1) {
        // this if  is for when while doing decrease it  can reach negative so when that happens i will hide that increase and decrease one
        control.classList.remove("active");
        val = 0;
      } else {
        val--;
      }
    }
    qtyNum.textContent = val; // this is for showing the changes you have made to be shown

    let matchingItem; // this is for when you add so much quantity but of one product
    cartItems.forEach((item) => {
      if (id === item.productId) {
        matchingItem = item;
      }
    }); // this checks for the same product through id ..

    if (matchingItem) {
      if (val === 0) {
        const index = cartItems.findIndex((item) => {
          return item.productId === id;
        }); // this is for when the amount goes to zero..
        cartItems.splice(index, 1);
      } else {
        matchingItem.quantity = val;
      }
    } else {
      cartItems.push({
        productId: id,
        quantity: val,
      });
    }

    renderCart(); // this is after all this happens to show cart..
    saveToStorage(); // this is for local storage
    updateYourCart(); // this is for showing total items quantity..
  
  });
});

cart.addEventListener("click", (e) => {
  const remove = e.target.closest(".remove-item-btn");

  if (remove) {
    const id = remove.dataset.id; // to remove that item only 
    const index = cartItems.findIndex((item) => {
      return item.productId === id;
    });
    cartItems.splice(index, 1);
    const control = document.querySelector(`.cart-control[data-id="${id}"]`); // to like sort of able to change that number . 
    if (control) {
      control.classList.remove("active"); // show "Add to Cart" again
      control.querySelector(".quantity-num").textContent = 0; // reset quantity
    }

    saveToStorage(); // to change in storage
    renderCart(); // to show changed cart
    updateYourCart(); // to update the total 
   
  }
});

confirmBtn.addEventListener("click" , ()=>{
   renderOrderConfirm();
  localStorage.removeItem("cartDessertItems");
  cartItems.length = 0;

  
  document.querySelectorAll(".cart-control").forEach((control) => {
    control.classList.remove("active");
    control.querySelector(".quantity-num").textContent = 0;
  });

  renderCart();
  updateYourCart();
})
