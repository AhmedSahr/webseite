var testiomnialData = [
    {
        avatar: "./bilder_ausbildung/pngegg(19).png",
        name: "Lennart",
        review: "Miriam, wo bist du?"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(17).png",
        name: "Alhasan",
        review: "Okay okay"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(16).png",
        name: "Jonas",
        review: "Katze"
    },
    {
        avatar: "./bilder_ausbildung/khabib.png",
        name: "Ramasan",
        review: "Ich bin mit Absicht schlecht, man darf nicht ein zu gutes Zeugniss haben"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(15).png",
        name: "Okba",
        review: "Light weight baby"
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
        review: "Ich bin Fabian"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(12).png",
        name: "Robin",
        review: "El psy kongroo"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(18).png",
        name: "Ilja",
        review: "Wonderfull Ilja, if you want to have a wonderfull outline, go to Ilja"
    },
    {
        avatar: "./bilder_ausbildung/apor.png",
        name: "Francisco",
        review: "Dass ich ein Retard bin, ist doch common knowledge"
    },
    {
        avatar: "./bilder_ausbildung/pngegg(10).png",
        name: "Fedor",
        review: "Bin am Schlafen"
    },
    {
        avatar: "./bilder_ausbildung/snoppy.png",
        name: "Alexander",
        review: "In Thailand, bin ja Einserschüler"
    }, {
        avatar: "./bilder_ausbildung/pngegg(8).png",
        name: "Oliver",
        review: "Ich brauch Chayas und Geld, nicht das Wissen"
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
    autoplay: { delay: 500 }
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