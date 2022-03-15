let  n=69;
let string ="";

for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        if(i==j&& i<=(n+1)/2|| i+j==n+1 && i<=(n+1)/2||j==(n+1)/2 && i>=(n+1)/2){
            string +=" *";
       
        }else{
            string += "  ";
        }
    }
    string +="\n";
}
console.log(string);