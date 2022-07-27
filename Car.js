var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(carspeed, carregularPrice, carcolor) {
        this.speed = carspeed;
        this.regularPrice = carregularPrice;
        this.color = carcolor;
    }
    Car.prototype.getSalePrice = function () {
        return this.regularPrice;
    };
    return Car;
}());
var truck = /** @class */ (function (_super) {
    __extends(truck, _super);
    function truck(truckspeed, truckregularPrice, truckcolor, truckweight) {
        var _this = _super.call(this, truckspeed, truckregularPrice, truckcolor) || this;
        _this.weight = truckweight;
        return _this;
    }
    truck.prototype.getSalePrice = function () {
        if (this.weight > 2000) {
            return this.regularPrice * 0.9;
        }
        else {
            return this.regularPrice * 0.8;
        }
    };
    return truck;
}(Car));
var c = new Car(200, 200000, "blue");
console.log("Car Price is : Rs. " + c.getSalePrice());
var t = new truck(100, 500000, "black", 2500);
console.log("The dicounted price of the truck is : Rs. " + t.getSalePrice());
