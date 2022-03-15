let n=5;
let string ="";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i; j++){
        string += " ";
    }
    for(let k=1; k<=i*2-1; k++){
        string += "*";
    }
    string +="\n";
}
for(i=1; i<=n-1; i++){
    for(j=0; j<i; j++){
        string += " ";
    }
    1;for(k=(n-i)*2-1; k>=1; k--){
        string+="*";
    }
    string+="\n";
}
console.log(string);