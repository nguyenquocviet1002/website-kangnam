const eventService = () => {
    const elmHover = document.querySelectorAll('.service_kn_2_0_0__itemHover');
    for (let i = 0; i < elmHover.length; i++) {
        const elmId = elmHover[i].getAttribute('data-id');
        elmHover[i].addEventListener('mouseover', () => {
            console.log(1)
            const innerData = dataService.filter(item => item.label === elmId);
            document.querySelector(`#${elmId}`).innerHTML = innerData[0].layout;
        })
        elmHover[i].addEventListener('mouseout', () => {
            console.log(2)
            document.querySelector(`#${elmId}`).innerHTML = '';
        })
    }
}
eventService();

