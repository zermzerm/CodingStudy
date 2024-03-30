/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42577
 * 문제 이름 : 전화번호 목록
 * 문제 풀이 포인트: sort
 * 나의 실수: 도저히 해시로 못풀겠다, 질문에서 힌트를 얻어버렸다...
 */

function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].indexOf(phone_book[i]) === 0) return false;
  }
  return true;
}

console.log(solution(["119", "97674223", "1185524421", "1195524421"]));
