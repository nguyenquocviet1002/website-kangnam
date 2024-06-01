document.body.insertAdjacentHTML("beforeend", `
    <div class="loading_kn_1_0_0"></div>
    <style>
      .loading_kn_1_0_0{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        background: #fff;
        background-image: url("media/images/loading_icon3.gif");
        background-repeat: no-repeat;
        background-position: center;
      }
    </style>
    `)
window.onload = () => {
    setTimeout(() => {
        document.querySelector('.loading_kn_1_0_0').remove();
    }, 500)
}