let n=5;
let string ="";

for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        if(i==1||j==1||i==n||j==n){
            string +="*";
        }else{
            string+=" ";
        }
    }
    string+="\n";
}
console.log(string);