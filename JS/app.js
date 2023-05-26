// MENU BAR
const menuBar = document.querySelector('.menu');
const sideBar = document.querySelector('.links');
menuBar.addEventListener('click', () => {
    const visibility = links.getAttribute('data-visible')
    if (visibility === "false"){
        sideBar.setAttribute('data-visible', true)
        menuBar.setAttribute('aria-expanded', true)
        console.log('It is true o')
    }else if (visibility === "true"){
        sideBar.setAttribute('data-visible', false)
        menuBar.setAttribute('aria-expanded', false)
        console.log('It is false o')
    }
})


// FADE-IN EFFECT
// AOS.init();

// FADE-IN EFFECT IN RESUME.HTML
// const faders = document.querySelectorAll('.fade-in');

// sectionOneObserver.observe(sectionOne);
// const appearOptions = {
//     threshold:  1,
//     rootMargin: "0px 0px -100px 0px"
// };
// const appearOnScroll =  new IntersectionObserver
// (function(
//     entries, appearOnScroll
// ) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting){
//             return;
//         } else{
//             entry.target.classList('appear');
//             appearOnScroll.unobserve(entry.target);
//         }
//     })
// },
// appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// })

// TRIAL AND ERROR
// const fadeIns =
// document.querySelectorAll('.fade-in');
// function debounce(func, wait = 20, immediately = true){
//     let timeout;
//     return function(){
//         const context = this, args = arguments;
//         const later = function() {
//             timeout = null;
//             if(!immediate) func.apply(context, args);   
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply (context, args);
//     };
// }
// function checkSlide(){
//     fadeIns.forEach(fadeIn => {
//         const fadeInTop =fadeIn.getBoundingClientRect().top;
//         const fadeInBottom = fadeIn.getBoundingClientRect().bottom;
//         const fadeInHeight = fadeIn.clientHeight;
//         const isHalfShown = fadeInTop + fadeInHeight
//     })
// }

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})