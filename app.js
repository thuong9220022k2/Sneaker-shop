// show gallery 
var image_product = document.querySelector('.image-product-big')
var image_gallery = document.querySelector('#image-gallery')

image_product.addEventListener('click',()=>{
    image_gallery.className = 'image-gallery'
})

var button_left = document.getElementById('icon1')
var button_right = document.getElementById('icon2')
var button_close = document.getElementById('icon3')

button_close.addEventListener('click',()=>{
    image_gallery.className = 'image-gallery hide'
})
var image_product_big = document.querySelector('.image-product-big img')
var image_product_small = document.querySelectorAll('.content .small-image .image-product-small img')
image_product_small.forEach((item)=>{
    item.addEventListener('click',(index)=>{
        image_product_big.src = item.src
    })
})

//button 
var button_one = document.querySelector('.one')
var button_two = document.querySelector('.two')
var button_three = document.querySelector('.three')
var icon_shop = document.querySelector('.icon-shop')
var index =0
var avatar = document.querySelector('.avatar')
var button_add = document.querySelector('.add-to-cart')
var card_hide = document.querySelector('.avatar .card')
button_three.addEventListener('click',function(){
    index++
    button_two.innerHTML = `
    <button class="two">${index}</button>
    `
    button_add.addEventListener('click',()=>{
        let value = icon_shop.lastElementChild
        value.classList.remove('hide')
        value.innerHTML = `
        <span>${index}</span>  
        `
    })
    avatar.addEventListener('click',function(){
        if(index ==0){
            card_hide.classList.remove('hide')
            card_hide.innerHTML = `
            <p>Cart</p>
            <form>Your card is empty</form> 
            `
        }
        else{
            card_hide.classList.remove('hide')
            card_hide.innerHTML = `
            <p>Cart</p>
      <form>
                <div class="cart-note">
               <div class="imag-cart">
                    <img
                      id="ditconmechungmay"
                     src="./images/image-product-1-thumbnail.jpg"
                  />
               </div>
               <div class="i4-cart">
                <span>Fall Limited Edition Sneakers</span>
               <div class="price">
                <div class="price1">$125</div>
               <div class="opertor">x</div>
                    <div class="sl">${index}</div>
                  <div class="price2">$${index*125}</div>
               </div>
            </div>
           <div class="icon-cart">
              <i class="fa-solid fa-trash-can"></i>
            </div>
        </div>
       <div class="checkout">Checkout</div>
             </form>
            `
        }
    })
})
//<p>Cart</p>
//<form>
//                <div class="cart-note">
//                 <div class="imag-cart">
//                    <img
//                      id="ditconmechungmay"
//                     src="./images/image-product-1-thumbnail.jpg"
//                  />
//               </div>
//               <div class="i4-cart">
//                <span>Fall Limited Edition Sneakers</span>
//               <div class="price">
//                <div class="price1">$125</div>
//               <div class="opertor">x</div>
///                    <div class="sl">4</div>
//                  <div class="price2">$375</div>
//               </div>
//            </div>
//           <div class="icon-cart">
///              <i class="fa-solid fa-trash-can"></i>
///            </div>
//        </div>
//       <div class="checkout">Checkout</div>
//             </form>

button_one.addEventListener('click',()=>{
    index--
    if(index <=0){
        button_two.innerHTML = `
    <button class="two">0</button>
    `
    }
    else{
        button_two.innerHTML = `
        <button class="two">${index}</button>
        `
    }
    button_add.addEventListener('click',()=>{
        let value = icon_shop.lastElementChild
        value.classList.remove('hide')
        value.innerHTML = `
        <span>${index}</span>  
        `
    })

})

