let n=5;
let string ="";
let k=1;

for(i=1; i<=n; i++){
    for(j=1; j<=i; j++){
        if(k%2==0){
            string +="0";
        }else{
            string +="1";
        }
        k++
    }
    string +="\n";
}
console.log(string);