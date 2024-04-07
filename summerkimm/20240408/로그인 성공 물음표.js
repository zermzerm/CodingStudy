/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120883
 * 문제 풀이 과정
 * 1. map으로 db 배열을 돈다.
 * 2. 돌면서 조건이 login 이거나 wrong pw인 경우 해당 메세지로 리턴한다.
 * 3. 아무것도 해당되지 않으면 fail로 리턴한다.
 */
function solution(id_pw, db) {
  let answer = "fail";
  db.map((val) => {
    if (val[0] === id_pw[0] && val[1] === id_pw[1]) return (answer = "login");
    if (val[0] === id_pw[0] && val[1] !== id_pw[1])
      return (answer = "wrong pw");
  });
  return answer;
}
