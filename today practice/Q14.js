let n =10;
let string ="";
for(i=1; i<=n; i=i+2){
    for(j=1; j<i+1; j++){
        string += n-j+1 +" ";
    }
    string +="\n";
}
console.log(string);