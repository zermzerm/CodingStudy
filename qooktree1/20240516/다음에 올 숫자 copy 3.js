/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120924
 * 문제 풀이 포인트: 등차수열과 등비수열의 비교
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 등차 수열인지 확인 한 후 규칙이 보이면 반환한다.
 * 2. 반환되지 않으면 등비수열이기 때문에 등비수열의 규칙을 따른 마지막 원소 다음의 숫자를 반환한다.
 */

const solution = (common) => {
    if (common[2] - common[1] === common[1] - common[0])
        return common[common.length - 1] + common[2] - common[1]
    return common[common.length - 1] * (common[1] / common[0])
}
