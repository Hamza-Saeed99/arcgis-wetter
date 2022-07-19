const esriKey = config.ARCGIS_API_KEY;
const googleKey = config.GOOGLE_API_KEY;
const weatherKey = config.WEATHER_API_KEY;
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/BasemapToggle",
    "./app/CoordinateWidget.js",
    "./app/WeatherWidget.js",
], function (
    esriConfig,
    Map,
    MapView,
    FeatureLayer,
    BasemapToggle,
    CoordinateWidget,
    WeatherWidget
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

    view.on("click", (event) => {
        clickEvent(event);
    });

    const toggle = new BasemapToggle({
        view: view,
        nextBasemap: "gray-vector",
        container: document.createElement("div"),
    });

    // Add the widget to the top-right corner of the view
    view.ui.add(toggle, {
        position: "bottom-left",
    });

    let coordWidget;
    let weatherWidget;

    async function clickEvent(event) {
        view.ui.remove(coordWidget);
        view.ui.remove(weatherWidget);

        const locationJSON = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.mapPoint.latitude},${event.mapPoint.longitude}
            &key=${googleKey}`
        );
        let location = await locationJSON.json();
        location = JSON.stringify(location);
        location = JSON.parse(location);
        console.log(location);
        coordWidget = new CoordinateWidget({
            latitude: event.mapPoint.latitude,
            longitude: event.mapPoint.longitude,
            address: location.results[0].formatted_address,
        });

        const weatherJSON = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${event.mapPoint.latitude}&lon=${event.mapPoint.longitude}&appid=${weatherKey}&units=metric`
        );
        let weather = await weatherJSON.json();
        weather = JSON.stringify(weather);
        weather = JSON.parse(weather);
        console.log(weather);
        weatherWidget = new WeatherWidget({
            city: weather.city.name,
            weather: weather.list,
        });

        view.ui.add(coordWidget, {
            position: "top-right",
        });

        view.ui.add(weatherWidget, {
            position: "top-right",
        });
    }
});
