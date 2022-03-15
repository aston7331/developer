let n=5;
let b=4;
let string = "";

for(i=1; i<n; i++){
    for(j=1; j<i; j++){
        string += " ";
    }
    for(k=1; k<i; k++){
     string += "*";   
    }
    string += "\n";
}

for(i=1; i<b-1; i++){
    for(j=1; j<b-i; j++){
        string += " ";
    }
    for(k=0; k<b-i-1; k++){
     string += "*";   
    }
    string += "\n";
}
console.log(string);