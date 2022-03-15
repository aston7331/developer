let n=7;
let string ="";

for(let i=1; i<=n; i++){
    for(let j=0; j<=n-i; j++){
        string +=" ";
    }
    for(let k=2; k<=i; k++){
        string +="*";
    }
    for(let h=2; h<=i; h++){
        string +="*";
    }
    for(let l=0; l<=n-i; l++){
        string+=" ";
    }
    string+="\n";
}

for(let i=0; i<=n-1; i++){
    for(let j=0; j<=i; j++){
        string +=" ";
    }
    for(let k=2; k<=n-i; k++){
        string +="*";
    }
    for(let h=2; h<=n-i; h++){
        string +="*";
    }
    for(let l=0; l<=i; l++){
        string+=" ";
    }
    string+="\n";
}
console.log(string);