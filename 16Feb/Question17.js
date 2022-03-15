let n=5;
let string="";

for(i=1; i<=n; i++){
    for(j=1; j<=i; j++){
        string += i-j+1 +" ";
    }
    string +="\n";
}
console.log(string);