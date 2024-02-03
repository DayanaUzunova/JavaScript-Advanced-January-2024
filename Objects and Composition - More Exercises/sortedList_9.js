function sortedList( ){
    let sortList = [];

    function checkIndex(index){
        if(index < 0 || index >= this.size || isNaN(index)){
            return true;
        }
        return false;
    }
    function sortArr(a, b){
        return a - b;
    }
    let result = {
        add: function (el) {
            if(typeof(el) !== "number" || isNaN(el)){
                return;
            }
            sortList.push(Number(el));
            sortList.sort(sortArr);
            this.size = sortList.length
        },
        remove: function(index){
            if (checkIndex(index)){
                return;
            }
            sortList.splice(index, 1);
            sortList.sort(sortArr);
            this.size = sortList.length;
        },
        get: function (index){
            if (checkIndex(index)){
                return;
            }
            return sortList[index];
        },
        size: 0,
    }
    return result;
}