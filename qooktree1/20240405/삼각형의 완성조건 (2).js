/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120868
 * 문제 풀이 포인트: 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1.나머지 한 변이 가장 긴 변인 경우와 가장 긴 변이 sides 배열에 있는 경우를 구하면 된다.
 * 2. sides에서 짧은 변을 short, 긴 변을 long이라 칭하자.
 * 3. 나머지 변은 long - short + 1부터 시작할 수 있다.
 * 4. 나머지 변이 long + short 보다 길어질 수는 없기 때문에 long + short - 1까지 가능하다.
 * 5. 나머지 변이 될 수 있는 경우의 수는 따라서 (long + short - 1) - (long - short + 1) + 1이다.
 * 6. 계산을 하면 2 * short - 1이다.
 */

const solution = (sides) => Math.min(...sides) * 2 - 1;
