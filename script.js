let on=document.querySelector(".off")
let off=document.querySelector (".about-button")
off.addEventListener("click", function(){
    on.classList.toggle("on")
    console.log("1")
})
let items=document.querySelectorAll(".FAQh")
let content=document.querySelectorAll(".FAQp")
items.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        content[index].classList.toggle("FAQp-active")
        items[index].classList.toggle("FAQh-active")
    })
})