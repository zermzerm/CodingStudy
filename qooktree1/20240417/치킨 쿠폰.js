/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120884
 * 문제 풀이 포인트:
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 치킨 쿠폰이 10개 미만일때까지 white문 실행
 * 2. 새롭게 얻는 서비스 치킨은 answer에 추가하면서 현재 chicken에 남은 치킨 + 새로 새로 얻은 서비스 치킨을 대입
 */

const solution = (chicken) => {
  let answer = 0;
  while (chicken >= 10) {
    const newChicken = Math.floor(chicken / 10);
    answer += newChicken;
    chicken = (chicken % 10) + newChicken;
  }
  return answer;
};
