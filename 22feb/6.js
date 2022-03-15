let n=5;
let string="";
for(i=0; i<=n; i++){
    for(j=1; j<=i; j++){
        string+=String.fromCharCode((j-1)+65);
    }
    string+="\n";
}
console.log(string);