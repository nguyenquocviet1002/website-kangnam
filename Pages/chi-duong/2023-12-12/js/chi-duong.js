const dataMap = [
    {
        id: 'hanoi-tc',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3724.805154065144!2d105.8284237!3d21.0004462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab920d07ad6b%3A0xaeafc086533191b!2zQuG7h25oIFZp4buHbiBUaOG6qW0gTeG7uSBLYW5nbmFtIEjDoG4gUXXhu5Fj!5e0!3m2!1svi!2s!4v1702026178190!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'hcm-nt',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3919.708828328706!2d106.6768914!3d10.756909!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1svi!2s!4v1702026685043!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'hcm-8',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.3122339219954!2d106.6621278!3d10.7873808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edf6f710189%3A0xb553f42d991d07dd!2zQuG7h25oIFZp4buHbiBUaOG6qW0gTeG7uSBLYW5nbmFtIEjDoG4gUXXhu5Fj!5e0!3m2!1svi!2s!4v1702026646810!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'bmt',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3892.4337942176326!2d108.0487746!3d12.6850853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7f994a16377%3A0xf8e562beb1c354f6!2zVmnhu4duIFRo4bqpbSBt4bu5IEthbmduYW0gQnXDtG4gTWEgVGh14buZdA!5e0!3m2!1svi!2s!4v1702026627063!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'bn',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.287914142448!2d106.0625037!3d21.180718599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350f3cad56fec1%3A0x734907fa5aaac9b1!2zVmnhu4duIFRo4bqpbSBt4bu5IEthbmduYW0gQuG6r2MgTmluaA!5e0!3m2!1svi!2s!4v1702026595392!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'hp',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3728.5500620946796!2d106.6735752!3d20.8498679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7a6251d08679%3A0x9e8f1b1211d7b17c!2zVmnhu4duIFRo4bqpbSBt4bu5IEthbmduYW0gSOG6o2kgUGjDsm5n!5e0!3m2!1svi!2s!4v1702026562363!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'th',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.8603248079326!2d105.77345629999999!3d19.803518599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f9321335c479%3A0xeb8d35306ae93428!2zVmnhu4duIFRo4bqpbSBt4bu5IEthbmduYW0gVGhhbmggSMOzYQ!5e0!3m2!1svi!2s!4v1702026526204!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'na',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3779.6943119126713!2d105.6863115!3d18.6777086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce767ba013b7%3A0xa2dbf32eeba5848b!2zVmnhu4duIFRo4bqpbSBt4bu5IEthbmduYW0gTmdo4buHIEFu!5e0!3m2!1svi!2s!4v1702026508907!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'dn',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9766391973194!2d108.2117179!3d16.066701999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184aee82846f%3A0x98cce44ffd8b8ad5!2zVmnhu4duIFRo4bqpbSBt4bu5IEthbmduYW0gxJDDoCBO4bq1bmc!5e0!3m2!1svi!2s!4v1702026485505!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'bd',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15667.478552974802!2d106.641974!3d10.9732111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f27333f54a9%3A0xcb98d62b47852265!2zVmnhu4duIFRo4bqpbSBt4bu5IEthbmduYW0gQsOsbmggRMawxqFuZw!5e0!3m2!1svi!2s!4v1702026463730!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'ct',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8032124522683!2d105.78136289999999!3d10.033091700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881feee43f81%3A0xdab1477d152c1bbf!2zVmnhu4duIFRo4bqpbSBt4bu5IEthbmduYW0gQ-G6p24gVGjGoQ!5e0!3m2!1svi!2s!4v1702026442844!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
        id: 'tn',
        frame: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3709.9294521907063!2d105.8430056!3d21.5886767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135275d95b8e0bf%3A0xccbe25c05407cc35!2zVmnhu4duIFRo4bqpbSBt4bu5IEthbmduYW0gVGjDoWkgTmd1ecOqbg!5e0!3m2!1svi!2s!4v1702026417240!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
]

const elmLocation = document.querySelectorAll('.location_kn_2_0_0__item');

const renderMap = (elm) => {
    const id = elm.getAttribute('data-id');
    const dataFrame = dataMap.filter(item => {
        return item.id === id
    })
    document.querySelector('.map_kn_2_0_0__map').innerHTML = dataFrame[0].frame;
    document.querySelector('.map_kn_2_0_0--1').scrollIntoView({ behavior: 'smooth', block: "center", inline: "nearest"});
}

for(let i = 0; i < elmLocation.length; i++){
    elmLocation[i].addEventListener('click', (e) => {
        const elmCall = elmLocation[i].querySelector('.callPC')
        if (elmCall.contains(e.target)){
            return true
        } else{
            renderMap(elmLocation[i]);
        }
    })
}

if (screen.width <= 767) {
    document.querySelector('#location_kn_2_0_0__hide').style.display = 'none'
    const item = document.querySelectorAll('.location_kn_2_0_0__item')
    for (let i = 3; i < item.length; i++) {
        item[i].style.display = 'none'
    }
    document.querySelector('#location_kn_2_0_0__viewMore').addEventListener('click', () => {
        document.querySelector('#location_kn_2_0_0__viewMore').style.display = 'none'
        document.querySelector('#location_kn_2_0_0__hide').style.display = 'block'
        for (let i = 3; i < item.length; i++) {
            item[i].style.display = 'block'
        }
    })
    document.querySelector('#location_kn_2_0_0__hide').addEventListener('click', () => {
        document.querySelector('#location_kn_2_0_0__hide').style.display = 'none'
        document.querySelector('#location_kn_2_0_0__viewMore').style.display = 'block'
        for (let i = 3; i < item.length; i++) {
            item[i].style.display = 'none'
        }
    })
}