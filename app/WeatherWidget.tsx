import {
    subclass,
    property,
} from "esri/core/accessorSupport/decorators";

import { tsx } from "esri/widgets/support/widget";

import Widget = require("esri/widgets/Widget");

const CSS = {
    base: "esri-weather-widget",
    emphasis: "esri-weather-widget--emphasis",
};

@subclass("esri.widgets.weatherWidget")
class WeatherWidget extends Widget {
    constructor(params?: any) {
        super(params);
    }

    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    //  city
    //----------------------------------

    @property()
    city: string;

    //----------------------------------
    //  weather
    //----------------------------------

    @property()
    weather: any;

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    render() {
        return (
            <div class={this.classes(CSS.base)}>
                <p>Wettervorhersage für {this.city}: </p>
                <p></p>
            </div>
        );
    }

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
}

export = WeatherWidget;
