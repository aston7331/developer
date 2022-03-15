let n=5;
let string ="";

for(i=1; i<=n; i++){
    for(j=1; j<=n-i; j++){
        string +=" ";
    }
    for(k=1; k<=i; k++){
        if(k%2==0){
            string +="1";
        }else{
            string +="0";
        }
    }
    string +="\n";
}
console.log(string);