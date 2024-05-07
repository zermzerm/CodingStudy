/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/136798
 * 문제 풀이 포인트: 약수를 구하는 방식을 단순화
 * 나의 실수: 생각이 나지 않아 팀원의 도움을 받았습니다.
 * [ 풀이 과정 ]
 * 1. 1부터 number 까지의 숫자들을 반복문을 돌린다.
 * 2. 약수 판별을 숫자의 제곱근까지 판별한다.
 * 3. 제곱근까지 판별할 때 중복되지 않는 값들도 구해야하기 때문에 조건문을 활용한다.
 * 3-1. ex. 8의 약수를 구할 때 2까지 판별하기때문에 2가 약수인 것을 판별할 때는 4도 약수인 경우를 판별해야한다. 따라서 조건문을 활용하여 8 / 2 인 경우도 고려를 한다.
 * 4. 약수의 개수가 limit 초과인 경우 power를 answer에 더하고 아니면 나온 cnt 값을 answer에 더한다.
 */

const solution = (number, limit, power) => {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j <= i ** 0.5; j++) {
      if (i % j === 0) {
        if (j !== i / j) cnt++; // 제곱근으로 중복되는 값을 여기서 처리
        cnt++;
      }
      if (cnt > limit) {
        cnt = power;
        break;
      }
    }
    answer += cnt;
  }
  return answer;
};
