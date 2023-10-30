const data = [
    {
        label: 'dropdown-1',
        layout: '<li class="header_kn_2_0_0__head"><span class="header_kn_2_0_0__back">&#10094;</span>Dịch vụ </li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ Mắt1</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ Mũi</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ Hàm mặt</a></li>'
    },
    {
        label: 'dropdown-2',
        layout: '<li class="header_kn_2_0_0__head"><span class="header_kn_2_0_0__back">&#10094;</span>Dịch vụ </li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ Mắt2</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ Mũi</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ Hàm mặt</a></li>'
    },
    {
        label: 'dropdown-3',
        layout: '<li class="header_kn_2_0_0__head"><span class="header_kn_2_0_0__back">&#10094;</span>Dịch vụ </li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ Mắt3</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ Mũi</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ Hàm mặt</a></li>'
    },
]

const elmHover = document.querySelectorAll('.header_kn_2_0_0__navItem a');
const elmBg = document.querySelector('.header_kn_2_0_0__bg');
for(let i = 0; i < elmHover.length; i++){
    elmHover[i].addEventListener('mouseover', () => {
        for(let i = 0; i < elmHover.length; i++){
            const elmId = elmHover[i].getAttribute('data-id');
            if(elmId !== null){
                document.getElementById(elmId).innerHTML = '';
            }
        }
        const elmId = elmHover[i].getAttribute('data-id');
        const innerData = data.filter(item => item.label === elmId);
        if(innerData.length > 0){
            document.getElementById(elmId).innerHTML = innerData[0].layout;
            elmBg.style.display = 'block';
        }
    })
}
elmBg.addEventListener('mouseover', () => {
    for(let i = 0; i < elmHover.length; i++){
        const elmId = elmHover[i].getAttribute('data-id');
        if(elmId !== null){
            document.getElementById(elmId).innerHTML = '';
            elmBg.style.display = 'none';
        }
    }
})

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
