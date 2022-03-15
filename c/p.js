let n =5;
let string ="";
let count =1;

for(i=1; i<=n; i++){
    for(j=1; j<=n-i; j++){
        string += " ";
    }
    for(k=1; k<=i; k++){
        string += count;
        string += " ";
        count ++;
    }
    string += "\n";
}
console.log(string);