function solution(numbers) {
  const set = new Set(); // 중복을 방지하기 위한 Set 객체를 생성합니다.

  // 가능한 모든 숫자 생성
  function generate(curr, remaining) {
    console.log(curr);
    if (curr.length > 0) {
      // 현재 숫자가 존재할 경우에만 처리합니다.
      if (!set.has(parseInt(curr))) {
        // Set에 현재 숫자가 존재하지 않으면 추가합니다.
        set.add(parseInt(curr));
      }
    }
    for (let i = 0; i < remaining.length; i++) {
      // 주어진 숫자의 나머지 숫자들에 대해 반복합니다.
      generate(
        curr + remaining[i], // 현재 숫자에 다음 숫자를 더하여 새로운 숫자를 생성합니다.
        remaining.slice(0, i) + remaining.slice(i + 1) // 다음 숫자를 제외한 나머지 숫자들을 구합니다.
      );
    }
  }

  // 주어진 숫자로 가능한 모든 숫자 생성
  generate("", numbers); // 초기값은 빈 문자열이고, 주어진 숫자들로 모든 숫자를 생성합니다.

  return set; // 생성된 모든 숫자를 포함한 Set을 반환합니다.
}

// console.log(solution("19"));
console.log(solution("0111"));
