document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".service_kn_2_0_0__item");

    items.forEach(function (item) {
        var itemBox = item.querySelector(".service_kn_2_0_0__itemBox");

        item.addEventListener("mouseover", function () {
            var newItemHover = document.createElement("div");
            newItemHover.classList.add("service_kn_2_0_0__itemHover");
            newItemHover.innerHTML = `
                <a href="" class="service_kn_2_0_0__boxHover">
                    <div class="service_kn_2_0_0__content">
                        <h3 class="service_kn_2_0_0__titleChild titleHover">Chuyên khoa</h3>
                        <h2 class="service_kn_2_0_0__text textHover">Thẩm mỹ khuôn mặt</h2>
                        <ul class="service_kn_2_0_0__list">
                            <li>Chỉnh hàm hô móm</li>
                            <li>Hạ gò má 3D</li>
                            <li>Gọt hàm V-line</li>
                            <li>Độn cằm V-line</li>
                        </ul>
                    </div>
                    <div class="service_kn_2_0_0__btn btnHover">
                        <span>→</span> Xem thêm
                    </div>
                </a>
            `;
            itemBox.insertAdjacentElement("afterend", newItemHover);
        });

        item.addEventListener("mouseout", function () {
            var insertedItemHover = item.querySelector(".service_kn_2_0_0__itemHover");
            if (insertedItemHover) {
                insertedItemHover.remove();
            }
        });
    });
});