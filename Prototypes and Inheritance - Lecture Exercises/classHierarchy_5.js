function classHierarchy() {
    class Figure {
        #units;
        #ratios = {
            m: 1 / 10,
            cm: 1,
            mm: 10
        }

        constructor(units = 'cm') {
            this.changeUnits(units);
        }

        changeUnits(units) {
            this.#units = units;
        }

        toString() {
            return `Figures units: ${this.#units}`;
        }

        get ratio() {
            return this.#ratios[this.#units];
        }
    }

    class Circle extends Figure {
        #radius;
        constructor(radius, units = 'cm') {
            super(units);
            this.#radius = radius;
        }


        get radius() {
            return this.#radius * this.ratio;
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        #height;
        #width;
        constructor(width, height, units = 'cm') {
            super(units);
            this.#width = width;
            this.#height = height;
        }


        get width() {
            return this.#width * this.ratio;
        }

        get height() {
            return this.#height * this.ratio;
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}
