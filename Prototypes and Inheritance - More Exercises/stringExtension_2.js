(function(){
    String.prototype.ensureStart = function(str){
       return this.startsWith(str) ? this.toString() : str + this;
    };
    String.prototype.ensureEnd = function(str){
        return this.endsWith(str) ? this.toString() : this + str;
    }; 
    String.prototype.isEmpty = function(){
        return !this.toString();
    };
    String.prototype.truncate = function(n){
        if(n < 4){
            return ".".repeat(n);
        }
        if(this.length <= n){
            return this.toString();
        }
        if(this.includes(" ")){
            let words = this.split(" ");
            let result = [];
            for(let word of words){
                if(result.join(" ").length + word.length + 3 <= n){
                    result.push(word);
                }
                else {
                    break;
                }
            }
            return result.join(" ") + "...";
        }
        return this.slice(0, n - 3) + "...";
    };
    String.format = function(str, ...params){
        for (let i = 0; i < params.length; i++){
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }
})()