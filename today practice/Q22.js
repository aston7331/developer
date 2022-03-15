let n=5;
let string ="";
for(i=1; i<=n; i++){
    for(j=1; j<i+1; j++){
        string += "*";
    }
    string += "\n";
}
console.log(string);