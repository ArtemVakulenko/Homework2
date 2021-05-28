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
        // console.log(list.toArray());
        expect(list.toArray()).toEqual(expectedArray);
    });
    it("set out of range", function () {
        var list = new LList();
        
        expect(list.set(42, 2)).toBe("invalid index");
    });
});

describe("LList get", function () {
    it("get first", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        list.add(50);
        list.add(200);
        expect(list.get(0)).toBe(10);
    });
    it("get any", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        list.add(50);
        list.add(200);
        expect(list.get(3)).toBe(50);
    });
    it("get non-existent", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        list.add(50);
        list.add(200);
        expect(list.get(51)).toBe("invalid index");
    });
});

describe("LList get", function () {
    it("get first", function () {
        var list = new LList();
        list.add(10);
        list.add(20);
        list.add(-30);
        list.add(50);
        list.add(200);
        expect(list.get(0)).toBe(10);
    });
});

describe("remove", function () {
    var list = new LList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    it("should be defined ", function () {
      expect(list.remove).toBeDefined();
    });
    it("should be function", function () {
      expect(typeof list.remove).toBe("function");
    });
    it("should call not work without argument", function () {
        expect(list.remove()).toBe(false);
    })
    it("should not work with more than 1 argument", function () {
        expect(list.remove(1, 2)).toBe(false);
    });
    it("should remove item by value, and not drop links", function () {
      var testArray = [1, 5];
      list.remove(2);
      list.remove(3);
      list.remove(4);
      expect(list.toArray()).toEqual(testArray);
      expect(list.getSize()).toBe(2);
    });
    it("should remove item by value, and not drop links and delete first item", function () {
      var testArray = [5];
      list.remove(1);
      expect(list.toArray()).toEqual(testArray);
      expect(list.getSize()).toBe(1);
    });
});

describe("toString", function () {
    var list = new LList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    it("should empty linkedList", function () {
      var exp = new LList();
      expect(exp.toString()).toBe("");
    });
    it("should return string of linkedList items values", function () {
      var testString = "1,2,3,4,5";
      expect(list.toString()).toBe(testString);
    });
});

describe("contains", function () {
    var list = new LList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    it("shold return false in empty LinkedLits", function () {
      var exp = new LList();
      expect(exp.contains()).toBe(false);
    });
    it("should return true because contain", function () {
      expect(list.contains(4)).toBe(true);
    });
    it("should return false because not contain", function () {
      expect(list.contains(7)).toBe(false);
    });
});

describe("minValue", function () {
    var list = new LList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    it("should empty LinkedList", function () {
      var emptyLinkedList = new LList();
      expect(emptyLinkedList.minValue()).toBe(-1);
    });
    it("should return minValue from LinkedList, minValue first Element", function () {
      expect(list.minValue()).toBe(1);
    });
    it("should return minValue from LinkedList, minValue last Element", function () {
      var testLinkedList = new LList();
      testLinkedList.add(2);
      testLinkedList.add(3);
      testLinkedList.add(4);
      testLinkedList.add(1);
      expect(testLinkedList.minValue()).toBe(1);
    });
    it("should return minValue from LinkedList, minValue not first and not last Element", function () {
      var extraTestLinkedList = new LList();
      extraTestLinkedList.add(2);
      extraTestLinkedList.add(3);
      extraTestLinkedList.add(1);
      extraTestLinkedList.add(6);
      expect(extraTestLinkedList.minValue()).toBe(1);
    });
})

describe("maxValue", function () {
    var list = new LList();
    list.add(6);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    it("should return maxValue from LinkedList, maxValue first Element", function () {
      expect(list.maxValue()).toBe(6);
    });
    it("should return maxValue from LinkedList, minValue last Element", function () {
      var testLinkedList = new LList();
      testLinkedList.add(1);
      testLinkedList.add(3);
      testLinkedList.add(4);
      testLinkedList.add(6);
      expect(testLinkedList.maxValue()).toBe(6);
    });
    it("should return maxValue from LinkedList, maxValue not first and not last Element", function () {
      var extraTestLinkedList = new LList();
      extraTestLinkedList.add(2);
      extraTestLinkedList.add(6);
      extraTestLinkedList.add(1);
      extraTestLinkedList.add(1);
      expect(extraTestLinkedList.maxValue()).toBe(6);
    });
});

describe("minIndex", function () {
    var list = new LList();
    list.add(6);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    it("should return index of minimal element of LinkedList", function () {
      expect(list.minIndex()).toBe(1);
    });
    it("should return index of minimal element of LinkedList, minimal element first", function () {
      var linkedListTurboTest = new LList();
      linkedListTurboTest.add(1);
      linkedListTurboTest.add(2);
      linkedListTurboTest.add(100);
      linkedListTurboTest.add(200);
      expect(linkedListTurboTest.minIndex()).toBe(0);
    });
    it("should return index of minimal element of LinkedList, last element first", function () {
      var linkedListTurboTestExtra = new LList();
      linkedListTurboTestExtra.add(35);
      linkedListTurboTestExtra.add(2);
      linkedListTurboTestExtra.add(100);
      linkedListTurboTestExtra.add(200);
      linkedListTurboTestExtra.add(1);
      expect(linkedListTurboTestExtra.minIndex()).toBe(4);
    });
});

describe("maxIndex", function () {
    var list = new LList();
    list.add(6);
    list.add(2);
    list.add(100);
    list.add(4);
    list.add(5);
    it("should return index of minimal element of LinkedList", function () {
      expect(list.maxIndex()).toBe(2);
    });
    it("should return index of minimal element of LinkedList, maximal element first", function () {
      var linkedListTurboTest = new LList();
      linkedListTurboTest.add(400);
      linkedListTurboTest.add(2);
      linkedListTurboTest.add(100);
      linkedListTurboTest.add(200);
      expect(linkedListTurboTest.maxIndex()).toBe(0);
    });
    it("should return index of minimal element of LinkedList, maximal element last", function () {
      var linkedListTurboTestExtra = new LList();
      linkedListTurboTestExtra.add(35);
      linkedListTurboTestExtra.add(2);
      linkedListTurboTestExtra.add(100);
      linkedListTurboTestExtra.add(200);
      linkedListTurboTestExtra.add(8000);
      expect(linkedListTurboTestExtra.maxIndex()).toBe(4);
    });
});

describe("LinkedList reverse", function () {
    var list = new LList();
    it("should be defined ", function () {
      expect(list.reverse).toBeDefined();
    });
    it("should be function", function () {
      expect(typeof list.reverse).toBe("function");
    });
    it("should empty LinkedList", function () {
      expect(list.reverse()).toBe();
      expect(list.root).toBe(null);
    });
    it("should reverse Linked List", function () {
      var test = new LList();
      var testArray = [3, 2, 1];
      var testRoot = {
        value: 3,
        next: {
          value: 2,
          next: {
            value: 1,
            next: null,
          },
        },
      };
      test.__reverseList = jest.fn().mockReturnValue(testRoot);
      test.add(1);
      test.add(2);
      test.add(3);
      var oldArray = test.toArray();
      test.reverse();
      expect(test.__reverseList).toHaveBeenCalledTimes(1);
      expect(test.toArray()).toEqual(testArray);
      expect(test.toArray()).not.toEqual(oldArray);
      expect(test.root).toEqual(testRoot);
    });
});