var Product = /** @class */ (function () {
    function Product(ProID, ProName, ProPrice, gst1) {
        this.ProID = ProID;
        this.ProName = ProName;
        this.ProPrice = ProPrice;
        this.gst = gst1;
    }
    Product.prototype.getProID = function () {
        return this.ProID;
    };
    Product.prototype.setProID = function (ID) {
        this.ProID = ID;
    };
    Product.prototype.getProName = function () {
        return this.ProName;
    };
    Product.prototype.setProName = function (name) {
        this.ProName = name;
    };
    Product.prototype.getProPrice = function () {
        return this.ProPrice;
    };
    Product.prototype.setProPrice = function (price) {
        this.ProPrice = price;
    };
    Product.prototype.UpdatePrice = function () {
        if (this.gst != null) {
            return this.ProPrice + this.gst * this.ProPrice / 100;
        }
        else {
            return this.ProPrice;
        }
    };
    Product.prototype.display = function () {
        console.log("PRODUCT DETAILS  : ");
        console.log("ID : " + this.ProID + "Name  : " + this.ProName + "Price : ");
    };
    return Product;
}());
var pr1 = new Product(123, "phone", 15000);
console.log("MRP of the product is :" + pr1.UpdatePrice());
var pr2 = new Product(124, "earphone", 1500, 18);
console.log("MRP :" + pr2.UpdatePrice());
