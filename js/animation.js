const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'https://freepngimg.com/thumb/web_design/24779-6-cursor-hand-transparent.png'; 

const imgLargura = 40;
const imgAltura = 40;

let imgX = (canvas.width / 2) - (imgLargura / 2);
let imgY = (canvas.height / 2) - (imgAltura / 2);

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, imgX, imgY, imgLargura, imgAltura);
}

img.onload = () => {
    desenhar();
};

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let posX = mouseX - (imgLargura / 2);
    let posY = mouseY - (imgAltura / 2);

    if (posX < 0) {
        posX = 0;
    } else if (posX + imgLargura > canvas.width) {
        posX = canvas.width - imgLargura;
    }

    if (posY < 0) {
        posY = 0;
    } else if (posY + imgAltura > canvas.height) {
        posY = canvas.height - imgAltura;
    }

    imgX = posX;
    imgY = posY;
    desenhar();
});