(function visibleModal() {
    const modal = document.querySelector('.modal');
    const btn = document.querySelector('.btn__main');{
        btn.addEventListener('click', () =>
        modal.classList.add ('modal__visible'));
        
    }
})();

(function hideModal() {
    const modal = document.querySelector('.modal');
    const closeElements = document.querySelectorAll('.close__button, .btn__modal--green, .btn__modal--red, .modal__overlay');
        for (let i = 0; i < closeElements.length; i += 1) {
        closeElements[i].addEventListener('click', () =>
        modal.classList.remove('modal__visible'));
}
})();

