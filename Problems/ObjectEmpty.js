var isEmpty = function(obj) {
    for(let item in obj){
        return false;
    }
    return true;
};