let pr = [100,60,70,65,80,85]

function Financial(){
    let res=new Array(n);
    res[0]=1;
  
    for(let i=1;i<n;i++){
      res[i]=1;
      for(let j=i-1;j>=0;j--){
          if(arr[j]<=arr[i]){
              res[i]=res[i]+1
          }
          else{
              break;
          }
      }
    }
    console.log(res)
}

Financial(price,6)
