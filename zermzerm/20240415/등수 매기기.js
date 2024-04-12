/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120882
 * 문제 이름 : 등수 매기기
 * 문제 풀이 포인트: 더한 값으로 정렬한 애와 그걸 큰순으로 정렬한 애를 가지고 for문 돌려서 비교, 같은 값이면 while문으로 등수 같게 추가
 * 나의 실수: 더한 값으로 등수 매겼는데 그 값만큼의 1~몇등까지중 일치하는값이 있어버리면 오류가 생김 -> 문자열로 바꾸고 계산
 */

function solution(score) {
  let arr = score.map((el) => String(el[0] + el[1]));
  let sortArr = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < sortArr.length; i++) {
    while (arr.indexOf(sortArr[i]) !== -1) {
      arr[arr.indexOf(sortArr[i])] = i + 1;
    }
  }
  return arr;
}

console.log(
  solution([
    [81, 70],
    [70, 81],
    [30, 50],
    [70, 10],
    [51, 29],
    [100, 100],
    [0, 1],
    [1, 1],
    [1, 2],
    [2, 0],
  ])
);
//2 2 4 4 4 1 10 8 7 8
