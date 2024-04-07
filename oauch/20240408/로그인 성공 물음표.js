/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * 문제 이름 : 로그인 성공?
 * 문제 풀이
 * 1. id값과 pw값을 변수에 담아준다.
 * 2. db의 배열을 모두 풀어주고 거기에 id 값이 포함되어 있지않으면 'fail'
 * 3. db의 배열을 돌리면서, id 값이랑 pw 값이 같으면 'login'
 * 4. pw 값만 다르다면 'wrong pw'
 */

function solution(id_pw, db) {
  const id = id_pw[0];
  const pw = id_pw[1];
  if (!db.flat().includes(id)) return "fail";
  for (data of db) {
    if (id === data[0] && pw === data[1]) return "login";
    if (id === data[0] && pw !== data[1]) return "wrong pw";
  }
}
