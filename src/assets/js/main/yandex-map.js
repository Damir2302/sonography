function addYaMaps () {
    var myMap;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map('map', {
            center: [55.747928, 38.010795],
            zoom: 15,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark([55.748339, 38.010758], {
        // balloonContentHeader: "",
        // balloonContentBody: ""

    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/map_pointer.svg',
        iconImageSize: [28, 37],
        iconImageOffset: [-37, -45],
        balloonOffset:[-25, -5]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    }
}

if ($('#map').length != 0) {
    addYaMaps ();
}