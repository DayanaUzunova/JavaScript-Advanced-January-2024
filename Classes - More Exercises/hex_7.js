class Hex{
    constructor(value){
        this.value = value;
    }

    toString(){
        return "0x" + this.value.toString(16).toUpperCase();
    }

    valueOf(){
        return this.value;
    }

    plus(newHex){
        return new Hex(this.value + Number(newHex));
    }
    minus(newHex){
        return new Hex(this.value - Number(newHex));
    }
    parse(string){
        return parseInt(string, 16);
    }
}