let n=5;
let string ="";
for(i=1; i<=n; i++){
    for(j=1; j<=n*2-1; j++){
        if(j>=n-i+1 && j<=n+i-1 ){
            string+=" *";
        }else{
            string +="  ";
        }
    }
    string +="\n";
}
console.log(string); 