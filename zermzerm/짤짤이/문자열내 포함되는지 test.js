function solution(str1, str2) {
  return +str1.includes(str2);
}
console.log(solution("abc", "ab"));
// str1안에 str2가 있으면 1 없으면 0 반환 -> true false로 이용가능
