const shareBtn = document.querySelector('.card__share');
const tooltip = document.querySelector('.card__tooltip');

shareBtn.addEventListener('click', () => {
    console.log('clicked')

    tooltip.classList.toggle('card__tooltip--hide')
    shareBtn.classList.toggle('card__share--active')
})