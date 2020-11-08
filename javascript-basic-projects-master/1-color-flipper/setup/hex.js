const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    
    let pick = getRandomHex();
    console.log(pick);
    
    // use the pick hex to choose a random element of hex
    color.textContent = pick;
    document.body.style.backgroundColor = pick;
})

// pick a random Hex between 0 and 15 inclusive
function getRandomHex() {
    let randomColor = "#";
    for (let i = 0; i < 6; i++){
        let randomElement = Math.floor((Math.random() * hex.length));
        randomColor += hex[randomElement];
    };
    return randomColor;
}