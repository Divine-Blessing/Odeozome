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
AOS.init();

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