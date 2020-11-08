const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    
    let pick = getRandomNumber();
    console.log(pick);
    
    // use the pick number to choose a random element of colors
    document.body.style.backgroundColor = colors[pick];
    color.textContent = colors[randomNumber];
})

// pick a random number between 0 and 3 inclusive
function getRandomNumber() {
    return Math.floor((Math.random() * colors.length));
}