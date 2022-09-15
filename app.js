const removeBtnElement=document.getElementById("remove");
const counterBtnElement=document.getElementById("item");
const addBtnElement=document.getElementById("add");

addBtnElement.addEventListener("click",addCounterFunc);
removeBtnElement.addEventListener("click",removeCounterFunc);

let counter=0;
function addCounterFunc()
{
    counter++;
    counterBtnElement.innerText=counter;
}
function removeCounterFunc()
{
    if(counter>0)
    {
        counter--;
        counterBtnElement.innerText=counter;
    }
}




// ================================For scrolling Images==============
const mainImageElement=document.getElementById("main-image");

let imageSrcArray=["./img/image-product-1.jpg","./img/image-product-2.jpg","./img/image-product-3.jpg","./img/image-product-4.jpg"]

let imageCounter=0;
document.getElementById("scroll-left").addEventListener("click",()=>
{
    imageCounter--;

    if(imageCounter<0)
    {
        imageCounter=3;
    }

    mainImageElement.setAttribute("src",imageSrcArray[imageCounter]);

})

document.getElementById("scroll-right").addEventListener("click",()=>
{
    imageCounter++;
    if(imageCounter>3)
    {
        imageCounter=0;
    }
    mainImageElement.setAttribute("src",imageSrcArray[imageCounter]);
})




// ==================When clicked on cart Image======================================

const cartImageElement=document.getElementById("cart-img");
cartImageElement.addEventListener("click",openCartFunc);
const deleteCartElement=document.getElementById("delete-cart");
deleteCartElement.addEventListener("click",deleteCartFunc);

const cart=document.getElementById("openedCart");
function openCartFunc()
{
    if(cart.style.display!="block")
    {
        cart.style.display="block";
    }
    else
    {
        cart.style.display="none";
    }
    
}


const openedCartContentElement=document.getElementsByClassName("openedCart-content")[0];
const checkOutBtn=document.getElementsByClassName("checkout-btn")[0];
function deleteCartFunc()
{
    openedCartContentElement.style.display="none";
    checkOutBtn.style.display="none";
}




// -----------For updating the counter of cart------------

const addToCartBtn=document.getElementById("addtocart");
addToCartBtn.addEventListener("click",addToCartFunc);

const cartCounterElement=document.getElementById("cart-counter");
function addToCartFunc()
{
    cartCounterElement.innerText=counter;
}




