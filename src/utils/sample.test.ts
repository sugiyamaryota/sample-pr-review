import {describe, test} from 'node:test';
import {strict as assert} from 'node:assert';

import { odd } from '.';

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