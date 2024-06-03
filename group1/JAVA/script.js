document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const boxes = document.querySelectorAll('.box');
    const images = document.querySelectorAll('.image-box');
    const totalBoxes = boxes.length;

    let currentIndex = 0;

    function showBox(index) {
        if (index >= 0 && index < totalBoxes) {
            boxes.forEach((box, i) => {
                if (i === index) {
                    box.classList.add('active');
                } else {
                    box.classList.remove('active');
                }
            });

            images.forEach((image, i) => {
                if (i === index) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                }
            });

            currentIndex = index;
        }
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalBoxes) % totalBoxes;
        showBox(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalBoxes;
        showBox(currentIndex);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % totalBoxes;
            showBox(currentIndex);
        } else if (event.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + totalBoxes) % totalBoxes;
            showBox(currentIndex);
        }
    });

    // Touch-based navigation
    const imageContainer = document.querySelector('.image-container');
    let touchStartX = 0;
    let touchEndX = 0;

    imageContainer.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
    });

    imageContainer.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX - touchStartX > 50) {
            // Swiped right
            currentIndex = (currentIndex - 1 + totalBoxes) % totalBoxes;
            showBox(currentIndex);
        } else if (touchStartX - touchEndX > 50) {
            // Swiped left
            currentIndex = (currentIndex + 1) % totalBoxes;
            showBox(currentIndex);
        }
    }

    showBox(currentIndex);
});

//homebutton
document.addEventListener("keydown", function (zEvent) {
    if (zEvent.shiftKey && zEvent.key === "H") {
      this.location.href = "/homepage/index.html";
      console.log("Home");
    }
  });