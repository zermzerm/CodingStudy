/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/138477
 * 문제 이름 : 명예의 전당
 * 문제 풀이 포인트: arr, result 배열 만든뒤 k보다 arr.length 작으면 그냥 push 아니면 제일 작은거랑 비교후 바꾸기 후 제일 작은것 result에 push하기
 * 나의 실수:
 */

function solution(k, score) {
  const arr = [];
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (arr.length < k) arr.push(score[i]);
    else {
      arr.sort((a, b) => a - b);
      if (arr[0] < score[i]) arr.splice(0, 1, score[i]);
    }
    result.push(Math.min(...arr));
  }
  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
