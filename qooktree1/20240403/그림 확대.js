/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181836
 * 문제 풀이 포인트: repeat method
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 가로, 세로로 늘려야 하기 때문에 answer 배열을 만들어 추가하는 방식을 사용합니다.
 * 2. picture의 각 인자마다 가로로 늘려줘야 하기 때문에 tmp 변수를 빈 문자열로 초기화 합니다.
 * 3. 반복문을 사용하여 picture의 인자의 문자를 늘려줍니다. tmp 변수에 repeat method를 사용해 문자를 더해줍니다.
 * 4. 세로로 늘려줘야 하기 때문에 늘어난 tmp를 반복문을 사용하여 k번 answer 배열에 추가합니다.
 */

const solution = (picture, k) => {
  const answer = [];
  picture.forEach((str) => {
    let tmp = "";
    for (let i = 0; i < str.length; i++) tmp += str[i].repeat(k);
    for (let i = 0; i < k; i++) answer.push(tmp);
  });
  return answer;
};
