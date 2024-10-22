const popup_km_1_0_0Html = `
<div class="modal popup_km_1_0_0" id="modal_km" style="display: flex;">
    <div class="modal-bg" onclick="popup_km_1_0_0Remove('modal_km')"></div>
    <div class="modal-box animate-opacity">
        <div class="modal-close" onclick="popup_km_1_0_0Remove('modal_km')">×</div>
        <div class="modal-body">
            <a href="https://benhvienthammykangnam.vn/hao-quang/qua-tang/">
                <img width="500" height="765" src="./images/banner.jpg" alt="">
            </a>
        </div>
    </div>
</div>
`;
let popup_km_1_0_0Interval;

const popup_km_1_0_0Remove = (id) => {
    document.getElementById(id).remove();
}

const popup_km_1_0_0 = () => {
    const now = new Date();
    const isShow = localStorage.getItem('isShow');
    if (!isShow) {
        document.body.insertAdjacentHTML("beforeend", popup_km_1_0_0Html);
        localStorage.setItem('isShow', now.getTime());
    }
}

const popup_km_1_0_0Check = () => {
    const isShow = localStorage.getItem('isShow');
    const now = new Date();
    const currentDate = new Date(Number(isShow));
    currentDate.setDate(currentDate.getDate() + 1);

    if (now.getTime() >= currentDate.getTime()) {
        //put the scheduled code here... e.g.
        localStorage.removeItem("isShow");
        setTimeout(popup_km_1_0_0, 5000);
        //in case each task has its own timer, stop the timer
        clearInterval(popup_km_1_0_0Interval);
    }
}

popup_km_1_0_0Interval = setInterval(popup_km_1_0_0Check, 1000);
setTimeout(popup_km_1_0_0, 5000);