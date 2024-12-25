function filterNumbersGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}

const inputArray = [5, 12, 8, 20, 3, 15];
const resultArray = filterNumbersGreaterThanTen(inputArray);

console.log("Числа, більші за 10:", resultArray);
