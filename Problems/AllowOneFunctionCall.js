const once = (fn) =>{
    let HasbeenCalled = false;
    let  result;

    return (...args) =>{
      if(!HasbeenCalled){
        result = fn(...args)
        HasbeenCalled = true;
        return result;
      }
      else{
        return undefined;
      }
    }

}