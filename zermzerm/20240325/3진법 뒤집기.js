/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/68935
 * 문제 풀이 포인트: 2,3 -> 10진법 : parseInt(수,2or3)
 * 나의 실수:
 */

const solution = (n) => parseInt(n.toString(3).split("").reverse().join(""), 3);

console.log(solution(45));
