

class Person{
    constructor(name,city){
        this.name = name
        this.city = city
    }

    welcome(){
        return "welcome " + this.name + " from " + this.city
    }
}
var person1 = new Person("Ajay", "Patna")
var person2 = new Person("Aman", "Munger")

console.log(person2.welcome())