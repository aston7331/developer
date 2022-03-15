let a = "programmingspark";
let l = a.length;
let string = "";

for (i = 0; i < l; i++) {
    for (j = 0; j < l; j++) {
        if (i == 0) {
            string += a[j]+" ";
        } else if (j == 0) {
            string += a[i]+" ";
        } else if (i == l - 1) {
            string += a[l - j - 1]+" ";
        } else if (j == l - 1) {
            string += a[l - i - 1]+" ";
        } else {
            string += "  ";
        }
    }
    string += "\n";
}
console.log(string);