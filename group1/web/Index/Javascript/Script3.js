/* --------------- Spin Wheel  --------------------- */
const spinWheel = document.getElementById("spinWheel");
const text = document.getElementById("text");

/* --------------- Minimum And Maximum Angle For A value  --------------------- */
const spinValues = [
    { minDegree: 0, maxDegree: 119, value: "Stein" },
    { minDegree: 120, maxDegree: 239, value: "Papier" },
    { minDegree: 240, maxDegree: 359, value: "Schere" },
];

/* --------------- Size Of Each Piece  --------------------- */
const size = [33.33, 33.33, 33.33];

/* --------------- Background Colors  --------------------- */
const spinColors = ["#1b5191", "#1b5191", "#1b5191"];

/* --------------- Chart --------------------- */
let spinChart = new Chart(spinWheel, {
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
        labels: ["Stein", "Papier", "Schere"],
        datasets: [
            {
                backgroundColor: spinColors,
                data: size,
            },
        ],
    },
    options: {
        responsive: true,
        animation: { duration: 0 },
        plugins: {
            tooltip: false,
            legend: {
                display: false,
            },
            datalabels: {
                rotation: 90,
                color: "#ffffff",
                formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 24 },
            },
        },
    },
});

/* --------------- Spinning Code --------------------- */
const startSpin = () => {
    text.innerHTML = `<p>Viel Glück!</p>`;
    let randomDegree = Math.floor(Math.random() * 360) + 3600; // Spin the wheel multiple times
    let count = 0;
    let resultValue = 101;
    let rotationInterval = window.setInterval(() => {
        spinChart.options.rotation = (spinChart.options.rotation + resultValue) % 360;
        spinChart.update();
        if (resultValue > 1) {
            resultValue -= 1;
        } else {
            count += 1;
            if (count >= 15) {
                clearInterval(rotationInterval);
                let finalRotation = randomDegree % 360;
                spinChart.options.rotation = finalRotation;
                spinChart.update();
                setTimeout(() => {
                    const computerChoice = determineComputerChoice(finalRotation);
                    determineWinner(computerChoice);
                }, 1000);
            }
        }
    }, 10);
};

const determineComputerChoice = (finalRotation) => {
    let currentRotation = (finalRotation + 90) % 360; // Adjusting for the initial -90 degree offset
    const computerChoice = generateValue(currentRotation);
    highlightSegment(computerChoice); // Highlight the selected segment after the wheel stops
    return computerChoice;
};

/* --------------- Highlight Selected Segment --------------------- */
const highlightSegment = (computerChoice) => {
    let segmentIndex = spinValues.findIndex(segment => segment.value === computerChoice);
    spinChart.data.datasets[0].backgroundColor = spinColors.map((color, index) => index === segmentIndex ? "green" : color);
    spinChart.update();
};

/* --------------- Determine Winner --------------------- */
const determineWinner = (computerChoice) => {
    const playerChoice = currentPlayerChoice;
    let ergebnis = '';

    if (playerChoice === computerChoice) {
        ergebnis = 'Unentschieden! Beide haben ' + playerChoice + ' gewählt.';
    } else if (
        (playerChoice === 'Schere' && computerChoice === 'Papier') ||
        (playerChoice === 'Stein' && computerChoice === 'Schere') ||
        (playerChoice === 'Papier' && computerChoice === 'Stein')
    ) {
        ergebnis = 'Du gewinnst! ' + playerChoice + ' schlägt ' + computerChoice + '.';
    } else {
        ergebnis = 'Du verlierst! ' + computerChoice + ' schlägt ' + playerChoice + '.';
    }

    document.getElementById('auswahl').innerText = 'Deine Auswahl: ' + playerChoice + ' | Computer Auswahl: ' + computerChoice;
    document.getElementById('ergebnis').innerText = ergebnis;
};

let currentPlayerChoice = '';

function spiel(auswahl) {
    // Clear previous result
    document.getElementById('auswahl').innerText = '';
    document.getElementById('ergebnis').innerText = '';
    text.innerHTML = '';

    currentPlayerChoice = auswahl;
    clearHighlight(); // Clear highlighted segment before starting a new spin
    startSpin();
}

/* --------------- Clear Highlighted Segment --------------------- */
const clearHighlight = () => {
    spinChart.data.datasets[0].backgroundColor = spinColors;
    spinChart.update();
};

/* --------------- Generate Value Based On The Angle --------------------- */
const generateValue = (angleValue) => {
    for (let i of spinValues) {
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            return i.value;
        }
    }
};