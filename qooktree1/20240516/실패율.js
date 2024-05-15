/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42889
 * 문제 풀이 포인트: 분모와 분자를 따로 분리하고 생각하여 실패율을 구해보자.
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 분모 즉, 스테이지에 도달한 플레이어 수를 denominator 변수에 저장한다.
 * 2. 1 부터 마지막 스테이지(N)까지 반복문을 사용한다.
 * 3. stages 배열에서 해당 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수를 구한다.
 * 4. ans 배열에 실패율과 인덱스 값을 배열로 push 한다.
 * 4-1. 분모 즉, 스테이지에 도달한 플레이어 수를 바꾸어준다.
 * 5. 실패율이 높은 스테이지부터 내림차순으로 정렬해야 하기 때문에 sort method와 map method를 사용한다.
 */

const solution = (N, stages) => {
    let denominator = stages.length
    const ans = []
    for (let i = 1; i <= N; i++) {
        const numerator = stages.filter((stage) => stage === i).length
        ans.push([numerator / denominator, i - 1])
        denominator -= numerator
    }
    return ans.sort((a, b) => b[0] - a[0]).map((arr) => arr[1] + 1)
}
