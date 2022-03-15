let n=6;
n = n+n-1;

for(i=1;i<=n;i++){
    for(j=1; j<=n; j++){
       if(i==1){
        console.log("*");
       } else if(i==j){
        console.log("*");
       }else if(i+j==n+1){
        console.log("*");
       }else if(i==n){
        console.log("*");
       }else{
        console.log(" ");
       }
    }
    
}
