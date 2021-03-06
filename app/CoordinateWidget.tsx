import {
    subclass,
    property,
} from "esri/core/accessorSupport/decorators";

import { tsx } from "esri/widgets/support/widget";

import Widget = require("esri/widgets/Widget");

const CSS = {
    base: "esri-coordinate-widget",
    emphasis: "esri-coordinate-widget--emphasis",
};

@subclass("esri.widgets.CoordinateWidget")
class CoordinateWidget extends Widget {
    constructor(params?: any) {
        super(params);
    }

    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    //  firstName
    //----------------------------------

    @property()
    latitude: Number;

    //----------------------------------
    //  lastName
    //----------------------------------

    @property()
    longitude: Number;

    @property()
    address: String;
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    render() {
        return (
            <div class={this.classes(CSS.base)}>
                <p>Getroffrene Koordinate: </p>
                <p>Längengrad: {this.longitude}</p>
                <p>Breitengrad: {this.latitude}</p>
                <p>Adresse: {this.address}</p>
            </div>
        );
    }

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
}

export = CoordinateWidget;
