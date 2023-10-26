const iframe_feeback = `
    <div class="popup_feedback_1_0_0__overlay" id="popup_feedback_1_0_0__overlay"></div>
    <div class="popup_feedback_1_0_0__boxIframe" id="iframe_feeback">
        <iframe src="https://benhvienthammykangnam.vn/app/survey/feedback?brand_code=KN&type=qr&company_id=2" title="Khảo sát khách hàng">
        </iframe>
        <a id="popup_feedback_1_0_0__closePopup" class="popup_feedback_1_0_0__closePopup">×</a>
    </div>
`;

const iconFeedback = document.querySelector('.popup_feedback_1_0_0__icon');
iconFeedback.addEventListener('click', () => {
    document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", iframe_feeback);
    document.getElementById('popup_feedback_1_0_0__closePopup').addEventListener('click', () => {
        removePopup_feedback_1_0_0();
    })
    document.getElementById('popup_feedback_1_0_0__overlay').addEventListener('click', () => {
        removePopup_feedback_1_0_0();
    })
    document.getElementById('iframe_feeback').addEventListener('click', () => {
        removePopup_feedback_1_0_0();
    })
    function removePopup_feedback_1_0_0(){
        document.getElementById('iframe_feeback').remove();
        document.getElementById('popup_feedback_1_0_0__overlay').remove();
        document.getElementById('popup_feedback_1_0_0__closePopup').remove();
    }
});
