/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120866
 * 문제 풀이 포인트: 벡터 이동
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 현재 x, y 좌표에서 8방면으로 이동한 좌표를 비교하여 폭탄의 범위에 있는지 확인한다.
 * 2. 안전 지역이 아닌 경우 2로 채워준다.
 * 3. 후에 2중 반복문을 이용하여 0 즉, 안전한 지역의 개수를 count하여 반환해준다.
 */

const dx = [1, 1, 1, 0, 0, -1, -1, -1]
const dy = [0, 1, -1, 1, -1, -1, 0, 1]

/** 좌표가 범위안에 있는지 확인하는 함수 */
const isInArea = (n, x, y) => 0 <= x && x < n && 0 <= y && y < n

const solution = (board) => {
    const n = board.length
    let answer = 0
    let ni, nj

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                for (let d = 0; d < 8; d++) {
                    ni = i + dx[d]
                    nj = j + dy[d]
                    if (isInArea(n, ni, nj) && board[ni][nj] === 0)
                        board[ni][nj] = 2
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) answer++
        }
    }
    return answer
}
