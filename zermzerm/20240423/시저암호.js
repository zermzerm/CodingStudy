/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12926
 * 문제 이름 : 시저암호
 * 문제 풀이 포인트: 문자열.charCodeAt(), String.fromCharCode(번호), 6597
 * 나의 실수: 등호 실수
 */

//다시 푼 코드
function solution(s, n) {
  //대문자 65~90
  //소문자 97~122
  let answer = '';
  s = s.split('');
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      answer += ' ';
      continue;
    }
    let newChar = s[i].charCodeAt();
    //대문자
    if (newChar <= 90) {
      newChar += n;
      if (newChar > 90) newChar -= 26;
      answer += String.fromCharCode(newChar);
    }
    //소문자
    else {
      newChar += n;
      if (newChar > 122) newChar -= 26;
      answer += String.fromCharCode(newChar);
    }
  }
  return answer;
}

console.log(solution('Z Z', 1));

//예전에 푼 코드
// function solution(s, n) {
//   //아스키 코드 65 97
//   //문자 -> 아스키코드 = 문자.charCodeAt()
//   //아스키코드 -> 문자 = String.fromCharCode(번호)
//   let arr = s.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === " ") continue;
//     if (arr[i].charCodeAt() <= 90) {
//       //대문자 65~90
//       let cur = arr[i].charCodeAt() + n;
//       if (cur > 90) cur -= 26;
//       arr.splice(i, 1, String.fromCharCode(cur));
//     } else {
//       //소문자 97~122
//       let cur = arr[i].charCodeAt() + n;
//       if (cur > 122) cur -= 26;
//       arr.splice(i, 1, String.fromCharCode(cur));
//     }
//   }
//   return arr.join("");
// }
