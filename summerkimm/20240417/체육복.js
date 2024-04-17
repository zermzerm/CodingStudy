/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42862
 */

function solution(n, lost, reserve) {
  // 여벌 체육복을 가져온 학생이 체육복을 도난당할 수 있음 -> 빌려줄 수 없으므로 제외시키기
  let realLost = lost.filter((val) => !reserve.includes(val));
  let realReserve = reserve.filter((val) => !lost.includes(val));

  // [4, 2] 이렇게 나올 경우가 있으므로 
  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  for (let i = 0; i < realReserve.length; i++) {
    if (realLost.includes(realReserve[i] - 1)) {
      realLost = realLost.filter((val) => val !== realReserve[i] - 1);
    } else if (realLost.includes(realReserve[i] + 1)) {
      realLost = realLost.filter((val) => val !== realReserve[i] + 1);
    }
  }
  // 못 빌린 학생 제외
  return n - realLost.length;
}
