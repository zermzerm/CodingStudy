/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/77484
 * 문제 풀이 포인트: 객체를 이용
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 최고 순위와 최저 순위를 따로 계산한다.
 * 2. 0의 개수를 count하여 최고 최저일 때를 비교하여 계산한다.
 */

const solution = (lottos, winNums) => {
  const rankMap = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };
  const zeroCnt = lottos.filter((lotto) => lotto === 0).length;
  const winCnt = lottos.filter((lotto) => winNums.includes(lotto)).length;
  return [rankMap[String(zeroCnt + winCnt)] ?? 6, rankMap[String(winCnt)] ?? 6];
};
