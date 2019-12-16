import Foo from './../Foo';

// Comment next line for tests to pass
jest.mock('../Foo');

it("Should mock get accessors", () => {
    let testError;
    try {
        jest.spyOn(Foo.prototype, 'bar', 'get');
    } catch (error) {
        testError = error;
    }

    expect(testError).toBeUndefined();
});

it("Should mock set accessors", () => {
    let testError;
    try {
        jest.spyOn(Foo.prototype, 'bar', 'set').mockImplementation(() => console.log('hello world'));
    } catch (error) {
        testError = error;
    }

    expect(testError).toBeUndefined();
});