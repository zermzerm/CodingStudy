/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/176963?language=javascript
 * 문제 풀이 포인트: 해시
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. nameScoreMap이라는 객체를 선언
 * 2. 반복문을 이용하여 각 name에 해당하는 index를 가지고 yearning에 해당하는 값을 기록한다.
 * 3. photo 배열의 이름으로 이루어진 배열 안의 값과 nameScoreMap의 key와 비교하여 존재하면 더해주고 존재하지 않으면 0을 더해준다.
 */

const solution = (names, yearning, photos) => {
  const nameScoreMap = {};
  names.forEach((name, idx) => (nameScoreMap[name] = yearning[idx]));
  return photos.map((photo) =>
    photo.reduce((a, b) => a + (nameScoreMap[b] ?? 0), 0)
  );
};
