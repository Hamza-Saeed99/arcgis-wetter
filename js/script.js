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
    esriConfig.apiKey =
        "AAPKeb33e177756e4225bd577cec4349a9c72PYzrDgWeWqWrogZ5PteRqSlv95XVamtNYy1RbMybR-Wqe2UuJ0d_hvOln8RZ-R_";

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

    function clickEvent(event) {
        view.ui.remove(widget);
        console.log(event.mapPoint);
        widget = new CoordinateWidget({
            latitude: event.mapPoint.latitude,
            longitude: event.mapPoint.longitude,
            container: "widgetDiv",
        });
        view.ui.add(widget, {
            position: "top-right",
        });
    }
});
