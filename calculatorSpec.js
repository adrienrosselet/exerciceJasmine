describe("Calculator", function() {

    it("should properly calculate an addition", function() {
        calculator.result = calculator.add(1,3);
        expect(calculator.result).toEqual(4);
        calculator.result = calculator.add(1,);
        expect(calculator.result).toBeDefined();
        calculator.result = calculator.add(2,);
        expect(calculator.result).toEqual(NaN);
        expect(calculator.add(1,0)).toEqual(1);
        expect(calculator.add(0,1)).toEqual(1);
    });

    it("should properly calculate a substraction", function () {
      calculator.result = calculator.sub(1,3);
      expect(calculator.result).toEqual(-2);
      calculator.result = calculator.sub(1,);
      expect(calculator.result).toBeDefined();
      calculator.result = calculator.sub(2,);
      expect(calculator.result).toEqual(NaN);
      expect(calculator.sub(1,0)).toEqual(1);
      expect(calculator.sub(0,1)).toEqual(-1);
    });

    it("should properly calculate a multiplication", function () {
      calculator.result = calculator.mul(1,3);
      expect(calculator.result).toEqual(3);
      calculator.result = calculator.mul(1,);
      expect(calculator.result).toBeDefined();
      calculator.result = calculator.mul(2,);
      expect(calculator.result).toEqual(NaN);
      expect(calculator.mul(1,0)).toEqual(0);
      expect(calculator.mul(0,1)).toEqual(0);
    });

    it("should properly calculate a division", function () {
      calculator.result = calculator.div(1,2);
      expect(calculator.result).toEqual(0.5);
      calculator.result = calculator.div(1,);
      expect(calculator.result).toBeDefined();
      calculator.result = calculator.div(2,);
      expect(calculator.result).toEqual(NaN);
      expect(calculator.div(1,0)).toEqual(Infinity);
      expect(calculator.mul(0,1)).toEqual(0);
    });
});
