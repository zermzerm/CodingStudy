/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181943
 * 문제 이름 : 문자열 겹쳐쓰기
 * 문제 풀이 포인트: splice하기 위해 split하고 splice로 s번째부터 그 길이만큼 잘라서 overwrite_string 추가하고 join하기
 * 나의 실수:
 */

function solution(my_string, overwrite_string, s) {
  let answer = my_string.split('');
  answer.splice(s, overwrite_string.length, overwrite_string);
  return answer.join('');
}

console.log(solution('He11oWor1d', 'lloWorl', 2));
