let n=7;
let string ="";

for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        if(i<=j && j<=n-i+1){
            string+=" *";
        }else if(i>=j && j>=n-i+1){
            string +=" *";
        }else{
            string +="  ";
        }
    }
    string +="\n";
}
console.log(string);