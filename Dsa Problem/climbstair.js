function cw(n){
    if(n<0){
      return 0;
    }
    else if(n==0){
      return 1;
    }
    else{
      return cw(n-1)+cw(n-2)+cw(n-3)
    }
  }
  console.log(cw(4))