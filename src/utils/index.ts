const numbers = [1,2,3]
let oddNumbers: number[] =[];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}