let score = 0; // Баллы
// Опрос
let answer1 = prompt(' Сколько будет 2+2?');
if (answer1 === '4') {
    score += 10;
} else {
    score += 0;
}
let answer2 = prompt('Солнце встает на востоке?');
if (answer2 === 'Да' || answer2 === 'да') {
    score += 10;
} else {
    score += 0;
}
let answer3 = prompt('Сколько будет 5/0?');
if (answer3 === '0') {
    score += 10;
} else {
    score += 0;
}
let answer4 = prompt('Какого цвета небо?');
if (answer4 === 'Синего' || answer4 === 'синего') {
    score += 10;
} else {
    score += 0;
}
let answer5 = prompt('Сколько часов в сутках?');
if (answer5 === '24') {
    score += 10;
} else {
    score += 0;
}
let answer6 = prompt('Сергей Никифоров хороший преподаватель?');
if (answer6 === 'Да'|| answer6 === 'да' || answer6 === 'Лучший' || answer6 === 'лучший') {
    score += 10;
} else {
    score += 0;
}
// Выводим оценку
alert('Ваша оценка: ' + score);