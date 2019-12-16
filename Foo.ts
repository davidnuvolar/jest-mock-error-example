class Foo {
    private _bar: boolean = false;

    get bar(): boolean {
        return this._bar;
    }
    set bar(value) {
        this._bar = value;
    }
}

export default Foo;