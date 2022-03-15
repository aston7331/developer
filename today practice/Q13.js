let n=5;
let string ="";
for(i=1; i<=n; i++){
    for(j=1; j<=n-i; j++){
        string +=" ";
    }
    for(k=1; k<=i; k++){
        string += k+ "";
    }
    for(l=2; l<=i; l++){
        string += i-l+1 +"";
        }
    string += "\n";
}
console.log(string);