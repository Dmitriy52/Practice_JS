let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 56.3268135014335, lng: 44.00332235447212},
        zoom: 8,
        scrollwheel: true
    });
}

initMap();