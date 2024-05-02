// Get API Header
const getData_news_kn_2_0_0 = async (count, postID) => {
    const response = await fetch(`https://benhvienthammykangnam.vn/wp-json/api/v1/latest-news/${count}/${postID}/`);
    const data = await response.json();
    console.log(data);
    return data;
};

const getRandomElements = (arr, count) => {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

async function news_kn_2_0_0(count, postID) {
    const data = await getData_news_kn_2_0_0(count, postID);

    const showData = getRandomElements(data, 3);

    const news_list = showData.map((item) => {
        return `
            <a href="${item.permalink}" class="news_kn_2_0_0__item">
              <div class="news_kn_2_0_0__pic">
                <img src="${item.thumbnail}">
              </div>
              <h3 class="news_kn_2_0_0__text">${item.title}</h3>
              <p class="news_kn_2_0_0__excerpt">${item.excerpt}</p>
              <p class="news_kn_2_0_0__btn">Xem chi tiết</p>
            </a>
        `;
    }).join('');

    const content = document.querySelector('.news_kn_2_0_0__box');
    const contentNews = document.querySelector('.news_kn_2_0_0__boxNews');

    if(content){
        contentNews.insertAdjacentHTML('beforeend', news_list);
        contentNews.classList.add('active');
    }
};

document.addEventListener("DOMContentLoaded", function() {
    news_kn_2_0_0(9, 8);
})