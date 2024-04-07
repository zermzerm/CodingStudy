/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * 문제 풀이 포인트: yellow + brown = width * height 인 점을 고려하여 풀이
 * 나의 실수: 답안을 아주 살짝 본 것..
 * [ 풀이 과정 ]
 * 1. 전체 면적 = yellow + brown = width * height 로 정의 가능하다.
 * 2. yellow = (width - 2) * (height - 2) 로 정의 가능하다.
 * 3. brown = 전체 면적 - yellow로 정의 가능하다.
 * 4. 반복문을 통해 전체 면적의 width값을 구하면서 2, 3번 정의가 있는지 확인한다.
 */

const solution = (brown, yellow) => {
  const total = brown + yellow;

  for (let width = total - 1; width > 0; width--) {
    if (total % width) continue; // 나누어 떨어지지 않을 때 넘어간다.
    const height = total / width;
    const y = (width - 2) * (height - 2);
    const b = total - yellow;

    if (yellow == y && b === brown) return [width, height];
  }
};
