
let n = 5;
let string = "";
for (i = 1; i <= n*2; i +=2) {
    for (j = 1; j <= i; j++) {
        if (i % 2 != 0) {
            string += n*2-j+1+" ";
        }
    }
    string += "\n"; 
} console.log(string);