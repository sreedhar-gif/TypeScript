var Qn2 = /** @class */ (function () {
    function Qn2(array) {
        this.arr = [];
        this.arr = array;
    }
    Qn2.prototype.Contains = function (num) {
        this.arr.forEach(function (element) {
            if (element == num) {
                console.log(num + "is present");
            }
        });
    };
    return Qn2;
}());
var arr = [25, 36, 45, 8];
var a = new Qn2(arr);
a.Contains(8);
