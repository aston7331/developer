let n=5;
let string ="";

for(i=0; i<=n; i++){
    for(j=0; j<=n*2-1; j++){
        if( j >(n-i)+((n+1)/2-i)){
            string +=" *";
        }else{
            string +=" ";
        }
    }
    string += "\n";
}
console.log(string);