class Qn2
{
    arr:number[]=[];
    constructor(array:number[])
    {
        this.arr=array;
    }
    Contains(num:number)
    {
        this.arr.forEach(element => 
            {
            if(element == num)
            {
                console.log(num + "  is present");
            }
        });
    }

}
var arr:number[]=[25,36,45,8] 
var a=new Qn2(arr);
a.Contains(8);
