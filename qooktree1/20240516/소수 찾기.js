/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12921
 * 문제 풀이 포인트: 에라토스테네스의 체
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 에라토스테네스의 체의 대한 개념에 대해 이해하여 코드에 적용
 * 2. numbers라는 false로 이루어진 n의 길이를 가진 배열을 만든 후 소수가 아닌 경우를 true 값으로 채운다.
 * 3. false인 경우는 소수이기 때문에 false의 개수를 구한다.
 */

const solution = (n) => {
    let numbers = Array.from({ length: n }, () => false)
    let j,
        answer = 0
    for (let i = 2; i <= n; i++) {
        j = 2
        while (i * j <= n) {
            numbers[i * j++ - 1] = true
        }
        if (!numbers[i]) answer++
    }
    return answer
}
