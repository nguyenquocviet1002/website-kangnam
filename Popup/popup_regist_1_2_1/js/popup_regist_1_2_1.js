const popup_regist_1_2_1 = `
    <div class="popup_regist_1_2_1__overlay" id="popup_regist_1_2_1__overlay"></div>
    <form class="popup_regist_1_2_1__boxTv popup_regist_1_2_1" id="popup_regist_1_2_1">
        <div class="popup_regist_1_2_1__form" id="regist_ft_1_0_0__form">          
            <div class="popup_regist_1_2_1__title">
                <img width="130" height="auto"
                    src="https://benhvienthammykangnam.vn/wp-content/themes/SCI_Theme_v3/Module/Popup/popup_regist_1_2_1/images/head.webp" alt="Logo Kangnam">
                    </div>
                    <b id="close-form">╳</b>
            <article>
                <div style="display:none">
                    <input id="gclid_field" name="referred" value="">
                    <input id="code_campaign" name="code_campaign" value="583971142">
                    <input id="name_campaign" name="name_campaign" value="[Kangnam] Sale Kangnam">
                    <input id="first_link" name="first_link" value="">
                    <input id="website" name="website" value="">
                    <input id="location" name="location" value="">
                </div>
                <div class="popup_regist_1_2_1__item form-group">
                    <input id="iname" name="iname" type="textbox" placeholder="Họ và tên:">
                    <div class="form-message"></div>
                </div>
                <div class="popup_regist_1_2_1__item form-group">
                    <input id="imob" name="imob" type="textbox" placeholder="Số điện thoại:">
                    <div class="form-message"></div>
                </div>
                <div class="popup_regist_1_2_1__item form-group" style="display:none">
                    <input id="itext" name="itext" type="textbox" placeholder="Ghi chú">
                    <div class="form-message"></div>
                </div>                
                <div class="popup_regist_1_2_1__item form-group">
                    <select name="iservice" id="iservice">
                        <option value="">--- Dịch vụ ---</option>
                        <option value="Cắt mí - Bấm mí">Cắt mí - Bấm mí</option>
                        <option value="Nâng mũi">Nâng mũi</option>
                        <option value="Nâng ngực">Nâng ngực</option>
                        <option value="Giảm mỡ">Giảm mỡ</option>
                        <option value="Hàm mặt">Hàm mặt</option>
                        <option value="Tạo hình môi">Tạo hình môi</option>
                        <option value="Phun xăm">Phun xăm</option>
                        <option value="Trị nám - Tàn nhang">Trị nám - Tàn nhang</option>
                        <option value="Trị mụn - Mụn thịt">Trị mụn - Mụn thịt</option>
                        <option value="Căng da - Cấy mỡ">Căng da - Cấy mỡ</option>
                        <option value="Thẩm mỹ khác">Thẩm mỹ khác</option>
                    </select>
                    <div class="form-message"></div>
                </div>
               
            </article>
            <div class="popup_regist_1_2_1__reg">
                <input id="popup_regist_1_2_1__clickSent" type="submit" value="Nhận báo giá ưu đãi">
            </div>
        </div>
    </form>
`;

const callBtnRegist_1_2_1 = document.querySelectorAll(".knprice");
for (let i = 0; i < callBtnRegist_1_2_1.length; i++) {
    callBtnRegist_1_2_1[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_regist_1_2_1);
        document.querySelector('.popup_regist_1_2_1 input[name="first_link"]').value = document.URL;
        document.querySelector('.popup_regist_1_2_1 input[name="website"]').value = document.referrer;
        getLocation().then((data) => {
            document.querySelector('.popup_regist_1_2_1 input[name="location"]').value = data.city;            
        });
        // Validate Form
        Validator({
            form: '#popup_regist_1_2_1',
            errorSelector: '.form-message',
            formGroupSelector: '.form-group',
            rules: [
                Validator.isRequired('input[name="imob"]'),
                Validator.isRequired('input[name="iname"]'),
                Validator.isMobile('input[name="imob"]'),
                Validator.isRequired('select[name="iservice"]'),
                Validator.addInput('#popup_regist_1_2_1 #itext', () => {
                    return 'Gửi báo giá dịch vụ: ' + document.querySelector('#popup_regist_1_2_1 #iservice').value;
                }),
            ],
            onSubmit: function (data) {
                console.log(data);
                popup_regist_1_2_1__hideForm();
                sendForm(data, '/dang-ky-thanh-cong');             
            }
        });

        document.getElementById('close-form').addEventListener('click', () => {
            popup_regist_1_2_1__closeForm()
        })
        document.getElementById('popup_regist_1_2_1__overlay').addEventListener('click', () => {
            popup_regist_1_2_1__closeForm()
        })
        window.onclick = function (e) {
            if (e.target == document.querySelector('.popup_regist_1_2_1__boxTv')) {
                popup_regist_1_2_1__closeForm()
            }
        }
        function popup_regist_1_2_1__closeForm(){
            document.getElementById('popup_regist_1_2_1').remove();
            document.getElementById('popup_regist_1_2_1__overlay').remove();
        }
        function popup_regist_1_2_1__hideForm(){
            document.getElementById('popup_regist_1_2_1').style.display = 'none';
            document.getElementById('popup_regist_1_2_1__overlay').style.display = 'none';
        }
    })
}