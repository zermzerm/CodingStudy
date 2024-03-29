/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120902#
 */
function solution(my_string) {
  let strArr = my_string.split(" ");
  let answer = Number(strArr[0]);

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "+") {
      answer += Number(strArr[i + 1]);
    } else if (strArr[i] === "-") {
      answer -= Number(strArr[i + 1]);
    }
  }
  return answer;
}
