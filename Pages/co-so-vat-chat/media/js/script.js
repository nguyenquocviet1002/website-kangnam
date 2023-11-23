function runSlide({ data = [], position = '', isPagination = false, isControl = false, time = 6000, thumb = false }) {
    try {
        let index = 0;

        const innerSlide = document.createElement('div');
        innerSlide.classList.add('inner__slide');
        document.querySelector(`.${position}`).appendChild(innerSlide);

        const img = document.querySelector(`.${position} img`);
        document.querySelector(`.${position}`).setAttribute('style', 'min-height:' + (img.clientHeight + 5) + 'px');
        

        const removeSlideIndex = () => {
            if (document.querySelector(`.${position} img`)) {
                document.querySelector(`.${position} img`).remove();
            }
        }
        const myTimer = () => {
            if (index >= data.length - 1) {
                renderCard(0);
                index = 0;
            } else {
                removeSlideIndex();
                renderCard(++index);
            }
        }
        let myInter = setInterval(myTimer, time)

        const activePagination = (index) => {
            const allPagination = document.querySelectorAll(`.${position} .pagination__item`);
            for (let i = 0; i < allPagination.length; i++) {
                allPagination[i].classList.remove('active');
            }
            document.getElementById(`pagination-${position}-${index}`).classList.add('active');
        }

        const renderCard = (index) => {
            document.querySelector(`.${position} .inner__slide`).innerHTML = data[index];
            setTimeout(() => {
                document.querySelector(`.${position} .inner__slide img`).classList.add('ani');
            }, 100)
            isPagination ? activePagination(index) : '';

            const lazy = document.querySelector(`.${position} .lazy`);
            if (checkVisible(lazy)) {
                const src = lazy.getAttribute('data-src');
                lazy.setAttribute('src', src);
            }
        }

        const changeSlide = (e) => {
            removeSlideIndex();
            const id = e.getAttribute('data-id');
            index = Number(id);
            renderCard(id);
            clearInterval(myInter);
            myInter = setInterval(myTimer, time);
        }

        const changeSlideControl = (id) => {
            if (id > data.length - 1) {
                id = 0;
                index = 0;
            } else if (id < 0) {
                id = 3;
                index = 3;
            }
            renderCard(id);
            clearInterval(myInter);
            myInter = setInterval(myTimer, time);
        }

        const pagination = () => {
            let html = '';
            for (let i = 0; i < data.length; i++) {
                html += `<span data-id='${i}' id="pagination-${position}-${i}" class="pagination__item">${!thumb ? i + 1 : data[i]}</span>`
            }
            document.querySelector(`.${position}`).insertAdjacentHTML("beforeend", `<div class="pagination">${html}</div>`);
            const paginationItem = document.querySelectorAll(`.${position} .pagination__item`);
            for (let i = 0; i < paginationItem.length; i++) {
                paginationItem[i].addEventListener('click', () => changeSlide(paginationItem[i]));
            }
            isPagination ? activePagination(0) : '';
        }
        isPagination ? pagination() : '';

        const nextSlide = () => {
            changeSlideControl(++index);
        }

        const prevSlide = () => {
            changeSlideControl(--index);
        }

        const nextPrevSlide = () => {
            document.querySelector(`.${position}`).insertAdjacentHTML("beforeend", `<div class="control"><button class="item__btn prev"></button><button class="item__btn next"></button></div>`);
            document.querySelector(`.${position} .next`).addEventListener('click', nextSlide);
            document.querySelector(`.${position} .prev`).addEventListener('click', prevSlide);
        }
        isControl ? nextPrevSlide() : '';

        function checkVisible(elm) {
            console.log("elm: ", elm);
            let rect = elm.getBoundingClientRect();
            let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        }
    } catch (error) {
        console.log('error')
    }
}

const dataRoom = [
    '<img width="1920" height="850" class="lazy" data-src="media/images/page4-1.webp?ver=1" alt="">',
    '<img width="1920" height="850" class="lazy" data-src="media/images/page4-2.webp" alt="">',
    '<img width="1920" height="850" class="lazy" data-src="media/images/page4-3.webp" alt="">',
    '<img width="1920" height="850" class="lazy" data-src="media/images/page4-4.webp" alt="">',
]

const dataRoom2 = [
    '<img width="1920" height="850" class="lazy" data-src="media/images/page5-1.webp" alt="">',
    '<img width="1920" height="850" class="lazy" data-src="media/images/page5-2.webp" alt="">',
    '<img width="1920" height="850" class="lazy" data-src="media/images/page5-3.webp" alt="">',
    '<img width="1920" height="850" class="lazy" data-src="media/images/page5-4.webp" alt="">',
    '<img width="1920" height="850" class="lazy" data-src="media/images/page5-5.webp" alt="">',
]

runSlide({
    data: dataRoom,
    position: 'slider_kn',
    isPagination: true,
});
runSlide({
    data: dataRoom2,
    position: 'slider_kn2',
    isPagination: true,
    thumb: true
});

