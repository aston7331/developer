let n=7;
let string ="";

for(i=1; i<=n; i++){
    
    for(j=0; j<=n-i; j++){
        if(j>=i){
            string+=" ";
        }else{
            string +="*";
        }
    }
    string +="\n";
    
}


console.log(string);