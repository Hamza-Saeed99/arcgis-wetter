define([
    "tslib",
    "esri/core/accessorSupport/decorators",
    "esri/widgets/support/widget",
    "esri/widgets/Widget",
], function (tslib_1, decorators_1, widget_1, Widget) {
    "use strict";
    var CSS = {
        base: "esri-coordinate-widget",
        emphasis: "esri-coordinate-widget--emphasis",
    };
    var CoordinateWidget = /** @class */ (function (_super) {
        tslib_1.__extends(CoordinateWidget, _super);
        function CoordinateWidget(params) {
            var _this = _super.call(this, params) || this;
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  firstName
            //----------------------------------
            _this.latitude;
            //----------------------------------
            //  lastName
            //----------------------------------
            _this.longitude;

            _this.address;
            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        CoordinateWidget.prototype.render = function () {
            var _a;
            var classes = ((_a = {}), _a);
            return widget_1.tsx(
                "div",
                { class: this.classes(CSS.base) },
                widget_1.tsx("p", null, "Getroffene Koordinate"),
                widget_1.tsx(
                    "p",
                    null,
                    "Longitude: " + this.longitude
                ),
                widget_1.tsx("p", null, "Latitude: " + this.latitude),
                widget_1.tsx("p", null, "Address: " + this.address)
            );
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        tslib_1.__decorate(
            [decorators_1.property()],
            CoordinateWidget.prototype,
            "longitude",
            void 0
        );
        tslib_1.__decorate(
            [decorators_1.property()],
            CoordinateWidget.prototype,
            "latitude",
            void 0
        );
        tslib_1.__decorate(
            [decorators_1.property()],
            CoordinateWidget.prototype,
            "address",
            void 0
        );
        CoordinateWidget = tslib_1.__decorate(
            [decorators_1.subclass("esri.widgets.CoordinateWidget")],
            CoordinateWidget
        );
        return CoordinateWidget;
    })(Widget);
    return CoordinateWidget;
});
