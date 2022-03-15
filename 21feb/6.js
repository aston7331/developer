let n =5;
let string ="";
for(i=1; i<=n; i++){
    for(j=0; j<=n*2-2; j++){
        if(i==n||i+j==n||j-i==n-2){
            string +=" *";
        }else{
            string +="  ";
        }
    }
    string +="\n";
}
console.log(string);