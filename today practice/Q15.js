let n=5;
let string="";
for(i=0;i<=n; i++){
    for(j=0;j<=n-i;j++){
        string+="*";
    }
    for(k=1;k<=2*i;k++){
        string+=" ";
    }
    for(m=1;m<=(n-i)+1;m++){
        string+="*";
    }
    string+="\n";
}console.log(string);