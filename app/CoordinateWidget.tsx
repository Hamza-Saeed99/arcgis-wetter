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

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    render() {
        return (
            <div class={this.classes(CSS.base)}>
                <p>Getroffrene Koordinate: </p>
                <p>Longitude: {this.longitude}</p>
                <p>Latitude: {this.latitude}</p>
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
