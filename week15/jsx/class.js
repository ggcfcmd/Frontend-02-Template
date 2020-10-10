class Parent {

    constructor() {
        this.name = 'aaa';
    }
}

class Show extends Parent {

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.name = 'bbb';
    }

    log() {
        return '(' + this.name + ',' + this.x + ',' + this.y + ')'
    }

}

console.log(new Show(1, 2).log())
