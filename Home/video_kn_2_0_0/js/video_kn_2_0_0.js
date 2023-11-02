let cateVideo = 'Show Hành trình lột xác';
let cateIndexVideo = 0;
const tabsVideo = [];
video_kn_2_0_0_data.map(item => tabsVideo.push(item.category));

const filterDataVideo = (filter) => video_kn_2_0_0_data.filter(item => item.category === filter);
const handleCateVideo = (item) => {
    cateVideo = item
    cateIndexVideo = tabsVideo.indexOf(item)
    renderVideo()
}
const nextCateVideo = () => {
    if (cateIndexVideo < tabsVideo.length - 1) {
        cateIndexVideo++
    }
    cateVideo = tabsVideo[cateIndexVideo]
    renderVideo()
}
const preCateVideo = () => {
    if (cateIndexVideo > 0) {
        cateIndexVideo--
    }
    cateVideo = tabsVideo[cateIndexVideo]
    renderVideo()
}

const renderCate = () => {
    document.querySelector('.video_kn_2_0_0__categories').innerHTML = ` 
<button onclick="preCateVideo()">❮</button>
<ul>
    ${tabsVideo.map(item=> {
        return`<li class="${cateVideo===item?'video_kn_2_0_0__category--active':''}" onclick="handleCateVideo('${item}')">${item}</li>`}).join('')}
</ul>
<button onclick="nextCateVideo()">❯</button>`
}

const removeDuplicate = (array) =>
  array.filter((item, index) => {
    return array.indexOf(item) === index;
  });

const renderSeasonEp = (cate, className) => {
    let index = ''
    if(className) {
        index = document.querySelector(`.${className}`).value
    }
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    const dataSeasons = [];
    const dataEpisode = [];
    const dataCate = filterDataVideo(cate);
    dataCate[0].item.map(item => dataSeasons.push(item.season))
    const dataSeason = removeDuplicate(dataSeasons)
    const dataEpisodeBySeason =  dataCate[0].item.filter(item => item.season === dataSeason[!className ? 0 : getKeyByValue(dataSeason, index)])
    dataEpisodeBySeason.map(item => dataEpisode.push(item.episode))
    let selectItemSeason = '';
    let selectItemEpisode = '';
    dataSeason.map(item => selectItemSeason += `
        <option value="${item}">${item}</option>
    `)
    dataEpisode.map(item => selectItemEpisode += `
        <option value="${item}">${item}</option>
    `)
    if(!className) document.querySelector('.video_kn_2_0_0__selectChoice--ss').innerHTML = selectItemSeason
    document.querySelector('.video_kn_2_0_0__selectChoice--ep').innerHTML = selectItemEpisode
    if(className) {
        renderVideoLink(cate, className, 'video_kn_2_0_0__selectChoice--ep')
    }
}

const renderVideoLink = (cate, season, ep) => {
    const dataCate = filterDataVideo(cate);
    let seasonNow = dataCate[0].item[0].season
    let epNow = dataCate[0].item[0].episode
    if(season) seasonNow = document.querySelector(`.${season}`).value
    if(ep) epNow = document.querySelector(`.${ep}`).value
    const dataVideo = dataCate[0].item.filter(item => item.season === seasonNow && item.episode === epNow)
    document.querySelector('.video_kn_2_0_0__video').innerHTML = `
        <div class="video_kn_2_0_0__thumb"><img width="664" height="363" src="${dataVideo[0].thumb}" alt=""><a href="${dataVideo[0].link}" class="video_kn_2_0_0__play" target="_blank"><img width="208" height="208" src="${video_kn_2_0_0_url}images/play.webp" alt=""></a></div>
        <div class="video_kn_2_0_0__title">
            <span class="video_kn_2_0_0__name">${dataCate[0].category}</span>
            <span class="video_kn_2_0_0__ep">${dataVideo[0].episode}</span>
        </div>
    `
}

const renderVideoBox = (data) => {
    const dataItem = data[0];

    document.querySelector('.video_kn_2_0_0__inner').innerHTML = `
    <div class="video_kn_2_0_0__select">
        <div class="video_kn_2_0_0__thumbCate">
            <img width="271" height="275" src="${dataItem.thumb}" alt="">
        </div>
        <div class="video_kn_2_0_0__selectVideo">
            <select class="video_kn_2_0_0__selectChoice video_kn_2_0_0__selectChoice--ss" onchange="renderSeasonEp('${cateVideo}', 'video_kn_2_0_0__selectChoice--ss')"></select>
            <select class="video_kn_2_0_0__selectChoice video_kn_2_0_0__selectChoice--ep" onchange="renderVideoLink('${cateVideo}', 'video_kn_2_0_0__selectChoice--ss', 'video_kn_2_0_0__selectChoice--ep')"></select>
        </div>
        <p class="video_kn_2_0_0__desc">
            ${dataItem.description}
        </p>
    </div>
    <div class="video_kn_2_0_0__video"></div>
    `
    renderSeasonEp(cateVideo)
    renderVideoLink(cateVideo)
}

const renderVideoLinkMB = (cate, season, ep) => {
    const dataCate = filterDataVideo(cate);
    const dataVideo = dataCate[0].item.filter(item => item.season === season && item.episode === ep)
    document.querySelector('.video_kn_2_0_0__video').innerHTML = `
        <div class="video_kn_2_0_0__thumb"><img width="664" height="363" src="${dataVideo[0].thumb}" alt=""><a href="${dataVideo[0].link}" class="video_kn_2_0_0__play" target="_blank"><img width="208" height="208" src="${video_kn_2_0_0_url}images/play.webp" alt=""></a></div>
        <div class="video_kn_2_0_0__title">
            <span class="video_kn_2_0_0__name">${dataCate[0].category}</span>
            <span class="video_kn_2_0_0__ep">${dataVideo[0].episode}</span>
        </div>
    `
}

const renderVideoBoxMb = () => {
    let html = ''
    for(let i = 0; i < video_kn_2_0_0_data.length; i++){
        for(let j = 0; j < video_kn_2_0_0_data[i].item.length; j++){
            html += `
            <div>
            <div class="video_kn_2_0_0__item" onclick="renderVideoLinkMB('${video_kn_2_0_0_data[i].category}', '${video_kn_2_0_0_data[i].item[j].season}', '${video_kn_2_0_0_data[i].item[j].episode}')">
                <div class="video_kn_2_0_0__titleItem">${video_kn_2_0_0_data[i].category} <br> ${video_kn_2_0_0_data[i].item[j].season} ${video_kn_2_0_0_data[i].item[j].episode}</div>
                <div class="video_kn_2_0_0__thumb">
                    <img width="271" height="275" src="${video_kn_2_0_0_data[i].thumb}" alt="">
                </div>
            </div>
            </div>
            `
        }
    }
    
    document.querySelector('.video_kn_2_0_0__inner').innerHTML = `
    <div class="video_kn_2_0_0__select">${html}</div>
    <div class="video_kn_2_0_0__video">123</div>
    `
    renderVideoLinkMB(cateVideo, video_kn_2_0_0_data[0].item[0].season, video_kn_2_0_0_data[0].item[0].episode)
    
}

const renderVideo=()=>{
    renderCate()
    renderVideoBox(filterDataVideo(cateVideo))
}

const renderVideoMb=()=>{
    renderVideoBoxMb()
}

const resizeVideo = () => {
    if (window.innerWidth < 767) {
        renderVideoMb()
    } else {
        renderVideo()
    }
}
resizeVideo();