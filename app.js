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
    if(imageCounter>0)
    {
    imageCounter--;
    mainImageElement.setAttribute("src",imageSrcArray[imageCounter]);
}
})

document.getElementById("scroll-right").addEventListener("click",()=>
{
    if(imageCounter<3)
    {
    imageCounter++;
    mainImageElement.setAttribute("src",imageSrcArray[imageCounter]);
}
})
