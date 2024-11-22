import {describe, test} from 'node:test';
import {strict as assert} from 'node:assert';

import { odd } from '.';

describe("odd", () => {
    test("奇数", async () => {
        console.log(odd().every(v => v%2===1))
        assert.strictEqual(odd().every(v => v%2===1), true)
    })
})