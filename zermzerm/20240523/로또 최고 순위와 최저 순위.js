/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/77484
 * 문제 이름 : 로또의 최고 순위와 최저 순위
 * 문제 풀이 포인트: 0의 개수와 일치하는 값의 개수 저장해두고 배열로 return
 * 나의 실수: 0만 6개 있을때 고려 못했다, [6,6]나오는 상황 고려 못했다
 */

function solution(lottos, win_nums) {
  lottos.sort((a, b) => b - a);
  let zeroCount = lottos.filter((el) => el === 0).length;
  let sameCount = 0;
  for (let i = 0; i < lottos.length - zeroCount; i++) {
    if (win_nums.includes(lottos[i])) sameCount++;
  }
  if (zeroCount === 6 && sameCount === 0) return [1, 6];
  return [
    7 - (sameCount + zeroCount) > 6 ? 6 : 7 - (sameCount + zeroCount),
    7 - sameCount > 6 ? 6 : 7 - sameCount,
  ];
}

console.log(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]));
