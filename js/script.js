$(document).ready(function () {

    var map = $('#map');
    if (map.length) {

        var myMap,
            myPlacemark;

        ymaps.ready(function () {

            myMap = new ymaps.Map("map", {
                center: [51.539825, 46.025651],
                zoom: 15
            });

            myPlacemark = new ymaps.Placemark([51.539825, 46.025651], {
                hintContent: 'PlaceMerk',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/place-mark.png',
                iconImageSize: [39, 52]
            });

            myMap.geoObjects.add(myPlacemark);

        });
    }

    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 9,
        controls: false,
        thumbItem: 4
    });

});