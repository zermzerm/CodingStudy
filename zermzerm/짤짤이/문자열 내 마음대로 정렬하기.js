//a.localeCompare(b) -> 사전순 정렬할 때 사용하기

function compare(a, b, n) {
  if (a[n] === b[n]) {
    return a.localeCompare(b);
  } else {
    return a[n].charCodeAt() - b[n].charCodeAt();
  }
}

function solution(strings, n) {
  return strings.sort((a, b) => compare(a, b, n));
}

console.log(solution(["edc", "abc"], 2));
