const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".hovednav")

hamburger.addEventListener("click", ()=> {
    console.log("hamburger er trykket på")
    
    const aapen = nav.classList.toggle("menyAapen")
    hamburger.classList.toggle("menyAapen")
    
})