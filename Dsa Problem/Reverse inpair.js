const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var reversePair = function (head) {
    let prev = null;
    let current = head.next;
    let cur = head;
    while(cur!==null && cur.next!==null){
      let temp = cur.next
        cur.next = temp.next;
        temp.next = cur
        if(prev!==null){
            prev.next = temp;
            
        }
        prev = cur
        cur = cur.next;
    }
    return current;
    
};
