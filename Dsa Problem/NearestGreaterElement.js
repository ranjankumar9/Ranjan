// Nearest Greater Element

function NGE(arr,N){
    let Left=[];
    let Right=[];
    let stack=[];
    let no=-1;
   for(let i=0;i<arr.length;i++){
       while(stack.length!==0 && arr[stack[no]]<=arr[i]){
            stack.pop();
             no--;
         }if(stack.length>0){
           Left.push(stack[no]);
      }else{
            Left.push(-1);
       }stack.push(i);
             no++;
   }
  var Stack2 = [];
  let n = -1;
  for(let i=arr.length-1;i>=0;i--){
      while(Stack2.length!==0 && arr[Stack2[n]]<=arr[i]){
          Stack2.pop();
          n--;
   }if(Stack2.length>0){
      Right.push(Stack2[n]);
   }else{
       Right.push(-1);
   }Stack2.push(i);
        n++;
   }
     Right=Right.reverse();
        let ans=[];
 for(let i=0;i<arr.length;i++){
     if(Left[i]===-1 && Right[i]===-1){
         ans[i]=-1;
     }else if(Left[i]===-1){
         ans[i]=arr[Right[i]];
     }else if(Right[i]===-1){
         ans[i]=arr[Left[i]];
     }else{
         let lef=Math.abs(i-Left[i]);
         let rig=Math.abs(i-Right[i]);
         if(lef<=rig){
             ans[i]=arr[Left[i]];
         }else{
             ans[i]=arr[Right[i]];
         }
     }
 }
 console.log(ans.join(" "));
}

// Input Taking :- 

function runProgram(input){
 input=input.trim().split("\n")
 let tc=+input[0];
 let line=1;
 for(let i =0;i<tc;i++){
     let N=+input[line++]
     let arr=input[line++].trim().split(" ").map(Number)
     NGE(arr,N)
 }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read="";
process.stdin.on("data",function(input){
   read+=input;
});
process.stdin.on("end",function(){
   read=read.replace(/\n$/,"");
   read=read.replace(/\n$/, "");
   runProgram(read);
});