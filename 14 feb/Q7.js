let n=10;
let string ="";
if(n%2==0)
n==n-1;
for(i=1;i<=n;i++){
    for(j=1;j<=n;j++){
        if(i==1||j==1||i==n||j==n||i==j||i+j==n+1){
            string+="*";
        }else{
            string+=" ";
        }
    }
    string+="\n";
}
console.log(string);