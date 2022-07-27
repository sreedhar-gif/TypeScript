class StudentDetails
{
    stdID:number;
    stdName:string;
    stdClass:number;
    constructor(Id:number,name:string,clas:number)
    {
        this.stdID=Id;
        this.stdName=name;
        this.stdClass=clas;
    }
    display()
    {
        console.log("Details of student is");
        console.log("ID : " +this.stdID);
        console.log("Name : " + this.stdName);
        console.log("Class : " + this.stdClass);
    }
}
var s1=new StudentDetails(55,"Akshay",10);
var s2=new StudentDetails(50,"Pramod",9);
s1.display();s2.display();