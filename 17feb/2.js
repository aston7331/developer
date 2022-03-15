let n=5;
let string="";

for(let i=1; i<=n; i++){
    for(let j=1; j<=2*n-1; j++){
        if(j <= n+i-1 && j >= n-i+1){
            if(n<j){
                string+=n-(j-n)+" ";
            }else{
                string +=j+" ";
            }
            
        }else {
            string +="  ";
        }

    }
    string+="\n";
}
console.log(string);