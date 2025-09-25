function MapFunc(arr, func) {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    //index를 알기 위해 i 넘겨주기, 배열 길이 알기 위해 arr 전체 넘겨주기
    //(value, index, array)로 Array 메서드의 JS 표준이 정해져있다.
    returnArr.push(func(arr[i], i, arr));
  }
  return returnArr;
}

function FilterFunc(arr, func) {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) returnArr.push(arr[i]);
  }
  return returnArr;
}

function ReduceFunc(arr, func, initVal) {
  let acc = initVal !== undefined ? initVal : arr[0];
  let startIdx = initVal !== undefined ? 0 : 1;
  for (let i = startIdx; i < arr.length; i++) {
    //(accumulator, currentValue, index, array)로 정의돼 있다.
    acc = func(acc, arr[i], i, arr);
  }
  return acc;
}
