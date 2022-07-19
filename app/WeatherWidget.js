define([
    "tslib",
    "esri/core/accessorSupport/decorators",
    "esri/widgets/support/widget",
    "esri/widgets/Widget",
], function (tslib_1, decorators_1, widget_1, Widget) {
    "use strict";
    var CSS = {
        base: "esri-weather-widget",
        emphasis: "esri-weather-widget--emphasis",
    };
    var WeatherWidget = /** @class */ (function (_super) {
        tslib_1.__extends(WeatherWidget, _super);
        function WeatherWidget(params) {
            var _this = _super.call(this, params) || this;
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  city
            //----------------------------------
            _this.city;
            //----------------------------------
            //  weather
            //----------------------------------
            _this.weather;

            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        WeatherWidget.prototype.render = function () {
            var _a;
            var classes = ((_a = {}), _a);
            return widget_1.tsx(
                "div",
                { class: this.classes(CSS.base) },
                widget_1.tsx(
                    "p",
                    null,
                    "Wettervorhersage für " + this.city + ":"
                ),
                addWeather(this.weather[0]),
                addWeather(this.weather[1]),
                addWeather(this.weather[2]),
                addWeather(this.weather[3]),
                addWeather(this.weather[4]),
                addWeather(this.weather[5]),
                addWeather(this.weather[6]),
                addWeather(this.weather[7]),
                addWeather(this.weather[8]),
                addWeather(this.weather[9])
            );
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        function addWeather(info) {
            return widget_1.tsx(
                "div",
                { class: "forecast" },
                widget_1.tsx(
                    "button",
                    {
                        class: "collapsible",
                        onclick: collapsibleEventListener,
                    },
                    widget_1.tsx(
                        "span",
                        null,
                        `${
                            info.dt_txt.split("-")[1] +
                            "." +
                            info.dt_txt.split("-")[2] //date + time
                        }`
                    ),
                    widget_1.tsx(
                        "span",
                        null,
                        `${info.main.temp} ºC`
                    ),
                    widget_1.tsx(
                        "img",
                        {
                            src: `http://openweathermap.org/img/wn/${info.weather[0].icon}.png`,
                            alt: `${info.weather[0].description}`,
                        },
                        ``
                    )
                ), // button and inside elements
                widget_1.tsx(
                    "div",
                    { class: "content" },
                    widget_1.tsx(
                        "p",
                        { class: "flex" },
                        widget_1.tsx(
                            "span",
                            null,
                            `Gefühlte: ${info.main.feels_like} ºC`
                        ),
                        widget_1.tsx(
                            "span",
                            null,
                            ` Windstärke: ${info.wind.speed} km/h`
                        )
                    ),
                    widget_1.tsx(
                        "p",
                        { class: "flex" },
                        widget_1.tsx(
                            "span",
                            null,
                            `Luftfeuchtigkeit: ${info.main.humidity}%`
                        ),
                        widget_1.tsx(
                            "span",
                            null,
                            ` Druck: ${info.main.pressure} hPa`
                        )
                    )
                )
            );
        }

        function collapsibleEventListener() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        }
        tslib_1.__decorate(
            [decorators_1.property()],
            WeatherWidget.prototype,
            "city",
            void 0
        );
        tslib_1.__decorate(
            [decorators_1.property()],
            WeatherWidget.prototype,
            "weather",
            void 0
        );
        WeatherWidget = tslib_1.__decorate(
            [decorators_1.subclass("esri.widgets.weatherWidget")],
            WeatherWidget
        );
        return WeatherWidget;
    })(Widget);
    return WeatherWidget;
});
