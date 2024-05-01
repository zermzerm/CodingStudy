//  //더 짧은 방법*******************************************************************
// function combinations(nums, n) {
//   // 기저 사례: n이 0이면 빈 배열 하나를 포함한 배열을 반환
//   if (n === 0) return [[]];
//   // 기저 사례: 배열의 길이가 0이거나 선택할 요소의 수 n보다 작으면 빈 배열 반환
//   if (nums.length === 0 || nums.length < n) return [];

//   // 배열의 첫 번째 요소를 선택한 경우와 선택하지 않은 경우를 고려하여 조합을 생성
//   const [first, ...rest] = nums;
//   // 첫 번째 요소를 선택한 경우와 선택하지 않은 경우를 재귀적으로 처리하여 조합을 생성
//   return [
//     // 첫 번째 요소를 선택한 경우: 첫 번째 요소를 제외한 나머지 배열에서 n-1개를 선택
//     ...combinations(rest, n - 1).map((comb) => [first, ...comb]),
//     // 첫 번째 요소를 선택하지 않은 경우: 첫 번째 요소를 제외한 나머지 배열에서 n개를 선택
//     ...combinations(rest, n),
//   ];
// }

// // 테스트를 위한 예제
// const nums = [1, 2, 3, 4, 5];
// const n = 0;
// const result = combinations(nums, n);
// console.log(result);

// 더 쉽지만 긴 방법**************************************************************
function combinations(nums, n) {
  // 결과를 담을 배열
  const result = [];

  // 백트래킹을 이용하여 조합을 생성하는 함수
  function backtrack(temp, start) {
    // 현재 조합이 원하는 길이(n)에 도달하면 결과 배열에 추가
    if (temp.length === n) {
      result.push([...temp]);
      return;
    }

    // 현재 위치부터 배열의 끝까지 반복하여 조합 생성
    // 처음 start는 undefined라서 0으로 간주됨
    for (let i = start; i < nums.length; i++) {
      // 현재 요소를 임시 배열에 추가
      temp.push(nums[i]);
      // 다음 요소부터 재귀적으로 탐색하여 조합 완성
      backtrack(temp, i + 1);
      // 재귀 호출 이후에는 다시 이전의 상태로 복구해야 함
      temp.pop();
    }
  }

  // 백트래킹 함수 호출하여 조합 생성 시작
  backtrack([], 0);
  // 완성된 모든 조합 반환
  return result;
}

// 테스트를 위한 예제
const nums = [1, 2, 3, 4, 5];
const n = 3;
const result = combinations(nums, n);
console.log(result);
