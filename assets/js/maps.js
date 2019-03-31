// Global Variables
var earthMap; 

// Initialise map of Earth upon site loading    
function initMap() {
    var earth = new google.maps.LatLng(42.170563, -12.619099);                  
    earthMap = new google.maps.Map(
        document.getElementById('map'), {center: earth, zoom: 2,
        disableDefaultUI: true        
    });    
}     