const hamburger = document.querySelector('.hamburger');
const header_nav = document.querySelector('.header_nav');

const body = document.querySelector('body');
let navWindow = false;

hamburger.addEventListener('click', () => {

    if (navWindow) {
        hamburger.classList.remove('hamClick');
        hamburger.classList.add('hamburger')
        header_nav.classList.remove('media_nav');
        navWindow = false;
    } else {  
        hamburger.classList.remove('hamburger');
        hamburger.classList.add('hamClick') ;
        header_nav.classList.add('media_nav');
        navWindow = true;
    }
})
