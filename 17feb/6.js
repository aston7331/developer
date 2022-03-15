let n=7;
let string="";

for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        
        if(j<=(n+1)/2-i|| j>=(n+1)/2+i){
            string+=" ";
        }else if(i>(n+1)/2+j|| j >=(n-i)+((n+1)/2)){
            string +=" "
        }else{
            string +="*";
        }
        
    }
    string +="\n";
}
console.log(string);