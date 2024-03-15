/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * 문제 이름 : 올바른 괄호
 */

function solution(s) {
  const result = [];
  const split = s.split("");

  //// 첫번째로 ')' 나오는 경우 바로 false
  if (s[0] === ")") return false;

  // 1. s를 배열로 만들어서 result에 계속 저장
  // 2. 만약 마지막으로 들어간게 ')'이면 (result의 길이 - 2)의 인덱스를 2만큼 자름
  split.map((val) => {
    result.push(val);
    if (result[result.length - 1] === ")") {
      result.splice(result.length - 2, 2);
    }
  });

  // result의 길이가 0이면 true, 그렇지 않으면 false
  return result.length === 0 ? true : false;
}

// 첫번째 시도 실패 케이스
// function solution(s) {
//   const split = s.split("");
//   return split[0] === "(" && split[s.length - 1] === ")" ? true : false;
// }
