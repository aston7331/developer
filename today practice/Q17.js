let n=5;
let string ="";
for(i=1; i<=n; i++){
    for(j=1;j<=n-i; j++){
        string += " ";
    }
    for(k=1; k<=2*i-1; k++){
        string += "*";
    }
    string += "\n";
}
for(i=1; i<=n-1; i++){
    for(j=1;j<=i; j++){
        string += " ";
    }
    for(k=2*(n-i)-1; k>=1; k--){
        string += "*";
    }
    string += "\n";
}
console.log(string);