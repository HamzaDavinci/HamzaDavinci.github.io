let currentContentIndex = 0;
let contents;

document.addEventListener('DOMContentLoaded', function () {
    contents = document.querySelectorAll('.content-container');

    window.changeImage = function (contentIndex, direction) {
        const images = contents[contentIndex].querySelectorAll('.slider img');
        let currentImageIndex = parseInt(images[0].dataset.currentIndex || 0);

        currentImageIndex += direction;
        currentImageIndex = (currentImageIndex + images.length) % images.length;

        images.forEach((image, index) => {
            image.style.display = index === currentImageIndex ? 'block' : 'none';
        });

        images[0].dataset.currentIndex = currentImageIndex;
    }

    window.changeContent = function (contentIndex) {
        contents[currentContentIndex].style.display = 'none';
        currentContentIndex = contentIndex;
        contents[currentContentIndex].style.display = 'block';

        contents[currentContentIndex].querySelectorAll('.slider img').forEach((image) => {
            image.dataset.currentIndex = 0;
        });
    }
});
