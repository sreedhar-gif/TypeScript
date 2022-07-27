var Qn3 = /** @class */ (function () {
    function Qn3(array) {
        this.arr = [];
        this.arr = array;
    }
    Qn3.prototype.ReverseOfArray = function () {
        var revarr = this.arr.reverse();
        console.log("THE REVERSE OF GIVEN ARRAY IS : " + revarr);
    };
    return Qn3;
}());
var arr = [25, 36, 45, 8];
var r = new Qn3(arr);
r.ReverseOfArray();
