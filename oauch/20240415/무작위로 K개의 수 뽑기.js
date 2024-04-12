function solution(arr, k) {
  const result = [];
  const rmDuplicate = new Set(arr);
  for (let i = 0; i < k; i++) {
    [...rmDuplicate][i] !== undefined
      ? result.push([...rmDuplicate][i])
      : result.push(-1);
  }
  return result;
}
