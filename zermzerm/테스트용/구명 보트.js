//답 대충 이해가 가는..? 어렵다
function solution(people, limit) {
  const arr = people.sort((a, z) => a - z);
  const { length } = arr;
  let start = 0;
  let end = length - 1;
  let count = 0;
  while (start <= end) {
    console.log(arr[start], arr[end], start, end);
    if (arr[start] + arr[end] > limit || start === end) {
      end--;
    } else {
      start++;
      end--;
      count++;
    }
  }
  return length - count;
}

//다시 푼 코드 -> 효율성 안됨 1,2,3번
// function solution(people, limit) {
//   let cnt = 0;
//   people.sort((a, b) => a - b);
//   let start = 0;
//   let end = people.length - 1;
//   while (people.length !== 0) {
//     if (people[start] > limit / 2) {
//       cnt += people.length;
//       break;
//     }
//     if (start === end) {
//       people.splice(start, 1);
//       cnt++;
//       end = people.length - 1;
//     }
//     if (people[start] + people[end] <= limit) {
//       people.splice(end, 1);
//       people.splice(start, 1);
//       cnt++;
//       end = people.length - 1;
//     } else {
//       end--;
//     }
//   }
//   return cnt;
// }

console.log(solution([30, 30, 50, 50, 70, 80], 100));

10, 80 / 20, 70 / 30, 60 / 50, 50;
//예전에 푼 코드
// function solution(people, limit) {
//     var answer = 0,
//       sum = 0,
//       cnt = 0;
//     people.sort((a, b) => a - b);
//     for (i = 0; i < people.length; i++) {
//       for (j = 1; j < people.length - i; j++) {
//         if (people[i] + people[people.length - j] <= limit) {
//           cnt++;
//           people.splice(i, 1);
//           people.splice(people.length - j, 1);
//           i--;
//         }
//       }
//     }
//     cnt += people.length;
//     return cnt;
//   }
