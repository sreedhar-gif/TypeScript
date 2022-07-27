var Student = /** @class */ (function () {
    function Student(Id, name, clas) {
        this.stdID = Id;
        this.stdName = name;
        this.stdClass = clas;
    }
    Student.prototype.display = function () {
        console.log("Details of student is");
        console.log("ID : " + this.stdID);
        console.log("Name : " + this.stdName);
        console.log("Class : " + this.stdClass);
        console.log();
    };
    return Student;
}());
var s1 = new Student(55, "Akshay", 10);
var s2 = new Student(50, "Pramod", 9);
s1.display();
s2.display();
