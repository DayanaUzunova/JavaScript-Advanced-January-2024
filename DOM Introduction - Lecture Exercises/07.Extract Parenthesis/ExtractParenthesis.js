function extract(content) {
    let param = document.getElementById('content').textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(param);
    while(match){
        result.push(match[1]);
        match = pattern.exec(param);
    }
    return result.join('; ')
}