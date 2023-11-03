const eventService = () => {
    const elmHover = document.querySelectorAll('.service_kn_2_0_0__item');
    for (let i = 0; i < elmHover.length; i++) {
        elmHover[i].addEventListener('mouseover', () => {
            for (let i = 0; i < elmHover.length; i++) {
                const elmId = elmHover[i].getAttribute('data-id');
                if (elmId !== null) {
                    document.getElementById(elmId).innerHTML = '';
                }
            }
            const elmId = elmHover[i].getAttribute('data-id');
            const innerData = dataService.filter(item => item.label === elmId);
            if (innerData.length > 0) {
                document.getElementById(elmId).innerHTML = innerData[0].layout;
            }
        })
    }
}
eventService();

