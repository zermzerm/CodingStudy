/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * 문제 풀이 포인트: 모든 경우의 수를 구하기
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 체육복이 없는 학생이 0번째 인덱스일 경우 1번째 인덱스만 확인
 * 2. 체육복이 없는 학생이 마지막 인덱스일 경우 마지막에서 두번쨰 인덱스만 확인
 * 3. 그 이외의 체육복이 없는 학생의 인덱스가 i라고 한다면 i-1, i+1 양쪽을 확인하여 2개 이상인 경우 체육복을 빌려준다.
 */

const solution = (n, lost, reserve) => {
  const students = new Array(n).fill(1);
  for (let i = 0; i < lost.length; i++) students[lost[i] - 1]--;
  for (let i = 0; i < reserve.length; i++) students[reserve[i] - 1]++;

  for (let i = 0; i < n; i++) {
    if (students[i] === 0) {
      if (i === 0 && students[1] >= 2) {
        students[i]++;
        students[i + 1]--;
      } else if (i == n - 1 && students[n - 2] >= 2) {
        students[i]++;
        students[n - 2]--;
      } else if (students[i - 1] >= 2) {
        students[i]++;
        students[i - 1]--;
      } else if (students[i + 1] >= 2) {
        students[i]++;
        students[i + 1]--;
      }
    }
  }
  return students.filter((student) => student >= 1).length;
};
