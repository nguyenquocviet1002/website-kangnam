const box = document.getElementById('story_kn_1_0_0__box');

dataPerson.forEach(person => {
    const itemHTML = `
        <a href="${person.link}" class="story_kn_1_0_0__item">
            <div class="story_kn_1_0_0__pic">
                <img width="356" height="503" src="${person.img}" alt="${person.name}">
            </div>
            <div class="story_kn_1_0_0__info">
                <h2 class="story_kn_1_0_0__name">${person.name}</h2>
                <ul class="story_kn_1_0_0__service" id="story_kn_1_0_0__service">${person.groupService}</ul>
            </div>
        </a>
    `;
    box.innerHTML += itemHTML;
});