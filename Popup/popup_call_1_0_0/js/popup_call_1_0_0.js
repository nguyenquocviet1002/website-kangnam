const popup_call_1_0_0 = ` 
    <div class="popup_call_1_0_0__overlay" id="popup_call_1_0_0__overlay"></div>
    <form class="popup_call_1_0_0__mainForm popup_call_1_0_0" id="popup_call_1_0_0">
        <div class="popup_call_1_0_0__box">          
            <div class="popup_call_1_0_0__header">
                <div class="popup_call_1_0_0__logo"></div>
                <div class="popup_call_1_0_0__header-note">Bạn muốn biết chi phí của dịch vụ nào,
                    để lại thông tin để Kangnam tư vấn giúp bạn! </div>
            </div>
            <div class="popup_call_1_0_0__content">
                <div class="popup_call_1_0_0__form">
                    <div style="display:none">
                        <input type="text" placeholder="Họ và tên (*)" value="Yêu Cầu Gọi Lại" id="iname" name="iname">
                        <textarea type="text" placeholder="Nhu cầu tư vấn" id="itext" name="itext"></textarea>
                        <input id="iemail" name="iemail" value="no@email.benhvienthammykangnam.vn" type="hidden" placeholder="Email">
                        <input type="hidden" id="gclid_field" name="gclid_field" value="">
                        <input type="hidden" id="name_campaign" name="name_campaign" value="[Kangnam] Yêu Cầu Gọi Lại">
                        <input type="hidden" id="code_campaign" name="code_campaign" value="533588630">
                        <input type="hidden" id="first_url" name="first_url" value="">
                        <input type="hidden" id="refer" name="refer" value="">
                    </div>
                    <div class="form-group">
                        <input id="imob" name="imob" type="textbox" placeholder="Nhập số điện thoại của bạn*:">
                        <div class="form-message"></div>
                    </div>
                </div>
                <div class="popup_call_1_0_0__submit">
                    <input id="pop_sent" type="submit" value="Yêu cầu tư vấn">
                </div>
            </div>
            <div class="popup_call_1_0_0__header-note">* Hoặc gọi ngay hotline: <b>19006466</b></div>
            <a id="popup_call_1_0_0__closePopup" class="popup_call_1_0_0__closePopup"></a>          
        </div>
    </form>
`;

const callBtn = document.querySelectorAll(".btnkn1call, .btncallnow, .btncallme, .bvkn_dkcall");
for (let i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin", popup_call_1_0_0);
        document.querySelector('.popup_call_1_0_0 input[name="first_url"]').value = document.URL;
        document.querySelector('.popup_call_1_0_0 input[name="refer"]').value = document.referrer;
        // Call Form
        Validator({
            form: '#popup_call_1_0_0',
            errorSelector: '.form-message',
            formGroupSelector: '.form-group',
            rules: [
                Validator.isRequired('input[name="imob"]'),
                Validator.isMobile('input[name="imob"]'),
            ],
            onSubmit: function (data) {
                console.log(data);
                popup_call_1_0_0__hideForm();
                sendForm(this.form, '/dang-ky-thanh-cong'); 
            }
        });
        document.getElementById('popup_call_1_0_0__closePopup').addEventListener('click', () => {
           popup_call_1_0_0__closeForm();
        })
        document.getElementById('popup_call_1_0_0__overlay').addEventListener('click', () => {
           popup_call_1_0_0__closeForm();
        })
        window.onclick = function (e) {
            if (e.target == document.querySelector('.popup_call_1_0_0__mainForm')) {
                popup_call_1_0_0__closeForm();
            }
        }
        function popup_call_1_0_0__closeForm(){
            document.getElementById('popup_call_1_0_0').remove();
            document.getElementById('popup_call_1_0_0__overlay').remove();
        }
        function popup_call_1_0_0__hideForm(){
            document.getElementById('popup_call_1_0_0').style.display = 'none';
            document.getElementById('popup_call_1_0_0__overlay').style.display = 'none';
        }
    })
}