let n=6;
let string="";

for(i=1; i<=n; i++){
    for(j=1; j<=(n/2)+1; j++){
        if(j==1||i+j==(n/2)+2||i-j==(n/2)-1){
            string +=" *";
        }else{
            string +="  ";
        }
    }
    string +="\n";
}
console.log(string);