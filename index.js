const box = document.querySelector(".box")
const input = document.querySelector("input")


const changeTheColor = ()=>{
    box.style.background = input.value;
}



input.addEventListener("input",changeTheColor)