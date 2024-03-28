/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 문제 풀이 포인트: 해시...?
 * 나의 실수: 해시를 안썼었다.
 */

//해시 써본 코드? 더 안좋은데? 잉?
const solution = (participant, completion) => {
  let obj = new Map();
  for (let i = 0; i < participant.length; i++) {
    obj.has(participant[i])
      ? obj.set(participant[i], obj.get(participant[i]) + 1)
      : obj.set(participant[i], 1);
  }
  for (let i = 0; i < completion.length; i++) {
    obj.set(completion[i], obj.get(completion[i]) - 1);
    if (obj.get(completion[i]) === 0) obj.delete(completion[i]);
  }
  return [...obj].flat()[0];
};

//해시 안 쓴 코드(sort)
// const solution = (participant, completion) => {
//   participant.sort();
//   completion.sort();
//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) return participant[i];
//   }
// };

console.log(
  solution(
    ["marina", "josipa", "nikola", "marina", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola", "marina"]
  )
);
