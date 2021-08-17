const selectElement = function(element) {
    return document.querySelector('element')
};

const body = selectElement('body');
const menuToggler = document.querySelector('.openMenu');
menuToggler.addEventListener('click', function() {
    let menu = document.querySelector('.mainmenu');
    menu.classList.toggle('open');
});
console.log("click")