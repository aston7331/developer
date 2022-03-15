let n=5;
let string ="";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i==1||j==1||i+j==n+1||i+j==n||i+j==n-1){
            string+="  *";
        }else{
            string +="   ";
        }
    }
    for(let k=1; k<=n; k++){
        if(i==1||k==n||i==k||i+k==n && k%2!=0){
            string+="  *";
        }else{
            string +="   ";
        }
    }
    
    string+="\n\n";
}
console.log(string);