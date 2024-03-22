/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/68935
 * 문제 풀이 포인트: toString, parseInt
 * 나의 실수: X
 */

const solution = (n) => parseInt(n.toString(3).split("").reverse().join(""), 3);
