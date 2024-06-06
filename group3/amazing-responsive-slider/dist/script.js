var testiomnialData = [
    {
        avatar: "./bilder_ausbildung/lenni.jpg",
        name: "Lennart",
        review: "Ich programmierte eine Website und sah, wie meine Ideen lebendig wurden. Jeder Code führte zu sichtbaren Ergebnissen. Diese Erfolgserfahrung zeigte mir die kreative Kraft der IT und weckte meine Leidenschaft, weiter in die Technologie einzutauchen."
    },
    {
        avatar: "./bilder_ausbildung/pngegg(17).png",
        name: "Alhasan",
        review: "Während meiner Ausbildung habe ich umfassende Kenntnisse in den Bereichen Programmierung, Netzwerksicherheit und Datenanalyse erworben. Die praxisorientierten Projekte und die enge Zusammenarbeit mit erfahrenen Lehrern haben mein technisches Verständnis und meine Problemlösungsfähigkeiten erheblich verbessert."
    },
    {
        avatar: "./bilder_ausbildung/pngegg(16).png",
        name: "Jonas",
        review: "Meine erste IT Erfahrung habe ich gemacht, als ich den PC meiner Eltern aufgeschraubt habe und da rumexperimentierte"
    },
    {
        avatar: "./bilder_ausbildung/khabib.png",
        name: "Ramasan",
        review: "Ich bin mit Absicht schlecht, man darf nicht ein zu gutes Zeugniss haben"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(15).png",
        name: "Okba",
        review: "Seit drei Jahren sammle ich wertvolle IT-Erfahrungen, seitdem ich meine Ausbildung bei Campus Berlin begonnen habe. Während dieser Zeit habe ich umfassende Kenntnisse in verschiedenen Bereichen der Informationstechnologie erworben, einschließlich Netzwerktechnik, Softwareentwicklung und IT-Support"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(14).png",
        name: "Ahlam",
        review: "Nur Jungs hier"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(9).png",
        name: "Duc",
        review: "Hier kommt ein Arschbohrer"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(11).png",
        name: "Fabrizio",
        review: "Ich liebe Python und das Geld von Herr Berge..."
    },
    {
        avatar: "./bilder_ausbildung/silverhand.png",
        name: "Florian",
        review: "Meine erste Erfahrung mit IT war, als ich Komponenten meines PCs ausgetauscht habe."
    },
    {
        avatar: "./bilder_ausbildung/pngegg(12).png",
        name: "Robin",
        review: "El psy kongroo"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(20).png",
        name: "Ilja",
        review: "Meine erste IT Erfahrung war das Upgraden meiner Hardware auf meinem PC und die Erneuerung der Wärmeleitpaste"
    },
    {
        avatar: "./bilder_ausbildung/apor.png",
        name: "Francisco",
        review: "Dass ich ein Retard bin, ist doch common knowledge"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(10).png",
        name: "Fedor",
        review: "ich als übel verpennte Person, hatte meine erste Berührung mit IT, als ich damals mit einem Kumpel den PC gecrackt habe und eins hat dann zum anderem geführt und jetzt bin ich hier"
    },
    {
        avatar: "./bilder_ausbildung/snoppy.png",
        name: "Alexander",
        review: "Als ich 13 Jahre alt war, habe ich mein Android-Handy gerootet, um mobile Spiele zu hacken. Die Nächte verbrachte ich damit, Foren zu durchforsten und Anleitungen zu folgen. Es war aufregend und hat meine Leidenschaft für Technologie geweckt."
    }, {
        avatar: "./bilder_ausbildung/pngegg(8).png",
        name: "Oliver",
        review: "Mein erster Kontakt mit der IT trat damals mit meinem Onkel auf als wir eine Festplatte mit Wii Spielen auf die Konsole überspielt haben. Dies war kostengünstiger als die Spiele aus dem Laden zu holen. Somit haben wir pro Spiel 1 Euro bezahlt."
    }]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 1500 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2
    if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
    if (window.innerWidth < 501) swiper.params.slidesPerView = 1
    swiper.update()
}