//  isEmpty()

class OurArray {
    constructor() {
        this.arr = []
        this.length = 0
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        else {
            return false
        }
    }
    push(ele) {
        this.arr[this.length] = ele
        this.length++;
    }

}

var arr = new OurArray();
arr.push(20)
arr.push(25)
console.log(arr)
// console.log(arr.isEmpty())
