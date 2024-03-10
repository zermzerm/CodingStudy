/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181897
 * 문제 이름: 문자열 묶기
 * 문제 풀이 포인트: 객체를 배열로 바꿔서 정렬
 * 나의 실수: 너무 런타임 시간이 오래 걸린다... 다른 방법이 생각이 나지 않았다
 */

function solution(strArr) {
  let cnt = {},
    sortedCnt = [];

  for (i = 0; i < strArr.length; i++) {
    if (!cnt[strArr[i].length]) {
      cnt[strArr[i].length] = 1;
    } else {
      cnt[strArr[i].length] += 1;
    }
    sortedCnt = Object.entries(cnt).sort((a, b) => b[1] - a[1]);
  }
  return sortedCnt[0][1];
}
