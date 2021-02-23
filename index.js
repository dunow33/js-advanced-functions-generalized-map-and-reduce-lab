function map(arr, func){
    return arr.map(element => func(element));
}

function reduce(src, callBack, start){
    let result = (!!start) ? start : src[0];
  
    for (let i = (!!start) ? 0 : 1; i < src.length; i++) {
      result = callBack(src[i], result);
    }
  
    return result;
  }