const navLinks = document.querySelector('.navLinks');
const openBar = document.querySelector('#bars');
const closeX = document.querySelector('#close');

openBar.addEventListener('click', () =>{
    navLinks.classList.add('active')
    closeX.style.display = 'inline-block';
    openBar.style.display = 'none';
})
closeX.addEventListener('click', () =>{
    navLinks.classList.remove('active')
    openBar.style.display = 'inline-block';
    closeX.style.display = 'none';
})
var typed = new Typed('.text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})