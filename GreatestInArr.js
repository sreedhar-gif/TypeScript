var GreatestInArr = /** @class */ (function () {
    function GreatestInArr(array) {
        this.arr = [];
        this.arr = array;
    }
    GreatestInArr.prototype.Greatest = function () {
        var temp = this.arr[0];
        this.arr.forEach(function (element) {
            if (element > temp) {
                temp = element;
            }
        });
        return temp + "  is greatest";
    };
    return GreatestInArr;
}());
var arr = [25, 36, 45, 8];
var ga = new GreatestInArr(arr);
console.log(ga.Greatest());
