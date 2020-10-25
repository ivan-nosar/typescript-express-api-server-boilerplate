import { SinonSandbox, createSandbox } from "sinon";
import { encode, decode } from "../../../src/helpers/base64";
import * as should from "should";

describe("base64", () => {
    let sandbox: SinonSandbox;

    before(() => {
        sandbox = createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe("#encode", () => {
        it("should properly encode empty string", () => {
            const raw = "";
            const actual = encode(raw);
            const expected = "";

            should.strictEqual(actual, expected);
        });

        it("should properly encode non-empty string", () => {
            const raw = "I'm a tiny string under the test";
            const actual = encode(raw);
            const expected = "SSdtIGEgdGlueSBzdHJpbmcgdW5kZXIgdGhlIHRlc3Q=";

            should.strictEqual(actual, expected);
        });
    });

    describe("#decode", () => {
        it("should properly decode empty string", () => {
            const raw = "";
            const actual = decode(raw);
            const expected = "";

            should.strictEqual(actual, expected);
        });

        it("should properly encode non-empty string", () => {
            const raw = "SSdtIGEgdGlueSBzdHJpbmcgdW5kZXIgdGhlIHRlc3Q=";
            const actual = decode(raw);
            const expected = "I'm a tiny string under the test";

            should.strictEqual(actual, expected);
        });
    });
});
