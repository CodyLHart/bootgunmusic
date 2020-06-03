const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-nav');

burger.addEventListener('click', () => {
    if (burgerNav.classList.contains('hidden')) {
        burgerNav.classList.remove('hidden');
    } else {
        burgerNav.classList.add('hidden');
    };
})

burgerNav.addEventListener('click', () => {
    burgerNav.classList.add('hidden');
});