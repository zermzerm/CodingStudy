function solution(dataSequence, maxSwaps) {
  const arr = dataSequence.split("");
  const leng = arr.length;
  const result = [];

  let oneForward = 0;
  for (let i = 0; i < leng; i++) {
    if (arr[i] === "1") {
      oneForward++;
      result.push("1");
    } else {
      // 0일떄
      let oneCnt = Math.min(oneForward, maxSwaps);
      arr.splice(i - oneCnt, 0, "0");
      arr.splice(i + 1, 1);
      i -= oneCnt;
      maxSwaps -= oneCnt;
    }
    if (maxSwaps === 0) return arr.join("");
  }
  return result.join("");
}

console.log(solution("11011010110011", 5));
