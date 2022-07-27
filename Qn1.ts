class Qn1
{
    a:number;
    b:number;
    c:number;
    constructor (n1:number,n2:number,n3:number)
    {
        this.a=n1;
        this.b=n2;
        this.c=n3;
    }
    greatest(a,b,c)
    {
        if(a>b && a>c)
        {
            console.log(a + " is greatest.");
        }
        if(b>a && b>c)
        {
            console.log(b + " is greatest.");
        }
        if(c>a && c>b)
        {
            console.log(c + " is greatest.");
        }

    }
}
var g=new Qn1(12,25,89);
g.greatest(12,25,89);