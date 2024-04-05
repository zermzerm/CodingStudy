// https://school.programmers.co.kr/learn/courses/30/lessons/12918#
// 1. 숫자만 포함하는지 확인 가능한 reg 찾음.
// 2. reg 이용해서 숫자만 있는지 확인하고 이후에 길이 검증

const solution = (s) => {
    const reg = /^[0-9]*$/

    return reg.test(s) && (s.length === 6 || s.length === 4)
}
