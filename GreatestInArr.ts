class GreatestInArr
{
    arr:number[]=[];
    constructor(array:number[])
    {
        this.arr=array;
    }
    Greatest()
    {
        var temp:number=this.arr[0];
        this.arr.forEach(element => 
        {
        
        if(element >temp)
            {
                temp=element;
            }
        });
        return temp + "  is greatest";
    }
    
}
    var arr:number[]=[25,36,45,8] 
    var ga=new GreatestInArr(arr);
    console.log(ga.Greatest());