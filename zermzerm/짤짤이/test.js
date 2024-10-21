function generateBinarySequences(length) {
  const result = [];

  for (let i = 0; i < Math.pow(2, length); i++) {
    // 이진수로 변환한 값을 앞에 0을 채워서 길이에 맞춤
    const binary = i.toString(2).padStart(length, "0").split("").map(Number);
    result.push(binary);
  }

  return result;
}

function solution(numbers, target) {
  let cnt = 0;
  const totalArr = generateBinarySequences(numbers.length);
  for (let i = 0; i < totalArr.length; i++) {
    let sum = 0;
    for (let j = 0; j < totalArr[i].length; j++) {
      totalArr[i][j] === 0 ? (sum += numbers[j]) : (sum -= numbers[j]);
    }
    if (sum === target) cnt++;
  }
  return cnt;
}

console.log(solution([1, 1, 1, 1, 1], 3));

// function solution(n) {
//   if(n===1) return 1;
//   let arr = [1,1,2];
//   for(let i = 2;i < n; i++){
//     arr.push((arr[i-1]+arr[i])%1234567);
//   }
//   return arr.at(-1)
// }
// console.log(solution(3))

/*
1 = 1

2 = 2

3 = 3

4 = 5

5 = 8

6 = 13

7 = 21
*/

// let permutations = permute([1, 1, 2]);
// console.log(permutations);

/* let remaining = "01234";
// for (let i = 0; i < remaining.length; i++) {
//   let tmp = remaining.slice(0, i) + remaining.slice(i + 1);
//   console.log(tmp);
  } */

/* endsWith = 매개변수로 끝나는지 확인 / startsWith = 매개변수로 시작되는지 확인
// function solution(my_string, is_suffix) {
//   return my_string.endsWith(is_suffix) ? 1 : 0
//   }

console.log(solution("banana","ana")) */

// function solution(num_list) {
//   const answer = [0, 0];
//   for (let i = 0; i < num_list.length; i++) {
//     if (i % 2 === 0) {
//       answer[0] += num_list[i];
//     } else {
//       answer[1] += num_list[i];
//     }
//   }
//   return Math.max(...answer);
// }

// console.log(solution([4, 2, 6, 1, 7, 6]));
