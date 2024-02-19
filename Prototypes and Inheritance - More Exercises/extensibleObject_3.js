function extensibleObject() {
    let parent = {};
    let child = Object.create(parent);

    child.extend = function (obj) {
        let objAsArray = Object.entries(obj);

        for (let [key, value] of objAsArray) {
            if (typeof (value) == "function") {
                parent[key] = value;
            }
            else{
                child[key] = value;
            }
        }
    }
    return child;
}