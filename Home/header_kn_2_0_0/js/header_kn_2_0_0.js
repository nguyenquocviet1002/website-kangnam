document.querySelector('.header_kn_2_0_0__button').addEventListener('click', () => {
    document.querySelector('.header_kn_2_0_0__bottom').classList.add('show');
    const elmClickDown = document.querySelectorAll('.header_kn_2_0_0__bottom.show .header_kn_2_0_0__navItem a');
    for(let i = 0; i < elmClickDown.length; i++){
        elmClickDown[i].addEventListener('click', () => {
            const idElm = elmClickDown[i].getAttribute('data-id')
            const elmById = document.querySelector(`#${idElm}`)
            if(elmById){
                elmById.classList.add('show');
                const elmClickBack = document.querySelector('.header_kn_2_0_0__bottom.show .header_kn_2_0_0__dropdown.show .header_kn_2_0_0__back');
                elmClickBack.addEventListener('click', () => {
                    elmById.classList.remove('show');
                })
            }
        })
    }
});
document.querySelector('.header_kn_2_0_0__close').addEventListener('click', () => {
    document.querySelector('.header_kn_2_0_0__bottom').classList.remove('show');
    const elmDown = document.querySelectorAll('.header_kn_2_0_0__dropdown');
    for(let i = 0; i < elmDown.length; i++){
        elmDown[i].classList.remove('show');
    }
});
