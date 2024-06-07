let statusBox;

function updateStatus(message) {
    statusBox.innerText = message;
}

function changeLights() {
    const carLightRed = document.getElementById('car-light-red');
    const carLightYellow = document.getElementById('car-light-yellow');
    const carLightGreen = document.getElementById('car-light-green');
    const pedLightRed = document.getElementById('ped-light-red');
    const pedLightGreen = document.getElementById('ped-light-green');
    const walkButton = document.getElementById('walk-button');
    const car = document.getElementById('Car');
    const manGif = document.querySelector('.gif2');

    if (pedLightRed.classList.contains('red')) {
        updateStatus("Autolicht wird Gelb");
        carLightGreen.classList.remove('green');
        carLightYellow.classList.add('yellow');
        walkButton.disabled = true;

        setTimeout(() => {
            updateStatus("Autolicht wird Rot");
            carLightYellow.classList.remove('yellow');
            carLightRed.classList.add('red');
            car.classList.add('stopped'); 

            setTimeout(() => {
                updateStatus("Fußgängerlicht wird Grün");
                pedLightRed.classList.remove('red');
                pedLightGreen.classList.add('green');
                manGif.classList.remove('gif2');
                manGif.src = manGif.src;

                setTimeout(() => {
                    updateStatus("Fußgängerlicht wird Rot");
                    pedLightGreen.classList.remove('green');
                    pedLightRed.classList.add('red');
                    manGif.classList.add('gif2');

                    // New step: turn car lights to yellow before turning green
                    setTimeout(() => {
                        updateStatus("Autolicht wird Gelb");
                        carLightRed.classList.remove('red');
                        carLightYellow.classList.add('yellow');

                        setTimeout(() => {
                            updateStatus("Autolicht wird Grün");
                            carLightYellow.classList.remove('yellow');
                            carLightGreen.classList.add('green');
                            car.classList.remove('stopped');

                            walkButton.disabled = false;
                        }, 1000); // Duration for yellow light before green
                    }, 1000); // Delay before turning car light to yellow
                }, 3500);
            }, 1000);
        }, 1000);
    }
}

window.onload = function() {
    statusBox = document.getElementById('status-box');
    document.getElementById('ped-light-red').classList.add('red');
    document.getElementById('car-light-green').classList.add('green');
    document.getElementById('ped-light-green').classList.remove('green');
    updateStatus("Drücken Sie das Button.");

    // jQuery code for image click functionality
    $("#grid img").click(function(){	
        $("#imgBig").attr("src", $(this).prop('src'));
        $("#overlay").show('slow');
        $("#overlayContent").show('slow');
    });

    $("#imgBig").click(function(){
        $("#imgBig").attr("src", "");
        $("#overlay").hide();
        $("#overlayContent").hide();
    });
}

var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("smallImg");
    var modalImg = document.getElementById("largeImg");

    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = "Bilder/AnLeitung.jpg"; // URL of the larger image
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }