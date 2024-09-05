const queryVideo = async () => {
    const response = await fetch('https://benhvienthammykangnam.vn/wp-json/wp/v2/pages/257729');
    const data = await response.json();
    const dataAcfLayout = data.acf.group_page_field.body_custom;
    const dataAfcLayoutFilter = dataAcfLayout.filter(item => {
        return item.acf_fc_layout === "video_kn_2_0_0";
    });
    const video_kn_2_0_0_data = [];
    dataAfcLayoutFilter[0].cate.map(item => {
        let itemCate = {};
        const videoCate = [];
        item.cate.map(itemVideo => {
            let videoItem = {};
            const itemVideoSplit = itemVideo.cate_list.split('\r\n');
            videoItem = {
                season: itemVideoSplit[0],
                episode: itemVideoSplit[1],
                link: itemVideoSplit[2],
                thumb: itemVideoSplit[3],
                alt: itemVideoSplit[4],
            }
            videoCate.push(videoItem);
        });
        const itemCateSplit = item.cate_info.split('\r\n');
        itemCate = {
            category: itemCateSplit[0],
            description: itemCateSplit[1],
            thumb: itemCateSplit[2],
            alt: itemCateSplit[3],
            item: videoCate,
        }
        video_kn_2_0_0_data.push(itemCate);
    });
    return video_kn_2_0_0_data;
};

let cateIndexVideo = 0;
let tabsVideo = [];
let video_kn_2_0_0_data = [];

const getThumbYoutube = (url) => {
    let video_id = url.split('v=')[1];
    const ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    return `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;
}

const getIdYoutube = (url) => {
    let video_id = url.split('v=')[1];
    const ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
}

const filterDataVideo = (filter) => video_kn_2_0_0_data.filter(item => item.category === filter);
const handleCateVideo = (item) => {
    cateVideo = item;
    cateIndexVideo = tabsVideo.indexOf(item);
    renderVideo();
}
const nextCateVideo = () => {
    if (cateIndexVideo < tabsVideo.length - 1) {
        cateIndexVideo++;
    } else {
        cateIndexVideo = 0;
    }
    cateVideo = tabsVideo[cateIndexVideo];
    renderVideo();
}
const preCateVideo = () => {
    if (cateIndexVideo > 0) {
        cateIndexVideo--;
    } else {
        cateIndexVideo = tabsVideo.length - 1;
    }
    cateVideo = tabsVideo[cateIndexVideo];
    renderVideo();
}

const nextCateVideoMb = () => {
    if (cateIndexVideo < tabsVideo.length - 1) {
        cateIndexVideo++;
    } else {
        cateIndexVideo = 0;
    }
    cateVideo = tabsVideo[cateIndexVideo];
    renderVideoMb();
}
const preCateVideoMb = () => {
    if (cateIndexVideo > 0) {
        cateIndexVideo--;
    } else {
        cateIndexVideo = tabsVideo.length - 1;
    }
    cateVideo = tabsVideo[cateIndexVideo];
    renderVideoMb();
}

const renderCate = () => {
    document.querySelector('.video_kn_2_0_0__categories').innerHTML = ` 
    <button onclick="preCateVideo()">❮</button>
    <ul>
    ${tabsVideo.map(item => {
        return `<li class="${cateVideo === item ? 'video_kn_2_0_0__category--active' : ''}" onclick="handleCateVideo('${item}')">${item}</li>`
    }).join('')}
    </ul>
    <button onclick="nextCateVideo()">❯</button>`
};

const renderCateMb = () => {
    document.querySelector('.video_kn_2_0_0__categories').innerHTML = ` 
    <button onclick="preCateVideoMb()">❮</button>
    <ul>
    ${tabsVideo.map(item => {
        return `<li class="${cateVideo === item ? 'video_kn_2_0_0__category--active' : ''}">${item}</li>`
    }).join('')}
    </ul>
    <button onclick="nextCateVideoMb()">❯</button>`
};

const removeDuplicate = (array) =>
    array.filter((item, index) => {
        return array.indexOf(item) === index;
    });

const renderSeasonEp = (cate, className) => {
    let index = '';
    if (className) {
        index = document.querySelector(`.${className}`).value;
    }
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    const dataSeasons = [];
    const dataEpisode = [];
    const dataCate = filterDataVideo(cate);
    dataCate[0].item.map(item => dataSeasons.push(item.season));
    const dataSeason = removeDuplicate(dataSeasons);
    const dataEpisodeBySeason = dataCate[0].item.filter(item => item.season === dataSeason[!className ? 0 : getKeyByValue(dataSeason, index)]);
    dataEpisodeBySeason.map(item => dataEpisode.push(item.episode));
    let selectItemSeason = '';
    let selectItemEpisode = '';
    dataSeason.map(item => selectItemSeason += `
        <option value="${item}">${item}</option>
    `);
    dataEpisode.map(item => selectItemEpisode += `
        <option value="${item}">${item}</option>
    `);
    if (!className) document.querySelector('.video_kn_2_0_0__selectChoice--ss').innerHTML = selectItemSeason;
    document.querySelector('.video_kn_2_0_0__selectChoice--ep').innerHTML = selectItemEpisode;
    if (className) {
        renderVideoLink(cate, className, 'video_kn_2_0_0__selectChoice--ep');
    }
}

const renderVideoLink = (cate, season, ep) => {
    const dataCate = filterDataVideo(cate);
    let seasonNow = dataCate[0].item[0].season;
    let epNow = dataCate[0].item[0].episode;
    if (season) seasonNow = document.querySelector(`.${season}`).value;
    if (ep) epNow = document.querySelector(`.${ep}`).value;
    const dataVideo = dataCate[0].item.filter(item => item.season === seasonNow && item.episode === epNow);

    document.querySelector('.video_kn_2_0_0 .video_kn_2_0_0__video').innerHTML = `
        <div class="video_kn_2_0_0__thumb"><img width="664" height="363" src="${dataVideo[0].thumb ? dataVideo[0].thumb : getThumbYoutube(dataVideo[0].link)}" alt="${dataVideo[0].alt}"><a href="${dataVideo[0].link}" class="video_kn_2_0_0__play" target="_blank" aria-label="play"><img width="208" height="208" src="${video_kn_2_0_0_url}images/play.png" alt="${dataVideo[0].alt}"></a></div>
        <div class="video_kn_2_0_0__title">
            <span class="video_kn_2_0_0__name">${dataCate[0].category}</span>
            <span class="video_kn_2_0_0__ep">${dataVideo[0].episode}</span>
        </div>
    `
}

const renderVideoBox = (data) => {
    const dataItem = data[0];

    document.querySelector('.video_kn_2_0_0 .video_kn_2_0_0__inner').classList.remove('video_kn_2_0_0__inner1');
    document.querySelector('.video_kn_2_0_0 .video_kn_2_0_0__inner').innerHTML = `
    <div class="video_kn_2_0_0__select">
        <div class="video_kn_2_0_0__thumbCate">
            <img width="271" height="275" src="${dataItem.thumb}" alt="${dataItem.alt}">
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
    renderSeasonEp(cateVideo);
    renderVideoLink(cateVideo);
}

const renderVideoLinkMB = (cate, season, ep) => {
    const dataCate = filterDataVideo(cate);
    const dataVideo = dataCate[0].item.filter(item => item.season === season && item.episode === ep);
    document.querySelector('.video_kn_2_0_0 .video_kn_2_0_0__video').innerHTML = `
        <div class="video_kn_2_0_0__thumb"><img width="664" height="363" src="${dataVideo[0].thumb ? dataVideo[0].thumb : getThumbYoutube(dataVideo[0].link)}" alt="${dataVideo[0].alt}"><a href="${dataVideo[0].link}" class="video_kn_2_0_0__play" target="_blank" aria-label="play"><img width="208" height="208" src="${video_kn_2_0_0_url}images/play.png" alt="${dataVideo[0].alt}"></a></div>
        <div class="video_kn_2_0_0__title">
            <span class="video_kn_2_0_0__name">${dataCate[0].category}</span>
            <span class="video_kn_2_0_0__ep">${dataVideo[0].episode}</span>
        </div>
    `;
}

const renderVideoBoxMb = (data) => {
    let html = '';
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].item.length; j++) {
            html += `
            <div>
            <div class="video_kn_2_0_0__item" onclick="renderVideoLinkMB('${data[i].category}', '${data[i].item[j].season}', '${data[i].item[j].episode}')">
                <div class="video_kn_2_0_0__titleItem">${data[i].category} <br> ${data[i].item[j].season} ${data[i].item[j].episode}</div>
                <div class="video_kn_2_0_0__thumb">
                    <img width="271" height="275" src="${data[i].thumb}" alt="${data[i].item[j].alt}">
                </div>
            </div>
            </div>
            `
        }
    }

    document.querySelector('.video_kn_2_0_0 .video_kn_2_0_0__inner1').innerHTML = `
    <div class="video_kn_2_0_0__select">${html}</div>
    <div class="video_kn_2_0_0__video"></div>
    `;
    const dataCateFirst = filterDataVideo(cateVideo);
    renderVideoLinkMB(cateVideo, dataCateFirst[0].item[0].season, dataCateFirst[0].item[0].episode);

}

const renderVideo = () => {
    renderCate();
    if (cateVideo === 'Kangnam') {
        const data = filterDataVideo(cateVideo);
        renderVideoCateKangnam(data[0]);
    } else {
        renderVideoBox(filterDataVideo(cateVideo));
    }
}

const renderVideoMb = () => {
    renderCateMb();
    if (cateVideo === 'Kangnam') {
        const data = filterDataVideo(cateVideo);
        renderVideoCateKangnam(data[0]);
    } else {
        renderVideoBoxMb(filterDataVideo(cateVideo));
    }
}

const renderVideoCateKangnam = (data) => {
    const thumb =  data.item.slice(1).map(item => {
        return `
        <div class="video_kn_2_0_0__single" onclick="modalVid('${getIdYoutube(item.link)}')">
        <div class="video_kn_2_0_0__thumbnail">
        <img width="664" height="363" src="${item.thumb ? item.thumb : getThumbYoutube(item.link)}" alt="">
        </div>
        <div class="video_kn_2_0_0__open"></div>
        <div class="video_kn_2_0_0__text">${item.alt}</div>
        </div>
        `;
    });
    document.querySelector('.video_kn_2_0_0 .video_kn_2_0_0__inner').classList.add('video_kn_2_0_0__inner1');
    document.querySelector('.video_kn_2_0_0 .video_kn_2_0_0__inner').innerHTML = `
    <div>
        <div class="video_kn_2_0_0__main">
            <div class="video_kn_2_0_0__content">${data.description}</div>
            <div class="video_kn_2_0_0__vidMain" onclick="modalVid('${getIdYoutube(data.item[0].link)}')">
                <div class="video_kn_2_0_0__thumbnail">
                    <img width="664" height="363" src="${data.item[0].thumb ? data.item[0].thumb : getThumbYoutube(data.item[0].link)}" alt="">
                </div>
                <div class="video_kn_2_0_0__open"></div>
            </div>
        </div>
        <div class="video_kn_2_0_0__list">
            <div class="video_kn_2_0_0__scroll">${thumb.join('')}</div>
        </div>
    </div>
    `;
    funcDrag('.video_kn_2_0_0__list');
}

const modalVid = (id) => {
    document.body.insertAdjacentHTML("beforeend", `
    <div class="modal modal-clipBox" id="modal-clip" style="display:flex">
        <div class="modal-closePic" id="modal-closePic" onclick="removeModal('modal-clip')">×</div>
        <div class="modal-box modal-box-video animate-zoom">
            <div class="modal-video">
                <iframe id="youtube" src="//www.youtube-nocookie.com/embed/${id}?rel=0&amp;controls=1&amp;autoplay=1&amp;nocookie=true&amp;mute=true" frameborder="0" allowfullscreen=""></iframe>
            </div>
        </div>
        <div class="modal-bg" id="modal-bg" onclick="removeModal('modal-clip')"></div>
    </div>
    `);
}
const removeModal = (id) => {
    document.getElementById(id).remove();
}

queryVideo().then(video_kn_2_0_0_data2 => {
    video_kn_2_0_0_data2.map(item => tabsVideo.push(item.category));
    video_kn_2_0_0_data = video_kn_2_0_0_data2;
    if (window.innerWidth < 767) {
        renderVideoMb();
    } else {
        renderVideo();
    }
}).catch(error => console.log(error));


const funcDrag = (element) => {
    let mouseDown = false;
    let startX, scrollLeft;
    const slider = document.querySelector(element);

    const startDragging = (e) => {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    const stopDragging = (e) => {
        mouseDown = false;
    }

    const move = (e) => {
        e.preventDefault();
        if (!mouseDown) { return; }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
    }
    // Add the event listeners
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
};



// window.addEventListener("resize", () => location.reload());