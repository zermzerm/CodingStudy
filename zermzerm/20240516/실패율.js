/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42889
 * 문제 이름 : 실패율
 * 문제 풀이 : 개수 센거와 그걸 정렬한 배열 두가지 이용해서 answer 배열 만들기
 * 나의 실수 : 그 스테이지에 도달한 개수가 0인 경우를 고려안했다
 */

// 다시 푼 코드
function solution(N, stages) {
  const arr = [],
    answer = [];
  for (let i = 1; i <= N; i++) {
    let stageCnt = 0,
      overCnt = 0;
    for (let j = 0; j < stages.length; j++) {
      if (i <= stages[j]) overCnt++;
      if (i === stages[j]) stageCnt++;
    }
    arr.push(overCnt === 0 ? [i, 0] : [i, stageCnt / overCnt]);
  }
  return arr.sort((a, b) => b[1] - a[1]).map((el) => el[0]);
}

// 처음 푼 코드
// function solution(N, stages) {
//   const arr = [],
//     answer = [];
//   for (let i = 1; i <= N; i++) {
//     let stageCnt = 0,
//       overCnt = 0;
//     for (let j = 0; j < stages.length; j++) {
//       if (i <= stages[j]) overCnt++;
//       if (i === stages[j]) stageCnt++;
//     }
//     arr.push(overCnt === 0 ? 0 : stageCnt / overCnt);
//   }
//   const sortedArr = [...arr].sort((a, b) => b - a);
//   for (let i = 0; i < sortedArr.length; i++) {
//     answer.push(arr.indexOf(sortedArr[i]) + 1);
//     arr.splice(arr.indexOf(sortedArr[i]), 1, -1);
//   }
//   return answer;
// }

console.log(solution(5, [1, 2, 3, 4]));
