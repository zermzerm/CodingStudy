/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120864#
 * 문제 풀이 포인트: 재할당 가능한 let 변수의 사용
 * 나의 실수: myString의 마지막이 숫자로 끝나는 경우를 처음에 고려를 하지 않음
 */

const solution = (myString) => {
  let answer = 0;
  let tmp = "";
  for (let i = 0; i < myString.length; i++) {
    // 숫자일 경우
    if (!isNaN(myString[i])) tmp += myString[i];
    // 문자일 경우
    else {
      answer += Number(tmp);
      tmp = "";
    }
  }
  return answer + Number(tmp);
};
