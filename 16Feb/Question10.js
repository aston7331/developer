let n=5;
let string ="";

for(i=1; i<=n; i++){
    for(j=1; j<=i; j++){
        if(j%2==0){
            string+="1";
        }else{
            string+="0";
        }
    }
    string+="\n";
}
console.log(string);