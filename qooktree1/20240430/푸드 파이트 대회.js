/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * 문제 풀이 포인트: 첫번째 인덱스는 무조건 1이고 중앙을 기준으로 대칭이기 때문에 한 부분만 고려한다.
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 첫번째 인덱스를 제외한 한쪽의 음식 패턴을 구한다.
 * 2. 나누기 2를 한 몫만큼 인덱스를 늘려준어 foodOrder에 더한다.
 * 3. 반복문을 통해 정해진 foodOrder를 0(물)을 기준으로 반대편에는 뒤집은 순서를 더해준다.
 */

const solution = (foods) => {
  let foodOrder = "";
  foods.slice(1).forEach((food, idx) => {
    foodOrder += String(idx + 1).repeat(Math.floor(food / 2));
  });
  return foodOrder + "0" + foodOrder.split("").reverse().join("");
};
