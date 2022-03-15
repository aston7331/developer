let n = 3;

let b = 2;

let string = "";

for (i = 0; i <= n; i++) {

    for (j = i; j >= 1; j--) {

        string += String.fromCharCode(j + 64)

    }

    for (h = 2; h <= i; h++) {

        string += String.fromCharCode(h + 64)

    }

    string += "\n";

}

for (i = 0; i <= b - 1; i++) {

    for (j = 1; j <= b - i; j++) {

        string += String.fromCharCode(j + 64)

    }

    for (h = 1; h < b - i; h++) {

        string += String.fromCharCode(h + 64)

    }

    string += "\n";



}





console.log(string);