let n=7;
let string ="";

for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        if(j>=n-i+1  && j>=i ){
            string +=" *";
        }else if(i>=j && j<=n-i+1){
            string +=" *";
        }
        else{
            string+="  ";
        }
    }
    string+="\n";
}
console.log(string);