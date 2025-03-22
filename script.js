const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const welcomeMessage = document.querySelector('.welcome-message');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.remove('hide-form');
    welcomeMessage.classList.remove('show-welcome');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.add('hide-form');
    welcomeMessage.classList.add('show-welcome');
});