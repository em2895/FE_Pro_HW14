// Написати цикли, які роблять наступне:

// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let numbers = '';

for (let i = 20; i <= 30; i = i + 0.5) {
    numbers += i + ' ';
}

console.log("Числа від 20 до 30 через пропуск, використовуючи крок 0,5: " + numbers);


// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let dollar = 27;

console.log("Курс долара 27 грн.:");
for (let i = 10; i <= 100; i = i + 10) {
        console.log(i + "$ = " + (i * dollar) + " грн.");
    }

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let squareNum = Number(prompt("Введіть ціле число (квадрат): "));
let squareIdx = 1;
let squareRoot = 1;
let squareRes = '';

while (squareRoot < 100) {
        squareRoot = squareIdx * squareIdx;
        if(squareRoot <= squareNum){
                squareRes += squareRoot + ' ';
        }
        squareIdx++;
}

console.log("Всі цілі числа від 1 до 100, квадрат яких не перевищує числа " + squareNum + " : " + squareRes);


// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не 
// мають інших дільників крім 1 і себе).
let isPrime = Number(prompt("Введіть ціле число (просте або не просте): "));

isPrimeLoops: while (true) {
        if (isPrime <= 1){
                console.log("Число " + isPrime + " не просте");
                break;
        } else if (isPrime == 2){
                console.log("Число " + isPrime + " просте");
                break;
        }
        
        for (let i = 2; i <= isPrime / 2; i++) {
                if (isPrime % i == 0) {
                        console.log("Число " + isPrime + " не просте");
                        break isPrimeLoops;
                }
        }
        console.log("Число " + isPrime + " просте");
        break;
}


// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let powerNum = Number(prompt("Введіть число, щоб перевірити чи можна отримати число зі зведення числа 3 у деяку ступінь: "));


while (powerNum % 3 == 0) {
        powerNum /= 3;
}
if (powerNum == 1){
        console.log("Число можна отримати"); 
} else{
        console.log("Число не можна отримати"); 
}