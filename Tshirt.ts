class Tshirt
{
    constructor(private color:string,
        private material:string,
        private design:string){}
    getcolor()
    {
        return this.color;
    }
    setcolor(Tcolor:string)
    {
        this.color=Tcolor;
    }
    getmaterial()
    {
        return this.material;
    }
    setmaterial(Tmaterial:string)
    {
        this.material=Tmaterial;
    }
    getdesign()
    {
        return this.design;
    }
    setdesign(Tdesign:string)
    {
        this.design=Tdesign;
    }
    display()
    {
        return "Details : color - "+this.color+" ; material -  "
                +this.material+" ; design :  "+this.design ;
    }
}
var small=new Tshirt("blue","cotton","Polo t-shirt");
console.log("Small size Tshirt "+small.display());
var large=new Tshirt("green","nylon","Sports t-shirt");
console.log("Large size Tshirt "+large.display());
var XtraLarge=new Tshirt("red","wollen","Sweater");
console.log("Extra-Large size Tshirt "+XtraLarge.display());