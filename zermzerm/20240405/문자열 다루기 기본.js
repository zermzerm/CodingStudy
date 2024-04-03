/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12918
 * 문제 이름 : 문자열 다루기 기본
 * 문제 풀이 포인트:
 * 나의 실수: 지수표기법을 고려를 생각 못했다...
 */

const solution = (s) => {
  const arr = s.split('');
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
};
console.log(solution('3e10'));
