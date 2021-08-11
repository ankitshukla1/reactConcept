export const debounce = function(fun, timeout) {
  let timeOutHandler = undefined;
  return function() {
    let args = arguments;
    clearTimeout(timeOutHandler);
    timeOutHandler = setTimeout(function(){
      fun.apply(null, args);
    }, timeout)
  }
}


export const throttle = function(fun, timeout) {
  let timeOutHandler = undefined;
  return function() {
    let args = arguments;
    if (timeOutHandler) {
      return;
    }
    timeOutHandler = setTimeout(function(){
      timeOutHandler = undefined;
      fun.apply(null, args);
    }, timeout)
  }
}
