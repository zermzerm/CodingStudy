/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * 문제 풀이 포인트: 2중 for문
 * 나의 실수: X
 */

const solution = (arr1, arr2) => {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const tmpArr = [];
    for (let j = 0; j < arr1[0].length; j++) {
      tmpArr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(tmpArr);
  }
  return answer;
};
