(function visibleModal(event) {
    const modal = document.querySelector('.modal');
    const btn = document.querySelector('.btn__main');{
        btn.addEventListener('click', (event) =>
        modal.className = 'modal__visible');
        
    }
})();

(function hideModal(event) {
    const modal = document.querySelector('.modal');
    const closeElements = document.querySelectorAll('.close__button, .btn__modal--green, .btn__modal--red');
        for (let i = 0; i < closeElements.length; i += 1) {
        closeElements[i].addEventListener('click', (event) =>
        modal.className = 'modal');
}
})();

const modal = document.querySelector('.modal');
window.addEventListener('click', function (event){
    if (event.target == modal) {
        modal.className = 'modal';
    }
});
