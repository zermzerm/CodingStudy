/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120922
 * 문제 풀이 포인트: 규칙 찾기
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 가로, 세로로 종이를 자를 때 한 번 자를 때마다 반대 방향의 가위질을 원래 자르는 방향의 -1번 만큼 잘라야 하기 때문에 곱해준다.
 * 2. 반대방향으로 자른 횟수를 더해준다.
 */

const solution = (m, n) => m * (n - 1) + m - 1;
