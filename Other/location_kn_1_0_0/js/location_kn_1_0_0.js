let template = `
<div class="location_kn_1_0_0 show">
        <div class="container">
            <div class="location_kn_1_0_0__box">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="location_kn_1_0_0__title">Bệnh viện thẩm mỹ</div>
                        <ul class="location_kn_1_0_0__bv">
                            <li><a href="#">Sài Gòn - 666 Cách mạng tháng 8</a></li>
                            <li><a href="#">Sài Gòn - 218 Nguyễn Trãi</a></li>
                            <li><a href="#">Hà Nội - 190 Trường Chinh</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-8">
                        <div class="location_kn_1_0_0__title">Viện thẩm mỹ</div>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul class="location_kn_1_0_0__vtm">
                                    <li><a href="https://benhvienthammykangnam.vn/bach-mai/tham-my-vien-kangnam-bach-mai/">Hà Nội - 93 Bạch Mai</a></li>
                                    <li><a href="https://benhvienthammykangnam.vn/bac-ninh/tham-my-vien-kangnam-bac-ninh/">Bắc Ninh - 521 Ngô Gia Tự</a></li>
                                    <li><a href="https://benhvienthammykangnam.vn/hai-phong/tham-my-vien-kangnam-hai-phong/">Hải Phòng - 378 Tô Hiệu</a></li>
                                    <li><a href="https://benhvienthammykangnam.vn/thanh-hoa/tham-my-vien-kangnam-thanh-hoa/">Thanh Hóa - 103 Nguyễn Trãi</a></li>
                                    <li><a href="https://benhvienthammykangnam.vn/nghe-an/tham-my-vien-kangnam-nghe-an/">Nghệ An - 148 Nguyễn Văn Cừ</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul class="location_kn_1_0_0__vtm">
                                    <li><a href="https://benhvienthammykangnam.vn/da-nang/tham-my-vien-kangnam-da-nang/">Đà Nẵng - 293 Hùng Vương</a></li>
                                    <li><a href="https://benhvienthammykangnam.vn/binh-duong/tham-my-vien-kangnam-binh-duong/">Bình Dương - 688A Cách mạng 8</a></li>
                                    <li><a href="https://benhvienthammykangnam.vn/can-tho/tham-my-vien-kangnam-can-tho/">Cần Thơ - 28 Lý Tự Trọng</a></li>
                                    <li><a href="https://benhvienthammykangnam.vn/buon-ma-thuot/tham-my-vien-kangnam-buon-ma-thuot/">Buôn Ma Thuột - 26 Lê Thánh Tông</a></li>
                                    <li><a href="https://benhvienthammykangnam.vn/thai-nguyen/tham-my-vien-kangnam-thai-nguyen/">Thái Nguyên - 194 Phan Đình Phùng</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="location_kn_1_0_0__bg" class="location_kn_1_0_0__bg show"></div>
    </div>
`;

let location_kn_1_0_0 = document.getElementsByClassName('location');
console.log(location_kn_1_0_0);
for(let i = 0; i < location_kn_1_0_0.length; i ++){
    location_kn_1_0_0[i].addEventListener('click', () => {
        console.log(document.getElementById('subLocation'));
        document.getElementById('subLocation').innerHTML = template;
        document.getElementById('location_kn_1_0_0__bg').addEventListener('click', function(){   
            document.getElementById('subLocation').innerHTML = '';
        });
    });
}