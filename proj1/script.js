const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orpink = document.querySelector(".orpink");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

console.log(getBGColor(pink));