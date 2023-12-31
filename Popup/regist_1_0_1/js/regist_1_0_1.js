// Validate Form
document.querySelector('.regist_1_0_1 input[name="first_link"]').value = document.URL;
document.querySelector('.regist_1_0_1 input[name="website"]').value = document.referrer;
getLocation().then((data) => {
    document.querySelector('.regist_1_0_1 input[name="location"]').value = data.city;            
});

Validator({
    form: '#regist_1_0_1',
    errorSelector: '.form-message',
    formGroupSelector: '.form-group',
    rules: [
        Validator.isRequired('input[name="iname"]'),
        Validator.isRequired('input[name="imob"]'),
        Validator.isMobile('input[name="imob"]'),
        Validator.addInput('#itext', () => {
            return 'Đặt lịch cùng chuyên gia: '  + document.querySelector('#regist_1_0_1 #inote').value;
        }),
    ],
    onSubmit: function (data) {
        console.log(data);
        document.querySelector('input[type="submit"]').setAttribute("disabled", "");
        document.querySelector('input[type="submit"]').value="Đang gửi thông tin...";
        sendForm(data, '/dang-ky-thanh-cong');          
    }
});