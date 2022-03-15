// function calculet() {
//     var textType = Node.textContent ? 'textContent' : 'innerText',
//         firstNumber = parseFloat(document.getElementById("firstNumber").value) || 0,
//         secondNumber = parseFloat(document.getElementById("secondNumber").value) || 0,
//         result = parseFloat(document.getElementById("result").value) || 0;

//     switch (document.getElementById("operator").value) {
//         case 'a':
//             result[textType] = num1 + num2;
//             break;
//         case 'b':
//             result[textType] = num1 - num2;
//             break;
//         case 'c':
//             result[textType] = num1 * num2;
//             break;
//         case 'd':
//             result[textType] = num1 / num2;
//             break;

//         default:
//             result[textType] = 'Seriously? You wanted to try math with that operand? Now stop being silly.'
//             break;
//     }
// }

 

function calculet(){


let operator= document.getElementById("operator").value;
let num1= Number(document.getElementById("num1").value);
let num2= Number(document.getElementById("num2").value);

switch (operator) {
    case "+":
        document.getElementById("result").value = num1 + num2;
        break;
    case "-":
        document.getElementById("result").value = num1 - num2;
        break;
    case "*":
        document.getElementById("result").value = num1 * num2;
        break;
    case "/":
        document.getElementById("result").value = num1 / num2;
        break;
    default:
        document.getElementById("result").value = 0;
}
}