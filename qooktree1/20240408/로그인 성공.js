/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120883
 * 문제 풀이 포인트: X
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1.반복문을 사용하여 입력한 아이디와 비밀번호와 비교하여 조건에 맞는 경우 return해준다. 만약 for문이 끝날 때까지 return 을 못한 경우 "fail"을 return 한다.
 * 1-1. 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
 * 1-2.로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를 return합니다.
 * 1-3. 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.
 */

const solution = (idPw, db) => {
  for (const [dbId, dbPw] of db) {
    if (idPw[0] === dbId && idPw[1] === dbPw) return "login";
    if (idPw[0] === dbId && idPw[1] !== dbPw) return "wrong pw";
  }
  return "fail";
};
