let n=11;
let string ="";

for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        if(i==n||i==1||j==(n+1)/2){
            string+=" *";
        }else if(i<=j && j<=n-i+1){
            string +=" *";
        }else if(i>=j && j>=n-i+1){
            string +=" *";
        }else {
            string +="  ";
        }
    }
    string+="\n";
}
console.log(string);