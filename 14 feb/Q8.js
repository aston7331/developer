let n = 8;
let string = "";
let start = 0;
let end = n;
for (i = 0; i <= end; i++) {
    for (j = 0; j <= end; j++) {
        if (getCondition(i, j)) {
            string += " *";
        } else {
            string += "  ";
        }
    }
    string += "\n";
}


function getCondition(i, j) {
    // const arr2 = [2, 4]
    // const arr3 = [1, 5];


    const arr2 = [2, 6]
    const arr3 = [1, 7];

    if (i == 0 || i == n || j == 0 || j == n) {
        return true;
    }
    if (arr2.includes(i) && !arr3.includes(j)) {
        return true;
    }

    if ((arr2.includes(j)) && !arr3.includes(i)) {
        return true;
    }
    return false;
}
console.log(string);