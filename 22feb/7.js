let n=10;
let string="";
let count=0;
for(i=1; i<=n; i++){
    for(j=1; j<=n-i; j++){
        string +="    ";

    }
    for(k=1; k<=2*i-1; k++){
        alpha= String.fromCharCode( count+65);
        string+=" "+alpha+"";
        string+="  ";
        if(alpha=="Z"){
            count=0;
        }
        count++;
    }
    string+="\n";
}
console.log(string);