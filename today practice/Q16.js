let n=5;
let string ="";
for(i=0; i<=n; i++){
    for(j=0; j<=n-i; j++){
        string += "*";
    }
    for(k=1; k<=2*i; k++){
        string += " ";
    }
    for(l=1; l<=(n-i)+1; l++){
        string += "*";
    }
    string += "\n";
}
for(i=0; i<=n-1; i++){
    for(j=0; j<=i; j++){
        string += "*";
    }
    for(k=0; k<n-i; k++){
        string += "  ";
    }
    for(l=i+1; l>=1; l--){
        string += "*";
    }
    string += "\n";
}

console.log(string);