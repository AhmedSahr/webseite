const welcome = document.getElementById("welcome");
const groups = document.getElementById("groups");
const groupcards = document.getElementsByClassName("group");
const groupname = document.getElementById("groupname");
const java_card = document.getElementById("java_card");
const python_card = document.getElementById("python_card");
const netzwerk_card = document.getElementById("netzwerk_card");
const webentwicklung_card = document.getElementById("webentwicklung_card");
const schueler = document.getElementById("schueler");
const checkw = document.getElementById("checkw");
const checkl = document.getElementById("checkl");
const notification = document.getElementById("notification-container");
const group1 = document.getElementById("group1");
const group2 = document.getElementById("group2");
const group3 = document.getElementById("group3");
const group4 = document.getElementById("group4");

if (welcome !== null) addTimeoutEvent(welcome);

function addTimeoutEvent(elem) {
    elem.addEventListener("click", () => {
      confetti.stop();
      setTimeout(() => {
        welcome.style.transition = "3s";
        welcome.style.transform = "translateX(-200%)";
        groups.style.transition = "2s";
        groups.style.transform = "translateX(0)";
        document.title = "Gruppen";
      }, 200);
    });
}

group1.addEventListener("click", () => {
  location.href = "./group1/card1.html"; 
})

group2.addEventListener("click", () => {
  location.href = "./group2/index.html";
})

group4.addEventListener("click", () => {
  location.href = "./group4/index.html"
})
group3.addEventListener("click", () => {
    location.href = "./group3/amazing-responsive-slider/card-hover-interactions/dist/index.html"
  })