let n=5;
let string="";

for(i=1; i<=n; i++){
    for(j=1; j<=n-i; j++){
        string +="  ";
    }
    for(k=1; k<=i*2-1; k++){
        if(i==n||k==1||k==i*2-1){
            string+=" *";
        }else{
            string+="  ";
        }
    }
    string+="\n\n";
}
console.log(string);