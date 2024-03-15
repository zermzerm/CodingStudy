/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181909
 * 문제 풀이 포인트: localeCompare, ES6에 등장하는 배열에서의 위치 바꾸는 문법
 * 나의 실수: X
 */

/** str2의 순서가 str1보다 빠른지 확인하는 함수 */
const compareOrder = (str1, str2) => {
  for (let i = 0; i < Math.floor(str1.length, str2.length); i++) {
    if (str1[i] > str2[i]) return true;
    else if (str1[i] < str2[i]) return false;
  }

  // str1, str2 둘 중 작은 길이 까지의 검사를 맞췄는데도 return을 하지 않으면 str1이 str2보다 문자열의 길이가 긴지 확인
  if (str1.length > str2.length) return true;
  return false;
};

const solution = (myString) => {
  const answer = [];
  for (let i = 0; i < myString.length; i++) answer.push(myString.slice(i));

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (compareOrder(answer[i], answer[j])) {
        [answer[i], answer[j]] = [answer[j], answer[i]]; // 위치 바꾸기
      }
    }
  }
  return answer;
};
/*
// method 사용 풀이
const solution = (myString) => {
  const answer = [];
  for (let i = 0; i < myString.length; i++) {
    answer.push(myString.slice(i));
  }
  return answer.sort((a, b) => a.localeCompare(b));
};
*/
