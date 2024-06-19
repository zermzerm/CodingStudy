/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/67256
 * 문제 이름 : 키패드 누르기
 * 문제 풀이 포인트: 맨하탄 거리 구하기 방법
 * 나의 실수: 문제를 제대로 안읽고 피타고라스 거리 구하기 방법으로 풀었었다.
 */

function solution(numbers, hand) {
  let left = [1, 1],
    right = [1, 3],
    answer = "",
    phone = [
      ["*", 0, "#"],
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
    ];
  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
      case 1:
      case 4:
      case 7:
        answer += "L";
        left = [5 - Math.ceil(numbers[i] ** 0.5), 1];
        break;
      case 3:
      case 6:
      case 9:
        answer += "R";
        right = [5 - Math.floor(numbers[i] ** 0.5), 3];
        break;
      case 2:
      case 5:
      case 8:
      case 0:
        let current = [];
        for (let j = 0; j < phone.length; j++) {
          if (phone[j].includes(numbers[i])) {
            current = [j + 1, phone[j].indexOf(numbers[i]) + 1];
            if (
              Math.abs(left[0] - current[0]) + Math.abs(left[1] - current[1]) >
              Math.abs(right[0] - current[0]) + Math.abs(right[1] - current[1])
            ) {
              answer += "R";
              right = current;
            } else if (
              Math.abs(left[0] - current[0]) + Math.abs(left[1] - current[1]) <
              Math.abs(right[0] - current[0]) + Math.abs(right[1] - current[1])
            ) {
              answer += "L";
              left = current;
            } else {
              answer += hand[0].toUpperCase();
              if (hand === "left") left = current;
              if (hand === "right") right = current;
            }
          }
        }
    }
  }
  return answer;
}

console.log(solution([0, 1, 0, 1, 0, 0], "right"));
