function solution(arr, queries) {
  for(let i = 0; i < queries.length; i++) {
      let [s, e, k] = queries[i];
      for (j = s; j < e + 1; j++) {
          if(j % k === 0) {
              arr[j] +=1;
          }
      }
  }
  return arr;
  
}
