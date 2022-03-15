let n=5;
let string ="";

for(i=1; i<=n; i++){
    for(j=1; j<=n-i; j++){
        string += " ";
    }
    for(k=1; k<=2*i-1; k++){
        if(k==1||k==2*i-1){
            string += "*";
        }else{
            string += " ";
        }
    }
    string +="\n";
}

for(i=1; i<=n-1; i++){
    for(j=0; j<i; j++){
        string += " ";
    }
    for(l=(n-i)*2-1; l>=01; l--){
        if(l==1||l==(n-i)*2-1){
            string += "*";
        }else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);