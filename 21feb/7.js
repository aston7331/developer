let n=7;
let string ="";
for(i=1; i<=n; i++){
    for(j=1; j<=n*2-1; j++){
        if(j>=i && j<= 2*n-i){
            string+=" *";
        }else{
            string +="  ";
        }
    }
    string +="\n";
}
console.log(string); 