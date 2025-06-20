// Header

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Автоматическое скрытие меню при клике по пункту
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});

// modal open
const modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function (btn) {
    btn.onclick = function() {
        let modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display = 'flex';
    }
});

// modal close
const closeBtn = document.querySelectorAll('.close-btn');

closeBtn.forEach(function(btn) {
    btn.onclick = function() {
        let modal = btn.closest('.modal').style.display = 'none';
    }
})

// aos Animate on scroll library

AOS.init({
    delay: 200,
    duration: 400
})