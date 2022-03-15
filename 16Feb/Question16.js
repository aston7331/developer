let n=5;
let string="";
let m ="";
let k ="";
for(i=1; i<=n; i++){
    m = n;
    k = m;
    for(j=1; j<=n; j++){        
        if(i<=j) {
            string+=k+" ";
        }else{
            string +="  ";
        }
        k--;

    }
   m=m-1;
    string +="\n";
}
console.log(string);