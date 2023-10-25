if (screen.width <= 767) {
    document.querySelector('#location_kn_2_0_0__hide').style.display = 'none'
    const item = document.querySelectorAll('.location_kn_2_0_0__item')
    for (let i = 3; i < item.length; i++) {
        item[i].style.display = 'none'
    }
    document.querySelector('#location_kn_2_0_0__viewMore').addEventListener('click', () => {
        document.querySelector('#location_kn_2_0_0__viewMore').style.display = 'none'
        document.querySelector('#location_kn_2_0_0__hide').style.display = 'block'
        for (let i = 3; i < item.length; i++) {
            item[i].style.display = 'block'
        }
    })
    document.querySelector('#location_kn_2_0_0__hide').addEventListener('click', () => {
        document.querySelector('#location_kn_2_0_0__hide').style.display = 'none'
        document.querySelector('#location_kn_2_0_0__viewMore').style.display = 'block'
        for (let i = 3; i < item.length; i++) {
            item[i].style.display = 'none'
        }
    })
}