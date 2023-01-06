

class Rectangle{
    constructor(l,b){
        this.length = l
        this.bredth = b
    }
    area(){
        return this.length+this.bredth
    }
    totalprice(price){
        return (this.length+this.bredth) * price
    }
}

var rec1 = new Rectangle(5,4)

var rec2 = new Rectangle(20,5)
console.log(rec1.area())
console.log(rec2.area())
console.log(rec1.totalprice(1000))