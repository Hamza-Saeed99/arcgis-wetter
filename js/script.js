const esriKey = config.ARCGIS_API_KEY;
const googleKey = config.GOOGLE_API_KEY;
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/BasemapToggle",
    "./app/CoordinateWidget.js",
], function (
    esriConfig,
    Map,
    MapView,
    FeatureLayer,
    BasemapToggle,
    CoordinateWidget
) {
    esriConfig.apiKey = esriKey;

    const map = new Map({
        basemap: "dark-gray-vector",
    });

    const citiesFeature = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Cities/FeatureServer/",
    });

    map.add(citiesFeature);

    const view = new MapView({
        map: map,
        center: [7.617666282989515, 51.96301210812659], // Longitude, latitude
        zoom: 13, // Zoom level
        container: "viewDiv", // Div element
    });

    view.on("click", clickEvent);

    const toggle = new BasemapToggle({
        view: view,
        nextBasemap: "gray-vector",
        container: document.createElement("div"),
    });

    // Add the widget to the top-right corner of the view
    view.ui.add(toggle, {
        position: "bottom-left",
    });

    let widget;

    async function clickEvent(event) {
        view.ui.remove(widget);

        const locationJSON = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.mapPoint.latitude},${event.mapPoint.longitude}
            &key=${googleKey}`
        );
        let location = await locationJSON.json();
        location = JSON.stringify(location);
        location = JSON.parse(location);
        console.log(location);
        widget = new CoordinateWidget({
            latitude: event.mapPoint.latitude,
            longitude: event.mapPoint.longitude,
            address: location.results[0].formatted_address,
        });

        view.ui.add(widget, {
            position: "top-right",
        });
    }
});
