/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/67256
 * 문제 풀이 포인트: 객체를 사용한 키패드 정의
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 왼손, 오른손을 거리에 따라서 판별해야 하는 함수를 따로 작성
 */
const moveHandByDist = (leftHand, rightHand, target, hand) => {
  const leftDist =
    Math.abs(leftHand[0] - target[0]) + Math.abs(leftHand[1] - target[1]);
  const rightDist =
    Math.abs(rightHand[0] - target[0]) + Math.abs(rightHand[1] - target[1]);

  if (leftDist > rightDist) return "right";
  if (leftDist < rightDist) return "left";
  return hand;
};

const solution = (numbers, hand) => {
  let answer = "";
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };
  let curLeftHand = [3, 0];
  let curRightHand = [3, 2];

  for (const number of numbers) {
    switch (String(number)) {
      case "1":
      case "4":
      case "7":
        curLeftHand = keyPad[String(number)];
        answer += "L";
        break;
      case "3":
      case "6":
      case "9":
        curRightHand = keyPad[String(number)];
        answer += "R";
        break;
      default:
        const usingHand = moveHandByDist(
          curLeftHand,
          curRightHand,
          keyPad[String(number)],
          hand
        );
        if (usingHand === "left") {
          curLeftHand = keyPad[String(number)];
          answer += "L";
        } else {
          curRightHand = keyPad[String(number)];
          answer += "R";
        }
    }
  }

  return answer;
};
