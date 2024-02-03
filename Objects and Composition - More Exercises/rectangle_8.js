function rectangle(width, height, color){
    color = color[0].toUpperCase() + color.substring(1);
    let result = {
        width,
        height,
        color,
        calcArea: function (){
            return this.width * this.height;
        }
    }
    return result;
}