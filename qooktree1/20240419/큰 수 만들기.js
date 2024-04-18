/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42883
 * 문제 풀이 포인트: 스택
 * 나의 실수: 처음에 DFS로 풀어서 시간초과(제한 조건을 잘 읽자), 도저히 로직이 생각이 안나 다른 사람의 의사코드를 참고하였다.
 * [ 풀이 과정 ]
 * 1. 스택을 사용하여 반복문을 돌릴때마다 숫자를 push한다.
 * 2. 만약 k 즉, 제거해야할 수의 개수가 남아있고(0 이상) stack의 Top과 비교하여 현재 숫자가 클 경우 pop을 하며 k를 1씩 빼준다.
 * 2-1. 최대 숫자를 구하는 것이기 때문에 스택의 bottom부분에 큰 숫자들이 들어가야 하기 때문에 2번 과정을 while문을 사용한다.
 * 3. stack을 나열한 값을 join하며 반환하는 문자열의 길이는 number.length - k만큼의 길이를 가져야 하기 때문에 slice method를 사용한다.
 */

const solution = (number, k) => {
  const stack = [];
  for (const num of number) {
    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  return stack.join("").slice(0, number.length - k);
};
