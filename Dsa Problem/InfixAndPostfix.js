// Infix and Postfix Problem :-
function InfixtoPostfix(str){
    let stack=[]
    let res="";
    for(let i=0;i<str.length;i++){
        let check=str[i]
        if((check>="a" && check<="z") || (check>="A" && check<="Z") || (check>="1" && check<="9")){
          res+=check  
        }
        else if(check=="("){
            stack.push("(")
        }
        else if(check==")"){
            while(stack[stack.length-1]!=="("){
                res+=stack[stack.length-1]
                stack.pop()
            }
            stack.pop()
        }
        else{
            while(stack.length !== 0 && symbol(str[i]) <= symbol(stack[stack.length-1])){
                res+=stack[stack.length-1]
                stack.pop()
            }
            stack.push(check)
        }
    }
    while(stack.length!==0){
        res+=stack[stack.length-1]
        stack.pop()
    }
    function symbol(s){
        if(s=="^"){
            return 3;
        }
        else if(s=="/" || s=="*"){
            return 2;
        }
        else if(s=="+" || s=="-"){
            return 1;
        }
        else{
            return -1;
        }
    }
    console.log(res);
}

// Input Taking :-

 function runProgram(input){
     //Input Taking Here
     input=input.split("\n")
     let str = input[0]
     InfixtoPostfix(str)
 }
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });