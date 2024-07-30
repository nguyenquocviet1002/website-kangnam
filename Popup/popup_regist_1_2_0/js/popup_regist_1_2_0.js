const popup_regist_1_2_0 = `
    <div class="popup_regist_1_2_0__overlay" id="popup_regist_1_2_0__overlay"></div>
    <form class="popup_regist_1_2_0__boxTv popup_regist_1_2_0" id="popup_regist_1_2_0">
        <div class="popup_regist_1_2_0__form" id="regist_ft_1_0_0__form">          
            <div class="popup_regist_1_2_0__title">
                <img width="130" height="auto"
                    src="https://benhvienthammykangnam.vn/wp-content/themes/SCI_Theme_v3/Module/Popup/popup_regist_1_2_0/images/head.jpg" alt="Logo Kangnam">
                    </div>
                    <b id="close-form">╳</b>
            <article>
                <div style="display:none">
                    <input id="iemail" name="iemail" type="textbox" placeholder="Email:">
                    <input id="gclid_field" name="referred" value="">
                    <input id="code_campaign" name="code_campaign" value="583971142">
                    <input id="name_campaign" name="name_campaign" value="[Kangnam] Sale Kangnam">
                    <input id="first_link" name="first_link" value="">
                    <input id="website" name="website" value="">
                    <input id="location" name="location" value="">
                </div>
                <div class="popup_regist_1_2_0__item form-group">
                    <input id="iname" name="iname" type="textbox" placeholder="Họ và tên:">
                    <div class="form-message"></div>
                </div>
                <div class="popup_regist_1_2_0__item form-group">
                    <input id="imob" name="imob" type="textbox" placeholder="Số điện thoại:">
                    <div class="form-message"></div>
                </div>
                <div class="popup_regist_1_2_0__item form-group" style="display:none">
                    <input id="itext" name="itext" type="textbox" placeholder="Ghi chú">
                    <div class="form-message"></div>
                </div>                
                <div class="popup_regist_1_2_0__item form-group">
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
            <div class="popup_regist_1_2_0__reg">
                <input id="popup_regist_1_2_0__clickSent" type="submit" value="Đăng ký tư vấn">
            </div>
        </div>
    </form>
`;

const callBtnRegist_1_2_0 = document.querySelectorAll(".kntv");
for (let i = 0; i < callBtnRegist_1_2_0.length; i++) {
    callBtnRegist_1_2_0[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_regist_1_2_0);
        document.querySelector('.popup_regist_1_2_0 input[name="first_link"]').value = document.URL;
        document.querySelector('.popup_regist_1_2_0 input[name="website"]').value = document.referrer;
        getLocation().then((data) => {
            document.querySelector('.popup_regist_1_2_0 input[name="location"]').value = data.city;            
        });
        // Validate Form
        Validator({
            form: '#popup_regist_1_2_0',
            errorSelector: '.form-message',
            formGroupSelector: '.form-group',
            rules: [
                Validator.isRequired('input[name="imob"]'),
                Validator.isRequired('input[name="iname"]'),
                Validator.isMobile('input[name="imob"]'),
                Validator.isRequired('select[name="iservice"]'),
                Validator.addInput('#popup_regist_1_2_0 #itext', () => {
                    return 'Tư vấn dịch vụ: ' + document.querySelector('#popup_regist_1_2_0 #iservice').value;
                }),
            ],
            onSubmit: function (data) {
                console.log(data);
                popup_regist_1_2_0__hideForm();
                sendForm(data, '/dang-ky-thanh-cong');             
            }
        });

        document.getElementById('close-form').addEventListener('click', () => {
            popup_regist_1_2_0__closeForm()
        })
        document.getElementById('popup_regist_1_2_0__overlay').addEventListener('click', () => {
            popup_regist_1_2_0__closeForm()
        })
        window.onclick = function (e) {
            if (e.target == document.querySelector('.popup_regist_1_2_0__boxTv')) {
                popup_regist_1_2_0__closeForm()
            }
        }
        function popup_regist_1_2_0__closeForm(){
            document.getElementById('popup_regist_1_2_0').remove();
            document.getElementById('popup_regist_1_2_0__overlay').remove();
        }
        function popup_regist_1_2_0__hideForm(){
            document.getElementById('popup_regist_1_2_0').style.display = 'none';
            document.getElementById('popup_regist_1_2_0__overlay').style.display = 'none';
        }
    })
}