function runProgram(input){
  input = input.trim().split("\n");
 let n=input[0];
 let arr=input[1].trim().split(" ").map(Number);
 canYouFindSum(n,arr);
}
function canYouFindSum(n,arr){
    let stack=[];
    let ans=[];
    for(let i=0; i<n; i++){
        for(let j=i; j>=0; j--){
            if(arr[j]>arr[i]){
                stack.push(j+1);
                break;
            }
            else if(arr[j]<=arr[i] && j===0){
                stack.push(-1);
            }
        }
        for(let k=i;k<n; k++){
            if(arr[k]>arr[i]){
                ans.push(k+1);
                break;
            }
            else if(arr[k]<=arr[i] && k==n-1){
                ans.push(-1);
            }
        }
    }
    let temp=[];
    
    for(let k=0; k<n; k++){
        temp.push(stack[k]+ans[k]);
    }
    console.log(temp.join(" "));
    
}
if (process.env.USERNAME === "") {
  runProgram(``);
} else {
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
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}