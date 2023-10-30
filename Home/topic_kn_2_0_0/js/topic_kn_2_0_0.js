const slider = document.querySelector('.topic_kn_2_0_0__inner');
const cards = document.querySelector('.topic_kn_2_0_0__box');
const bar = document.querySelector('.bar');

let isPressed = false;

let cursorX;

const containerRect = slider.getBoundingClientRect();
const cardsRect = cards.getBoundingClientRect();
bar.style.width = `${(containerRect.right / cardsRect.right) * 100}%`;
const widthMm = (containerRect.right / cardsRect.right) * 100;
const styleRight = Number(`-${cardsRect.width - containerRect.width}`)
cards.style.right = `${styleRight}px`;

bar.addEventListener("mousedown", (e) => {
    isPressed = true;
    cursorX = e.offsetX - cards.offsetLeft;
    bar.style.cursor = "grabbing";
});

bar.addEventListener("mouseup", () => {
    bar.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
    isPressed = false;
});

bar.addEventListener("mousemove", (e) => {
    if (!isPressed) return;
    e.preventDefault();
    // cards.style.left = `${e.offsetX - cursorX}px`;
    cards.style.right = `${styleRight + (e.offsetX - cursorX)}px`;
    console.log("`${styleRight + (e.offsetX - cursorX)}px`: ", `${styleRight + (e.offsetX - cursorX)}px`);
    boundSlides();
});

function boundSlides() {
    const containerRect = slider.getBoundingClientRect();
    const cardsRect = cards.getBoundingClientRect();
    bar.style.left = `${((containerRect.right / cardsRect.right) * 100) - widthMm}%`;
    //   console.log(cardsRect)
    if (parseInt(cards.style.left) > 0) {
        cards.style.left = 0;
        bar.style.left = 0;
    } else if (cardsRect.right < containerRect.right) {
        // cards.style.left = `-${cardsRect.width - containerRect.width}px`;
        cards.style.right = `0px`;
        bar.style.left = `${100 - widthMm}%`;
    }
}