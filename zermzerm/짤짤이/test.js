// let remaining = "01234";
// for (let i = 0; i < remaining.length; i++) {
//   let tmp = remaining.slice(0, i) + remaining.slice(i + 1);
//   console.log(tmp);
// }

function solution(num_list) {
  const answer = [0, 0];
  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      answer[0] += num_list[i];
    } else {
      answer[1] += num_list[i];
    }
  }
  return Math.max(...answer);
}

console.log(solution([4, 2, 6, 1, 7, 6]));
