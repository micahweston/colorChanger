const h1 = document.querySelector('h1');
const button = document.querySelector('button');

const randColorPicker = () => {
    const redColor = Math.floor(Math.random()*255);
    const greenColor = Math.floor(Math.random()*255);
    const blueColor = Math.floor(Math.random()*255);
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

const colorPick = () => {
    randomColor = randColorPicker();
    h1.innerText = randomColor;
    document.body.style.backgroundColor = randomColor;
}

button.addEventListener('click', colorPick);