/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42842#
 * 문제 이름 : 카펫
 */

function solution(brown, yellow) {
  const total = brown + yellow; // 전체 격자 수
  for (let width = 3; width <= total / 2; width++) {
    const height = total / width; // 높이 계산
    if ((width - 2) * (height - 2) === yellow) {
      // 노란색 격자 수가 yellow와 일치하는지 확인
      return [height, width];
    }
  }
}
