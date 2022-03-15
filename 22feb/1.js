let n = 7;
let string = "";

for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if((n+1)/2 > i){
            if (i>=j) {
                string += " *";
            }   else {
                string +=" -";
            }
        }else{
            if ( j<=n-i+1) {
                string += " *";
            }   else {
                string +=" -";
            }
        }
        
    }
    string +="\n";
}



console.log(string);