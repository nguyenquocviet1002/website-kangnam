const popup_regist_1_1_0 = `
    <div class="popup_regist_1_1_0__overlay" id="popup_regist_1_1_0__overlay"></div>
    <form class="popup_regist_1_1_0__mainForm popup_regist_1_1_0" id="popup_regist_1_1_0">
        <div class="popup_regist_1_1_0__boxTv">            
            <div class="popup_regist_1_1_0__headerBox">
                <img width="200" height="100"
                    src="https://benhvienthammykangnam.vn/css/lib/images/logo-kn-white.svg" alt="Logo Kangnam">
                <p class="popup_regist_1_1_0__headerTitle">Đăng ký Khuyến Mãi</p>
            </div>
            <div class="popup_regist_1_1_0__contentBox">
                <div>
                    <div style="display:none">
                        <input id="iemail" name="iemail" type="textbox" placeholder="Email:">
                        <input id="gclid_field" name="referred" value="">
                        <input id="code_campaign" name="code_campaign" value="583971142">
                        <input id="name_campaign" name="name_campaign" value="[Kangnam] Sale Kangnam">
                        <input id="first_link" name="first_link" value="">
                        <input id="website" name="website" value="">
                        <input id="location" name="location" value="">
                    </div>
                    <div class="form-group">
                        <input id="iname" name="iname" type="textbox" placeholder="Họ tên*:">
                        <div class="form-message"></div>
                    </div>
                    <div class="form-group">
                        <input id="imob" name="imob" type="textbox" placeholder="Điện thoại*:">
                        <div class="form-message"></div>
                    </div>                   
                    <div class="form-group">
                        <textarea id="itext" type="hidden" name="itext" value="" placeholder="Dịch vụ quan tâm"></textarea>
                        <div class="form-message"></div>
                    </div>
                </div>
                <div>
                    <input class="popup_regist_1_1_0__clickBtn" id="popup_regist_1_1_0_clickSent" type="submit" value="HOÀN THÀNH">
                    <div class="popup_regist_1_1_0__contact">
                        <p>Tư vấn trực tiếp 24/7: <a href="tel:19006466">1900.6466</a></p>
                    </div> 
                </div>                  
            </div>
            <a id="popup_regist_1_1_0_closePopup" class="popup_regist_1_1_0__closePopup">╳</a>           
        </div>
    </form>
`;

const callBtnRegist_1_1_0 = document.querySelectorAll(".btnkntvv,.btnkn1tv,.btnkn2tv,.btnkn2km,.btnkn1km");
for (let i = 0; i < callBtnRegist_1_1_0.length; i++) {
    callBtnRegist_1_1_0[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_regist_1_1_0);
        document.querySelector('.popup_regist_1_1_0 input[name="first_link"]').value = document.URL;
        document.querySelector('.popup_regist_1_1_0 input[name="website"]').value = document.referrer;
        getLocation().then((data) => {
            document.querySelector('.popup_regist_1_1_0 input[name="location"]').value = data.city;            
        });

        // Validate Form
        Validator({
            form: '#popup_regist_1_1_0',
            errorSelector: '.form-message',
            formGroupSelector: '.form-group',
            rules: [
                Validator.isRequired('input[name="imob"]'),
                Validator.isRequired('input[name="iname"]'),
                Validator.isMobile('input[name="imob"]'),
            ],
            onSubmit: function (data) {
                console.log(data);
                popup_regist_1_1_0__hideForm();
                sendForm(data, '/dang-ky-thanh-cong');             
            }
        });

        document.getElementById('popup_regist_1_1_0_closePopup').addEventListener('click', () => {
            popup_regist_1_1_0__closeForm();
        })
        document.getElementById('popup_regist_1_1_0__overlay').addEventListener('click', () => {
            popup_regist_1_1_0__closeForm();
        })
        window.onclick = function (e) {
            if (e.target == document.querySelector('.popup_regist_1_1_0__mainForm')) {
                popup_regist_1_1_0__closeForm();
            }
        }
        function popup_regist_1_1_0__closeForm(){
            document.getElementById('popup_regist_1_1_0').remove();
            document.getElementById('popup_regist_1_1_0__overlay').remove();
        }
        function popup_regist_1_1_0__hideForm(){
            document.getElementById('popup_regist_1_1_0').style.display = 'none';
            document.getElementById('popup_regist_1_1_0__overlay').style.display = 'none';
        }
    })
}