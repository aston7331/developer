let n = 11;
let matrix = Array(n).fill("")
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = Array(n).fill(" ");
}
let i = 0, j = 0;
let start = 0;
let end = n - 1;
let condition = 1;
// print(matrix);

while (start <= end) {
    // console.log({ i, j, start, end })
    if (condition == 1) {
        matrix[i][j++] = "*";
        if (j > end) {
            j--;
            condition = 2;
        }
    }

    if (condition == 2) {
        matrix[i++][j] = "*";
        if (i > end) {
            i--;
            condition = 3
            end = end - 2;
        }

    }
    if (condition == 3) {
        matrix[i][j--] = "*";
        if (j < start) {
            j++;
            condition = 4
        }
    }
    if (condition == 4) {
        matrix[i--][j] = "*";
        if (i < start) {
            i++;
            condition = 1;
            start = start + 2;

            i = start;
            j = start;
            // console.log({ start, end, i, j, condition });
        }
    }
    // print(matrix)
}

print(matrix);

function print(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element.join(''));
    }
}