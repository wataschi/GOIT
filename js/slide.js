const prefButton = document.getElementById('slideL');
const nextButton = document.getElementById('slideR');
let currentImg = document.getElementById('currentImg')

const imageURL = [];
imageURL.push('../img/1.jpg');
imageURL.push('../img/2.jpg');
imageURL.push('../img/3.jpg');
imageURL.push('../img/4.jpg');
imageURL.push('../img/5.jpg');

let currentImgIndex = 0;
currentImg.src = imageURL[currentImgIndex];


const showPrefImg = () => {
    nextButton.disabled = false;
    currentImgIndex = currentImgIndex - 1;
    console.log(currentImgIndex)
    if (currentImgIndex !== 0) {
        currentImg.src = imageURL[currentImgIndex];
    }
    if (currentImgIndex === 0) {
        prefButton.disabled = true;
        currentImg.src = imageURL[currentImgIndex];

    }
}
const showNextImg = () => {
    prefButton.disabled = false;
    currentImgIndex = currentImgIndex + 1;
    console.log(currentImgIndex)
    if (currentImgIndex !== imageURL.length - 1) {
        currentImg.src = imageURL[currentImgIndex];

    }
    if (currentImgIndex === imageURL.length - 1) {
        nextButton.disabled = true;
        currentImg.src = imageURL[currentImgIndex];
    }
}

prefButton.addEventListener('click', showPrefImg);
nextButton.addEventListener('click', showNextImg);