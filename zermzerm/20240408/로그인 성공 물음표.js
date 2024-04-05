/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120883
 * 문제 이름 : 로그인 성공?
 * 문제 풀이 포인트: for 써서 아이디 비번 일치하면 login return하고 아이디만 일치하면 일단 answer에 wrong pw 푸시한다. 그다음 for문 다 돌고 answer 가 빈 문자열이면 fail이고 아닌경우는 wrong pw이다.
 * 나의 실수:
 */

function solution(id_pw, db) {
  let answer = '';
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0] && db[i][1] === id_pw[1]) return 'login';
    if (db[i][0] === id_pw[0] && db[i][1] !== id_pw[1]) answer += 'wrong pw';
  }
  return answer === '' ? 'fail' : answer;
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ]
  )
);
