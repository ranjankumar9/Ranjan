class Node{
    constructor(elem){
        this.elem = elem
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    add(elem){
        var node = new Node(elem)

    // if the linked list is empty
        if(!this.head){
            this.head = node
        }
        else{
            var current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    // print
    printList(){
        var current = this.head
        var index = 0
        while(current){
            console.log(current.elem,index++)
            current = current.next
        }
    }
}

const list = new LinkedList()
list.add(1)
list.add(7)
console.log(list)
