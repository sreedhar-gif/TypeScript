var Tshirt = /** @class */ (function () {
    function Tshirt(color, material, design) {
        this.color = color;
        this.material = material;
        this.design = design;
    }
    Tshirt.prototype.getcolor = function () {
        return this.color;
    };
    Tshirt.prototype.setcolor = function (Tcolor) {
        this.color = Tcolor;
    };
    Tshirt.prototype.getmaterial = function () {
        return this.material;
    };
    Tshirt.prototype.setmaterial = function (Tmaterial) {
        this.material = Tmaterial;
    };
    Tshirt.prototype.getdesign = function () {
        return this.design;
    };
    Tshirt.prototype.setdesign = function (Tdesign) {
        this.design = Tdesign;
    };
    Tshirt.prototype.display = function () {
        return "Details : color - " + this.color + " ; material -  "
            + this.material + " ; design :  " + this.design;
    };
    return Tshirt;
}());
var small = new Tshirt("blue", "cotton", "Polo t-shirt");
console.log("Small size Tshirt " + small.display());
var large = new Tshirt("green", "nylon", "Sports t-shirt");
console.log("Large size Tshirt " + large.display());
var XtraLarge = new Tshirt("red", "wollen", "Sweater");
console.log("Extra-Large size Tshirt " + XtraLarge.display());
