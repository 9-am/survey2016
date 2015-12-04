

Template.map.rendered = function() {
    // var map = L.map('map').setView([15, 32], 13);
    //


    mapboxgl.accessToken = 'pk.eyJ1IjoiZXNkZWF0aCIsImEiOiJjaWhvejlnejkwMDA1dmFsdXM0dnltaXVmIn0.egNoAITgAe6Lpo7MP1njDA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    // style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    style:  'mapbox://styles/esdeath/cihp2getn00h1bjknikmcio7k',
    center: [32.4709835, 15.6449837], // starting position
    // pitch: 80, // pitch in degrees
    zoom: 13 // starting zoom
});
// map.on('style.load', function () {
var ListMa = Cases.find().fetch();
for (var i = 0; i < ListMa.length; i++) {
    console.log(ListMa[i].LAT);
    var title = Survey.findOne({_id:ListMa[i].SURVEY_ID}).TITLE
    var tooltip = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat([ListMa[i].LONG, ListMa[i].LAT])
        // .setLngLat([32.53808404, 15.56161442])

        .setHTML(title)
        .addTo(map)
}
// });
map.addControl(new mapboxgl.Navigation());
}
