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

    if (pedLightRed.classList.contains('red')) {
        updateStatus("Autolicht wird gelb...");
        carLightGreen.classList.remove('green');
        carLightYellow.classList.add('yellow');

        setTimeout(() => {
            updateStatus("Autolicht wird rot...");
            carLightYellow.classList.remove('yellow');
            carLightRed.classList.add('red');
            car.classList.add('stopped'); 



            setTimeout(() => {
                updateStatus("Fußgängerlicht wird grün...");
                pedLightRed.classList.remove('red');
                pedLightGreen.classList.add('green');
                walkButton.disabled = true;

                setTimeout(() => {
                    updateStatus("Fußgängerlicht wird rot...");
                    pedLightGreen.classList.remove('green');
                    pedLightRed.classList.add('red');

                    updateStatus("Autolicht wird grün...");
                    carLightRed.classList.remove('red');
                    carLightGreen.classList.add('green');
                    car.classList.remove('stopped'); 


                    walkButton.disabled = false;
                }, 3000);
            }, 1000);
        }, 1000);
    }
}

window.onload = function() {
    statusBox = document.getElementById('status-box');
    document.getElementById('ped-light-red').classList.add('red');
    document.getElementById('car-light-green').classList.add('green');
    updateStatus("Drücken Sie das Button.");
}