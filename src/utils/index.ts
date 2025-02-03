/**
 * 配列から奇数のみを抽出して返します
 * @param numbers 処理対象の数値配列
 * @returns 奇数のみを含む配列
*/
export const odd = (numbers: number[]): number[] => numbers.filter(num => num % 2 !== 0);

export const even = (numbers: number[]): number[] => numbers.filter(num => num % 2 === 0);

export const twice = (number: number): number => {
    if(isNaN(number)) return number
    return number *2
};