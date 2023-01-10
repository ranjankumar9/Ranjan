// Sum of Next Smaller Dsa Problem -

function Sumofnextsmaller(n,arr){
    let stack=[]
    let ans = []
    for(let i=n-1;i>=0;i--){
        while(stack.length!==0 && stack[stack.length-1]>=arr[i]){
            stack.pop()
        }
        if(stack.length===0){
            ans.push(0)
        }
        else{
            ans.push(stack[stack.length-1])
        }
        stack.push(arr[i])
    }
    // console.log(ans)
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=ans[i]
    }
    console.log(sum)
}

// input Taking :-

 function runProgram(input){
     //Input Taking Here
     input = input.split("\n")
     let tc = +input[0]
     var line = 1
     for(let i=0;i<tc;i++){
         var n = +input[line++]
         var arr = input[line++].split(" ").map(Number)
         Sumofnextsmaller(n,arr)
     }
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