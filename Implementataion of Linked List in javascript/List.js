class Node{
    constructor(el){
        this.el = el
        this.next = null
    }
}

function Ele(name,score){
    this.name = name
    this.score = score
}

const ele = new Ele('ram', 15)
console.log(ele)