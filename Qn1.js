var Qn1 = /** @class */ (function () {
    function Qn1(n1, n2, n3) {
        this.a = n1;
        this.b = n2;
        this.c = n3;
    }
    Qn1.prototype.greatest = function (a, b, c) {
        if (a > b && a > c) {
            console.log(a + " is greatest.");
        }
        if (b > a && b > c) {
            console.log(b + " is greatest.");
        }
        if (c > a && c > b) {
            console.log(c + " is greatest.");
        }
    };
    return Qn1;
}());
var g = new Qn1(12, 25, 89);
g.greatest(12, 25, 89);
