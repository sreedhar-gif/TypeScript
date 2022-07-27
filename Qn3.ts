class Qn3
{
    arr:number[]=[];
    constructor(array:number[])
    {
        this.arr=array;
    }
    ReverseOfArray()
    {
        var revarr:number[]=this.arr.reverse();
        console.log("THE REVERSE OF GIVEN ARRAY IS : " + revarr);
    }

}
var arr:number[]=[25,36,45,8] 
var r=new Qn3(arr);
r.ReverseOfArray();