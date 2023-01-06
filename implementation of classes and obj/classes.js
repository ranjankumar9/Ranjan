// classes -> classes are template for creating object


class person{
    constructor(name,city){
        this.name = name
        this.city = city
    }
}

var p1 = new person('Aman', 'Patna')
var p2 = new person('raj', 'Assam')
var p3 = new person('Ram', 'Goa')
var p4 = new person('rohan', 'Punjab')

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)