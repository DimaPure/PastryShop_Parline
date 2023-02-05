let center =[48.70573102787348,44.51388009595795];

function init(){
    let map = new ymaps.Map('map',{
        center:center,
        zoom:13
    });

    // let placemark = new ymaps.Placemark(center,{},{

    // });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    // map.geoObjects.add(placemark);

}
ymaps.ready(init);