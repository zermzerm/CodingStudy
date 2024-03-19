/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12940#
 * 문제 이름 : 최대공약수와 최소공배수
 */

// 나머지가 0인 것은 약수이다
function 약수구하기(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
}

function 최대공약수(n, m) {
  const 약수_n = 약수구하기(n);
  const 약수_m = 약수구하기(m);

  // 약수 길이가 n이 더 클때
  if (약수_n.length > 약수_m.length)
    // 약수_n 배열에서 약수_m이 포함 되어있는 것만 필터, 맨뒤 값 slice후 값 출력
    return 약수_n.filter((val) => 약수_m.includes(val)).slice(-1)[0];
  return 약수_m.filter((val) => 약수_n.includes(val)).slice(-1)[0];
}

// 최소 공배수 = n * m / 최대공약수(n, m)
function 최소공배수(n, m) {
  return (n * m) / 최대공약수(n, m);
}

function solution(n, m) {
  return [최대공약수(n, m), 최소공배수(n, m)];
}
