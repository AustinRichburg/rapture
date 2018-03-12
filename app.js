function initMap() {
    var coords = {lat: 63.03, lng: -29.916};
    var map = new google.maps.Map(document.getElementById("rap-map"), {
        zoom: 6,
        center: coords
    });
    var marker = new google.maps.Marker({
        position: coords,
        map: map
    });
}
