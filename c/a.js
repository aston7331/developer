let n=5;
let string ="";
 for(i=1; i<=n; i++){
     for(j=1; j<=n-1; j++){
        string += " ";
      }
     for(k=1; k<=2*i-1; k++){
         string +="*";
     }
     string += "\n";
 }
 console.log(string);