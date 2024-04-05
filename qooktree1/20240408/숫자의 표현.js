/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12924
 * 문제 풀이 포인트: 투 포인터 알고리즘
 * 나의 실수: while문에 추가 종료조건을 넣지 않아 효율성이 조금 떨어졌었다.
 * [ 풀이 과정 ]
 * 1. 시작 숫자와 끝 숫자를 정하여 n까지 while문을 사용하여 계산한다.
 * 2. 숫자들의 합을 변수로 관리하여
 * 2-1. 숫자들의 합이 n보다 작을 경우 끝 숫자를 늘려주고 합에 더해준다.
 * 2-2. 숫자들의 합이 n보다 크거나 같을 경우 시작 숫자를 합에서 빼주고 늘려준다.
 */

const solution = (n) => {
  // s: 시작 숫자, e: 끝 숫자, numberSum: 숫자들의 합, answer: 구해야할 경우의 수
  let [s, e, numberSum, answer] = [1, 1, 1, 0];

  // 시작 숫자는 끝 숫자를 넘어갈 수 없고 끝 숫자는 n보다 크거나 작아야 한다.
  while (s <= e && e <= n) {
    // 종료 조건
    // 끝 값이 n이고 숫자들의 합이 n보다 작을 때 숫자들의 합을 늘릴 방법이 없기 때문에 return
    if (e === n && numberSum < n) return answer;

    // 숫자들의 합이 n보다 작을 때는 합을 늘려야 하기 때문에 end 숫자를 하나 늘려서 더한다.
    if (numberSum < n) numberSum += ++e;
    // 숫자들의 합이 n보다 크거나 같을 경우
    // 1. 합을 줄여야 하기 때문에 기존 start 숫자를 합에서 뺀 후 하나를 늘린다.
    // 2. 합과 n이 같은 경우 정답을 늘려준다. 다른 answer도 찾아야하기 때문에 start 숫자를 합에서 뺀 후 하나를 늘린다.
    else if (numberSum >= n) {
      if (numberSum === n) answer++;
      numberSum -= s++;
    }
  }
  return answer;
};
