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
var spinColors = ["#1b5191", "#57a9e2", "#99ccff"];
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

/* --------------- Display Value Based On The Angle --------------------- */
const generateValue = (angleValue) => {
    for (let i of spinValues) {
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            return i.value;
        }
    }
};

/* --------------- Spinning Code --------------------- */
const startSpin = () => {
    text.innerHTML = `<p>Viel Glück!</p>`;
    let randomDegree = Math.floor(Math.random() * 360);
    let count = 0;
    let resultValue = 101;
    let rotationInterval = window.setInterval(() => {
        spinChart.options.rotation = spinChart.options.rotation + resultValue;
        spinChart.update();
        if (spinChart.options.rotation >= 360) {
            count += 1;
            resultValue -= 5;
            spinChart.options.rotation = 0;
        } else if (count > 15 && spinChart.options.rotation === randomDegree) {
            const computerChoice = generateValue(randomDegree);
            clearInterval(rotationInterval);
            count = 0;
            resultValue = 101;
            determineWinner(computerChoice); // Call determineWinner after the wheel stops
        }
    }, 10);
};

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
    startSpin();
}