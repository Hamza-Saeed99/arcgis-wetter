require(["esri/config", "esri/Map", "esri/views/MapView"], function (
    esriConfig,
    Map,
    MapView
) {
    esriConfig.apiKey =
        "AAPKeb33e177756e4225bd577cec4349a9c72PYzrDgWeWqWrogZ5PteRqSlv95XVamtNYy1RbMybR-Wqe2UuJ0d_hvOln8RZ-R_";

    const map = new Map({
        basemap: "arcgis-topographic",
    });

    const view = new MapView({
        map: map,
        center: [7.628202, 51.961563], // Longitude, latitude
        zoom: 13, // Zoom level
        container: "viewDiv", // Div element
    });
});
