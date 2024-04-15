/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42586
 * 문제 풀이 포인트:
 * 나의 실수: 초반에 현재 작업과 그 다음 작업의 작업 속도만 비교해서 틀렸다.
 * [ 풀이 과정 ]
 * 1. 각 진도별 최종적으로 걸리는 작업 날짜들을 새로운 배열로 반환한다.(necessaryTimes)
 * 2. 기준 날짜(compareTime)와 다음 날짜를 비교해서
 * 2-1. 만약 기준 날짜가 더 크거나 같다면 그 작업도 포함할 수 있기 때문에 같이 종료할 작업의 개수를 늘려준다.(sameDay)
 * 2-2. 만약 더 작다면 배포를 한다.(answer.push)
 * 2-3. 배포를 하며 기능을 하나로 초기화한 후 기준 날짜에 비교했던 날짜를 삽입 후 반복문을 진행한다.
 * 2-4. 만약 반복문이 끝난 후에도 기능이 남아 있다면 마지막으로 배포를 한다.(if (sameDay))
 */

const solution = (progresses, speeds) => {
  const necessaryTimes = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  const answer = [];
  let sameDay = 1;
  let compareTime = necessaryTimes[0];
  for (let i = 0; i < necessaryTimes.length - 1; i++) {
    if (compareTime >= necessaryTimes[i + 1]) sameDay++;
    else {
      answer.push(sameDay);
      sameDay = 1;
      compareTime = necessaryTimes[i + 1];
    }
  }
  if (sameDay) answer.push(sameDay);
  return answer;
};
