let n=6;
n = n+n-1;

for(i=1;i<=n;i++){
    for(j=1; j<=n; j++){
       if(i==1){
        document.write("*");
       } else if(i==j){
        document.write("*");
       }else if(i+j==n+1){
        document.write("*");
       }else if(i==n){
        document.write("*");
       }else{
       document.write("&nbsp;&nbsp");
       }
    }
    document.write("<br>");
}


