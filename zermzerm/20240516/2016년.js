/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12901
 * 문제 이름 : 2016년
 * 문제 풀이 포인트: 일수를 배열로 만들고 그만큼 더하고 7로 나누고 요일에서 몇번째인지 찾는다
 * 나의 실수: 합친 날짜를 7로 나눠서 0이되면 맨마지막수로 돌아가야되는데 -1로만 했을때는 이 경우를 따지지 못해서 실패했었다
 */

const MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAY = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let mon = b;
  for (let i = 0; i < a - 1; i++) {
    mon += MONTH[i];
  }
  return mon % 7 === 0 ? DAY.at(-1) : DAY[(mon % 7) - 1];
}

console.log(solution(5, 5));
