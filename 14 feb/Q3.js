let n=6;
n = n+n-1;
string ="";
for(i=1;i<=n;i++){
    for(j=1; j<=n; j++){
       if(i==1||i==n||i==j||i+j==n+1){
           string +=" *";
       } else{
           string +="  "
       }
    }
    string +="\n";
}
console.log(string);