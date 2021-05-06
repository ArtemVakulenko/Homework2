var LList = require("./LList");

describe("LList add values", function () {
    it("add functionality", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        var expected = [10, 20, -30];
        expect(list.toArray()).toEqual(expected);
        expect(list.getSize()).toBe(expected.length);
    });
});
describe("LList clear", function () {
    it("clear functionality", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        list.clear()
        expect(list.toArray()).toEqual([]);
        expect(list.getSize()).toBe(0);
    });
});
describe("LList remove", function () {
    it("remove from start", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        list.add(50);
        list.add(200);
        var expectedValue = 10;
        var expectedArray = [20, -30, 50, 200];
        expect(list.remove(10)).toBe(expectedValue);
        expect(list.toArray()).toEqual(expectedArray);
        expect(list.getSize()).toBe(expectedArray.length);
    });
    it("remove from middle", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        list.add(50);
        list.add(200);
        var expectedValue = -30;
        var expectedArray = [10, 20, 50, 200];
        expect(list.remove(-30)).toBe(expectedValue);
        expect(list.toArray()).toEqual(expectedArray);
        expect(list.getSize()).toBe(expectedArray.length);
    });
    it("remove from end", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        list.add(50);
        list.add(200);
        var expectedValue = 200;
        var expectedArray = [10, 20, -30, 50,];
        expect(list.remove(200)).toBe(expectedValue);
        expect(list.toArray()).toEqual(expectedArray);
        expect(list.getSize()).toBe(expectedArray.length);
    });
});
describe("LList set", function () {
    it("set in middle", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        list.add(50);
        list.add(200);
        list.set(42, 3)
        var expectedArray = [10, 20, -30, 42, 200];
        console.log(list.toArray());
        expect(list.toArray()).toEqual(expectedArray);
    });
    it("set first", function () {
        var list = new LList();
        list.set(42, 0)
        var expectedArray = [42,];
        console.log(list.toArray());
        expect(list.toArray()).toEqual(expectedArray);
    });
});