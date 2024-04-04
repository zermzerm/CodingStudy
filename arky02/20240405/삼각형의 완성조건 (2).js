// https://school.programmers.co.kr/learn/courses/30/lessons/120868
// 1. 먼저 수학 공식을 이용해 식을 세웠다. x-y < X, X < x+y (x>y일 때)를 만족해야 했고, x>y일 때 2y-1을 구하면 되는 문제임을 깨달았다.

const solution = ([a,b]) => (a> b) ? 2*b-1 : 2*a-1;
