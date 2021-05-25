var AList = require("./AList");

describe("AList check init capacity", function () {
    it("init_empty", function () {
        var list = new AList();
        expect(list.array.length).toBe(list.DEFAULT_CAPACITY);
    });
    it("init_capacity", function () {
        var CAPACITY = 30;
        var list  = new AList(CAPACITY);
        expect(list.array.length).toBe(CAPACITY);
    });
    it("init_array", function () {
        var ARRAY = [1, -2, 3, 15, -60, 90];
        var list = new AList(ARRAY);
        expect(list.array).toEqual(ARRAY);
        expect(list.getSize()).toBe(ARRAY.length);
        expect(list.array.length).toBe(ARRAY.length);
    });
});
describe("AList add", function () {
    it("add first", function () {
        var list = new AList();
        list.add(10);
        var expected = [10, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        expect(list.array).toEqual(expected);
        expect(list.getSize()).toBe(1);
    });

    it("add and call ensure capacity", function () {
        var list = new AList();
        for (var i = 0; i < 10; i++) {
            list.add(i);
        }
        list.add(50);
        expect (list.array.length).toBe(25)
        expect(list.getSize()).toBe(11)
    });
});
describe("AList set", function () {
    it("set into undefined", function () {
        var list = new AList();
        list.add(10);
        list.add(5);
        list.add(3);
        list.set(50, 5);
        expect(list.array.length).toBe(10)
        expect(list.getSize()).toBe(4)
        expect(list.array[4]).toBe(undefined)
        expect(list.array[5]).toBe(50)
    });
    it("set first", function () {
        var list = new AList();
        list.add(10);
        list.add(5);
        list.add(3);
        list.set(50, 5);
        list.add(-100);
        list.add(150);
        list.add(250);
        list.set(42, 0)
        expect(list.array.length).toBe(10)
        expect(list.getSize()).toBe(7)
        expect(list.array[0]).toBe(42)
    });
    it("set out of bounds and into negative index", function () {
        var list = new AList();
        list.add(10);
        list.add(5);
        list.add(3);
        list.set(50, 5);
        list.add(-100);
        list.add(150);
        list.add(250);
        expect(list.set(42, -1)).toBe("Array Index Is Out Of Bounds")
        expect(list.set(42, 25)).toBe("Array Index Is Out Of Bounds")
    });
});
describe("AList get", function () {
    it("get from existing value", function () {
        var ARRAY = [1, -2, 3, undefined , -60, 90];
        var list = new AList(ARRAY);
       expect(list.get(0)).toBe(1)
       expect(list.get(2)).toBe(3)
    });
    it("get without index", function () {
        var ARRAY = [1, -2, 3, undefined , -60, 90];
        var list = new AList(ARRAY);
       expect(list.get()).toBe("specify index")
    });
    it("get undefined element", function () {
        var ARRAY = [1, -2, 3, undefined , -60, 90];
        var list = new AList(ARRAY);
       expect(list.get(3)).toBe("element under this index is undefined")
    });
    it("get with out of bounds index", function () {
        var ARRAY = [1, -2, 3, undefined , -60, 90];
        var list = new AList(ARRAY);
       expect(list.get(-1)).toBe("index is out of bounds")
       expect(list.get(25)).toBe("index is out of bounds")
    });
})
describe("AList remove", function () {
    it("remove existing value ", function () {
        var ARRAY = [1, -2, 3, 42 , -60, 90];
        var res = [undefined, -2, 3, 42 , -60, 90]
        var list = new AList(ARRAY);
        list.remove(1)
       expect(list.array).toEqual(res)
       expect(list.getSize()).toBe(5)
    });
    it("remove non-existing value ", function () {
        var ARRAY = [1, -2, 3, undefined , -60, 90];
        var list = new AList(ARRAY);
       expect(list.remove(42)).toBe("there is no value in array")
    });
})
describe("AList toArray", function () {
    it("return array without undefined", function () {
        var list = new AList();
        list.add(10)
        list.add(11)
        list.add(12)
        list.add(13)
        list.add(15)
        list.set(42, 7)
        var expected = [10, 11, 12, 13, 15, 42]
        expect(list.toArray()).toEqual(expected)
    });
})
describe("AList toString", function () {
    it("work with even collection", function () {
        var list = new AList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        list.toString()
        expect(typeof list.toString()).toBe('string')
    });
})
describe("AList clear", function () {
    it("remove all values, set size to 0 and capacity to default ", function () {
        var ARRAY = [1, -2, 3, undefined , -60, 90];
        var list = new AList(ARRAY);
        list.clear()
        expect(list.getSize()).toBe(0)
        expect(list.array[0]).toBe(undefined)
        expect(list.array.length).toBe(10)
    });
})
describe("AList contains", function () {
    it("return true with existing value", function () {
        var ARRAY = [1, -2, 3, 52 , -60, 90, 42];
        var list = new AList(ARRAY);
        expect(list.contains(1)).toBe(true)
        expect(list.contains(42)).toBe(true)
    });
    it("return false with non-existing value", function () {
        var ARRAY = [1, -2, 3, 52 , -60, 90, 42];
        var list = new AList(ARRAY);
        expect(list.contains(2)).toBe(false)
        expect(list.contains(-42)).toBe(false)
    });
    it("return error without value", function () {
        var ARRAY = [1, -2, 3, 52 , -60, 90, 42];
        var list = new AList(ARRAY);
        expect(list.contains()).toBe('specify value')
    });
})
describe("AList minValue", function () {
    it("return min value if such is present", function () {
        var ARRAY = [1, -2, 3, 52 , -60, 90, 42];
        var list = new AList(ARRAY);
        expect(list.minValue()).toBe(-60)
    });
    it("return min value if such is present twice", function () {
        var ARRAY = [1, -2, 3, 52 , -60, 90, -60, 42];
        var list = new AList(ARRAY);
        expect(list.minValue()).toBe(-60)
    });
})
describe("AList maxValue", function () {
    it("return max value if such is present", function () {
        var ARRAY = [1, -2, 3, 52 , -60, 90, 42];
        var list = new AList(ARRAY);
        expect(list.maxValue()).toBe(90)
    });
    it("return max value if such is present twice", function () {
        var ARRAY = [1, -2, 3, 52, 90, -60, 90, -60, 42];
        var list = new AList(ARRAY);
        expect(list.maxValue()).toBe(90)
    });
})
describe("AList maxIndex", function () {
    it("return max index if such is present", function () {
        var ARRAY = [1, -2, 3, 52 , -60, 90, 42];
        var list = new AList(ARRAY);
        expect(list.maxIndex()).toBe(5)
    });
    it("return first max Index if such is present twice", function () {
        var ARRAY = [1, -2, 3, 52, 90, -60, 90, -60, 42];
        var list = new AList(ARRAY);
        expect(list.maxIndex()).toBe(4)
    });
})
describe("AList minIndex", function () {
    it("return min index if such is present", function () {
        var ARRAY = [1, -2, 3, 52 , -60, 90, 42];
        var list = new AList(ARRAY);
        expect(list.minIndex()).toBe(4)
    });
    it("return first min Index if such is present twice", function () {
        var ARRAY = [1, -2, 3, 52, 90, -60, 90, -60, 42];
        var list = new AList(ARRAY);
        expect(list.minIndex()).toBe(5)
    });
})
describe("AList reverse", function () {
    it("return reversed array", function () {
        var list = new AList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        list.add(7)
        list.set(42, 7)
        list.reverse()
        var expected = [undefined, undefined, 42, undefined, undefined, 7,4, 3, 2, 1]
        expect(list.array).toEqual(expected)
    });
})
describe("AList halfReverse", function () {
    it("work with even collection", function () {
        var list = new AList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        var expected = [3, 4, 1, 2]
        list.halfReverse()
        expect(list.array).toEqual(expected)
    });
    it("work with odd collection", function () {
        var list = new AList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        list.add(5)
        var expected = [4, 5, 3, 1, 2]
        list.halfReverse()
        expect(list.array).toEqual(expected)
    });
    it("work with even collections and trim all undefined cells", function () {
        var list = new AList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.set(4, 8)
        var expected = [3, 4, 1, 2]
        list.halfReverse()
        expect(list.array).toEqual(expected)
    });
    it("work with odd collection and trim undefined cells", function () {
        var list = new AList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        list.set(5, 8)
        var expected = [4, 5, 3, 1, 2]
        list.halfReverse()
        expect(list.array).toEqual(expected)
    });
})
describe("AList retainAll", function () {
    it("work", function () {
        var list = new AList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        list.retainAll([2, 3])
        var expected = [undefined,2, 3, undefined]
        expect(list.array).toEqual(expected)
    });
})
describe("AList removeAll", function () {
    it("work", function () {
        var list = new AList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        list.removeAll([2, 3])
        var expected = [1,undefined, undefined, 4]
        expect(list.array).toEqual(expected)
    });
})
describe("AList sort", function () {
    it("work", function () {
        var list = new AList()
        list.add(1)
        list.add(4)
        list.add(3)
        list.add(2)
        var expected = [1, 2, 3, 4]
        expect(list.sort()).toEqual(expected)
    });
})
describe("AList print", function () {
    it("work", function () {
        var list = new AList()
        list.add(1)
        list.add(4)
        list.add(3)
        list.add(2)
        // list.print()
    });
})