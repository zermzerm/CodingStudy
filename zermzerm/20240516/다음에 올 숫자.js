/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120924
 * 문제 이름 : 다음에 올 숫자
 * 문제 풀이 포인트: 최소 3개의 인자를 가지고 있기에 0번째와 1번째 뺀거와 2번째와 1번째 뺀걸 기준으로 등차 등비 가린다
 * 나의 실수:
 */

function solution(common) {
  if (common[1] - common[0] === common[2] - common[1])
    return common.at(-1) + common[1] - common[0];
  else return common.at(-1) * (common[1] / common[0]);
}

console.log(solution([1, 2, 3, 4]));
