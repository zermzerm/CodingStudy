/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42839
 * 문제 풀이 포인트: DFS, 소수 판별, 방문 확인 배열
 * 나의 실수: 소수 판별할때 등호를 붙이지 않아 충분히 검사하지 못하는 오류가 있었다.
 * [ 풀이 과정 ]
 * 1. DFS, 재귀를 활용하여 주어진 numbers로 만들 수 있는 숫자들을 answer Set 자료형에 추가한다.
 * 2. visited 방문 배열을 통해 사용했던 숫자인지 아닌지 판별하여 사용하지 않은 숫자들은 DFS(재귀)를 이용한다.
 * 2. dfs를 통해서 만들어진 answer를 소수 판별 함수를 활용하여 소수인 인자들의 길이를 return한다.
 */

const answer = new Set();

// 소수 판별 함수
const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num ** 0.5; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const dfs = (arr, numbers, visited) => {
  answer.add(+arr.join(""));

  if (arr.length === numbers.length) return; // 종료 조건

  for (let i = 0; i < numbers.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...arr, numbers[i]], numbers, visited);
      visited[i] = false;
    }
  }
};

const solution = (numbers) => {
  const visited = new Array(numbers.length).fill(false);
  dfs([], numbers, visited);
  return [...answer].filter((num) => isPrimeNumber(num)).length;
};
