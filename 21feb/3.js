let n=5;
let string ="";

for(i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        if(i+j==((n+1)/2+1)||i+j==n*2-((n+1)/2-1)||i-j==((n+1)/2-1)||j-i==((n+1)/2-1)){
            string +=" *";
        }else{
            string+="  ";
        }
    }string +="\n";
}
console.log(string);