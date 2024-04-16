/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42586
 * 실수한 부분
 * - 변수에 재할당을 생각 못했음 ㅠ
 * 다시 풀어보기! 
 */
function solution(progresses, speeds) {
  // 기능별 작업 완료 기간
  let days = [];
  for (let i = 0; i < progresses.length; i++) {
    let completedDay = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(completedDay);
  }
  // const days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));

  let count = 1;
  let maxDay = days[0];
  let answer = [];

  for (let j = 1; j < days.length; j++) {
    if (days[j] <= maxDay) {
      count++;
    } else {
      maxDay = days[j];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
