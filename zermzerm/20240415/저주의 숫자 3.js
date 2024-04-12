/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120871
 * 문제 이름 : 저주의 숫자 3
 * 문제 풀이 포인트: i와 3의 배수 또는 3이 들어간수를 카운트한 cnt를 가지고 더해서 3x마을에서 쓰는 문자로 바꿔서 while문으로 돌려서 저 조건이 안맞을때까지 cnt++하고 진행
 * 나의 실수: while 조건문을 실수해서 크게 돌아왔다....
 */

function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    while (String(i + cnt).includes(3) || (i + cnt) % 3 === 0) cnt++;
  }
  return cnt + n;
}

console.log(solution(40));
