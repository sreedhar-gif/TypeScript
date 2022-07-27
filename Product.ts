class Product
{   gst?;
    constructor(private ProID:number,
        private ProName:string,
        private ProPrice:number,
        gst1?){this.gst=gst1;}
        getProID(){
            return this.ProID;
        }
        setProID(ID:number){
            this.ProID=ID;}
        getProName(){
            return this.ProName;
        }
        setProName(name:string){
            this.ProName=name;}
        getProPrice(){
            return this.ProPrice;
        }
        setProPrice(price:number){
            this.ProPrice=price;}
        UpdatePrice()
        {
            if(this.gst!= null)
            {
            return this.ProPrice+this.gst*this.ProPrice/100;}
            else
            {
                return this.ProPrice;
            }
        }
        display()
        {
            console.log("PRODUCT DETAILS  : ");
            console.log("ID : "+this.ProID +"Name  : "+ this.ProName +"Price : ")
        }
}
var pr1=new Product(123,"phone",15000);
console.log("MRP of the product is :"+ pr1.UpdatePrice());
var pr2=new Product(124,"earphone",1500,18);
console.log("MRP :"+ pr2.UpdatePrice());