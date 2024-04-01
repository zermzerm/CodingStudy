/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181836
 * 문제 풀이 포인트: repeat method
 * 나의 실수: X
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
