let n=9;
let string ="";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i==1||j==1||i==n||j==n){
            string +=" *";
        }else if((i%2 !==0 && j%2!=0 && i==j)||(i%2 !==0 && j%2!=0 && i+j==n+1)) {
            string +=" *";
        }else if((j%2!=0 && i==(n+1)/2)||(i%2 !==0 && j==(n+1)/2)){
            string +=" *";
        }else if(j==3 && i+j>(n+1)/2 && i+j<=n+1){
            string +=" *";
        }else if(i==3 && i+j>((n+1)/2)&& i+j<=n+1){
            string +=" *";
        }else if(i==n-2 && i+j>(n+1) && j<=((n+1)/2)+2){
            string +=" *";
        }else if(j==n-2 && i+j>(n+1) && i<=((n+1)/2)+2){
            string +=" *";
        }else {
            string +="  ";
        }
    }
    string+="\n";
}
console.log(string);