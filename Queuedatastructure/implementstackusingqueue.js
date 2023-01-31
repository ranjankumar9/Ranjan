/*
Queue {
  push()
  front()
  pop()
  isEmpty()
}
*/
class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
    	//write your code here..
    	while(this.Q1.isEmpty() !== true){
    	    this.Q2.push(this.Q1.front())
    	    this.Q1.pop()
    	}
    	this.Q1.push(value)
    	
    	while(this.Q2.isEmpty() !== true){
    	    this.Q1.push(this.Q2.front())
    	    this.Q2.pop()
    	}
    }
    pop() {
    	//write your code here..
    	this.Q1.pop()
    }
    top() {
        //write your code here..
        return this.Q1.front();
    }
    isEmpty() {
    	//write your code here..
    	return this.Q1.isEmpty();
    }
}
