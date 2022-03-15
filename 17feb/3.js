let n=5;
let string="";

for(i=1; i<=n+(n-1); i+=2){
    for(j=1; j<=i; j++){
        if(i%2!=0){
            string +=" *";
        }
    }
    string +="\n";
}
console.log(string);