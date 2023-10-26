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
                    <div class="form-group">
                        <input id="iname" name="iname" type="textbox" placeholder="Họ tên*:">
                        <div class="form-message"></div>
                    </div>
                    <div class="form-group">
                        <input id="imob" name="imob" type="textbox" placeholder="Điện thoại*:">
                        <div class="form-message"></div>
                    </div>
                    <div class="form-group">
                        <input type="hidden" style="display:none" id="iemail" name="iemail" placeholder="Email:">
                        <div class="form-message"></div>
                    </div>
                    <div class="form-group">
                        <textarea id="itext" type="hidden" name="itext" value="" placeholder="Dịch vụ quan tâm"></textarea>
                        <div class="form-message"></div>
                    </div>
                    <div class="form-group">
                        <input type="hidden" id="first_url" name="first_url" value="">
                        <div class="form-message"></div>
                    </div>
                    <div class="form-group">
                        <input type="hidden" id="refer" name="refer" value="">
                        <div class="form-message"></div>
                    </div>
                    <input type="hidden" id="gclid_field" name="gclid_field" value="">
                    <input type="hidden" id="code_campaign" name="code_campaign" value="583971142">
                    <input type="hidden" id="name_campaign" name="name_campaign" value="[Kangnam] Sale Kangnam">
                </div>
                <div>
                    <input class="popup_regist_1_1_0__clickBtn" id="popup_regist_1_1_0_clickSent" type="submit" value="HOÀN THÀNH">
                    <div class="popup_regist_1_1_0__contact">
                        <p>Tư vấn trực tiếp 24/7: <a href="tel:1900.6466">1900.6466</a></p>
                    </div> 
                </div>                  
            </div>
            <a id="popup_regist_1_1_0_closePopup" class="popup_regist_1_1_0__closePopup">╳</a>           
        </div>
    </form>

`;
var first_url = document.URL;
var refer = document.referrer;

const callBtnRegist_1_1_0 = document.querySelectorAll(".btnkntvv,.btnkn1tv,.btnkn2tv,.btnkn2km,.btnkn1km");
for (let i = 0; i < callBtnRegist_1_1_0.length; i++) {
    callBtnRegist_1_1_0[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_regist_1_1_0);

        // Validate Form
        Validator({
            form: '#popup_regist_1_1_0',
            errorSelector: '.form-message',
            formGroupSelector: '.form-group',
            rules: [
                Validator.isRequired('input[name="imob"]'),
                Validator.isRequired('input[name="iname"]'),
                Validator.isMobile('input[name="imob"]'),
                Validator.addInput('#first_url', () => {
                    return first_url;
                }),
                Validator.addInput('#refer', () => {
                    return refer;
                }),
            ],
            onSubmit: function (data) {
                console.log(data);
                popup_regist_1_1_0__hideForm();
                sendForm(this.form, '/dang-ky-thanh-cong');             
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