import {describe, test} from 'node:test';
import {strict as assert} from 'node:assert';

import { odd, even, hogehoge } from '.';

describe("odd", () => {
    test("奇数の配列を返すことを確認", async () => {
        const result = odd([1,3,5]);
        // 配列が空でないことを確認
        assert.strictEqual(result.length > 0, true);
        // すべての要素が奇数であることを確認
        assert.strictEqual(result.every(v => v % 2 === 1), true);
        // 具体的な値のテスト例
        const expectedOddNumbers = result.slice(0, 3);  // 最初の3つの要素を検証
        assert.deepStrictEqual(expectedOddNumbers, [1, 3, 5]);
    })
})

describe("even", () => {
    test("偶数の配列を返すことを確認", async () => {
        const result = even([2,4,6]);
        const expectedEvenNumbers = result.slice(0, 3);  // 最初の3つの要素を検証
        assert.deepStrictEqual(expectedEvenNumbers, [2, 4, 6]);
    })
})

describe("hogehoge", () => {
    test("もとの数字の２倍であることを確認", async () => {
        const result = hogehoge(2);
        assert.deepStrictEqual(result, 4);
    })
})