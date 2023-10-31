const data = [
    {
        label: 'dropdown-1',
        layout: '<a href="" class="service_kn_2_0_0__boxHover"><div class="service_kn_2_0_0__content"><h3 class="service_kn_2_0_0__titleChild titleHover">Chuyên khoa</h3><h2 class="service_kn_2_0_0__text textHover">Thẩm mỹ khuôn mặt</h2><ul class="service_kn_2_0_0__list"><li>Chỉnh hàm hô móm</li><li>Hạ gò má 3D</li><li>Gọt hàm V-line</li><li>Độn cằm V-line</li></ul></div><div class="service_kn_2_0_0__btn btnHover"><span>→</span> Xem thêm</div></a>'
    },
    {
        label: 'dropdown-2',
        layout: '<a href="" class="service_kn_2_0_0__boxHover"><div class="service_kn_2_0_0__content"><h3 class="service_kn_2_0_0__titleChild titleHover">Chuyên khoa</h3><h2 class="service_kn_2_0_0__text textHover">Thẩm mỹ khuôn mặt</h2><ul class="service_kn_2_0_0__list"><li>Chỉnh hàm hô móm</li><li>Hạ gò má 3D</li><li>Gọt hàm V-line</li><li>Độn cằm V-line</li></ul></div><div class="service_kn_2_0_0__btn btnHover"><span>→</span> Xem thêm</div></a>'
    },
    {
        label: 'dropdown-3',
        layout: '<a href="" class="service_kn_2_0_0__boxHover"><div class="service_kn_2_0_0__content"><h3 class="service_kn_2_0_0__titleChild titleHover">Chuyên khoa</h3><h2 class="service_kn_2_0_0__text textHover">Thẩm mỹ khuôn mặt</h2><ul class="service_kn_2_0_0__list"><li>Chỉnh hàm hô móm</li><li>Hạ gò má 3D</li><li>Gọt hàm V-line</li><li>Độn cằm V-line</li></ul></div><div class="service_kn_2_0_0__btn btnHover"><span>→</span> Xem thêm</div></a>'
    },
    {
        label: 'dropdown-4',
        layout: '<a href="" class="service_kn_2_0_0__boxHover"><div class="service_kn_2_0_0__content"><h3 class="service_kn_2_0_0__titleChild titleHover">Chuyên khoa</h3><h2 class="service_kn_2_0_0__text textHover">Thẩm mỹ khuôn mặt</h2><ul class="service_kn_2_0_0__list"><li>Chỉnh hàm hô móm</li><li>Hạ gò má 3D</li><li>Gọt hàm V-line</li><li>Độn cằm V-line</li></ul></div><div class="service_kn_2_0_0__btn btnHover"><span>→</span> Xem thêm</div></a>'
    },
    {
        label: 'dropdown-5',
        layout: '<a href="" class="service_kn_2_0_0__boxHover"><div class="service_kn_2_0_0__content"><h3 class="service_kn_2_0_0__titleChild titleHover">Chuyên khoa</h3><h2 class="service_kn_2_0_0__text textHover">Thẩm mỹ khuôn mặt</h2><ul class="service_kn_2_0_0__list"><li>Chỉnh hàm hô móm</li><li>Hạ gò má 3D</li><li>Gọt hàm V-line</li><li>Độn cằm V-line</li></ul></div><div class="service_kn_2_0_0__btn btnHover"><span>→</span> Xem thêm</div></a>'
    },
]

const eventService = () => {
    const elmHover = document.querySelectorAll('.service_kn_2_0_0__item');
    for (let i = 0; i < elmHover.length; i++) {
        elmHover[i].addEventListener('mouseover', () => {
            for (let i = 0; i < elmHover.length; i++) {
                const elmId = elmHover[i].getAttribute('data-id');
                if (elmId !== null) {
                    document.getElementById(elmId).innerHTML = '';
                }
            }
            const elmId = elmHover[i].getAttribute('data-id');
            const innerData = data.filter(item => item.label === elmId);
            if (innerData.length > 0) {
                document.getElementById(elmId).innerHTML = innerData[0].layout;
            }
        })
    }
}
eventService();

