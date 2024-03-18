/**
 * URL : https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * 
 */

function solution(s) {
  const stack = [];

  s.split("").map((val) => {
    if (val === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(val);
    }
  });

  return stack.length === 0;
}

// 두 번째 시도 : 80점
// function solution(s) {
//   let answer = 0;
//   let str = [...s];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") {
//       answer += 1;
//     } else if (str[i] === ")") {
//       answer += -1;
//     }
//   }
//   if (answer === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// 첫 번째 시도 : 73점
// function solution(s) {
//   let str1 = s.slice(0, 1);
//   if (str1 === ")") {
//     return false;
//   }
//   let str2 = s.slice(-1);
//   if (str2 == "(") {
//     return false;
//   } else if (str2 == ")") {
//     return true;
//   }
// }
