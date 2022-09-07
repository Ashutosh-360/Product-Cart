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


