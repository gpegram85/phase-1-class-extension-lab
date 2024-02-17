// Your code here

class Polygon{
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let sum = 0
        this.sides.forEach(side => {
            sum += side
        })
        return sum
    }
}

class Triangle extends Polygon{
    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]

        if(a + b < c || a + c < b || b + c < a) {
            return false
        } else return true
    }
}

class Square extends Polygon{
    get isValid() {
        for(let i = 0; i < this.sides.length; i++) {
            if(this.sides[i] !== this.sides[0]) {
                return false
            }
        } return true
    } 

    get area() {
        return this.sides[0] * this.sides[1]
    }
}