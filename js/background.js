const background = document.querySelector('#background');
const numberOfImg = 5;

const randNumber = Math.floor(Math.random() * numberOfImg);
const link = `${randNumber}.jpg`;

background.src = `img/${link}`;