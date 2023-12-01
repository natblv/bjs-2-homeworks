function parseCount(number) {
    let parseResult = Number.parseFloat(number);
    if (Number.isNaN(parseResult)) {
        throw new Error("Невалидное значение");
    }
    return parseResult;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.getError("Треугольник с такими сторонами не существует");
  }

  getError(error) {
    if (
      this.a > this.b + this.c ||
      this.b > this.a + this.c ||
      this.c > this.a + this.b
    ) {
      throw new Error(error);
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }
  
  get area() {
    const p = (1 / 2) * (this.a + this.b + this.c);
    return Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
    );
  }
}
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        }
      };
    }
  }
  
  
  