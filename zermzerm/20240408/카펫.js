/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * 문제 이름 : 카펫
 * 문제 풀이 포인트: yellow의 약수들로 구해서 약수 각각 2 곱하고 2 더한걸 더했을 때 brown이면 정답
 * 나의 실수:
 */

//다시 푼 코드
function solution(brown, yellow) {
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      if ((yellow / i) * 2 + i * 2 + 4 === brown)
        return [yellow / i + 2, i + 2];
    }
  }
}

console.log(solution(20, 15));

//

//예전에 푼 코드
// function solution(brown, yellow) {
//     var answer = [];
//     var br = brown - 4;
//     if (yellow == 1) {
//       return [3, 3];
//     }
//     for (i = 1; i < yellow; i++) {
//       var a = 0,
//         b = 0;
//       if (yellow % i == 0) {
//         a = i;
//         b = yellow / i;
//         if (answer.filter((v) => a === v).length == 1) {
//           break;
//         }
//         if (a * 2 + b * 2 == br) {
//           answer.push(b, a);
//         }
//       }
//     }
//     answer[0] = answer[0] + 2;
//     answer[1] = answer[1] + 2;
//     return answer;
//   }
