/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12901
 * 문제 풀이 포인트: new Date의 getDay 함수 이용하기
 * 나의 실수: X
 * [ 풀이 과정 ]
 */

const solution = (a, b) => {
    const DAY_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    return DAY_OF_WEEK[new Date(`2016-${a}-${b}`).getDay()]
}
