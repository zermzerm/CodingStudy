/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120880
 * 문제 이름 : 특이한 정렬
 * 문제 풀이 포인트: n씩 다 뺀걸 절대값순으로 해서 정렬후 절대값이 같으면 큰 수가 더 앞에 오게끔
 * 나의 실수: 콘솔 찍으면서 풀긴 풀었는데 왜 되는지 정확히 이해가 안간다...
 */

// 종민님 코드 대박
// 절대값이 같으면 0 -> ||은 0은 false값이라서 뒤에거로 됨 그래서 b-a로
function solution(numlist, n) {
  return (sortArr = numlist.sort(
    (a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a
  ));
}

// 다시 푼 코드
function solution(numlist, n) {
  numlist.sort((a, b) => a - b);
  const arr = numlist.map((el) => el - n);
  let sortArr = arr.sort((a, b) => Math.abs(a) - Math.abs(b));
  for (let i = 0; i < sortArr.length; i++) {
    if (Math.abs(sortArr[i]) === Math.abs(sortArr[i + 1])) {
      [sortArr[i], sortArr[i + 1]] = [sortArr[i + 1], sortArr[i]];
      i++;
    }
  }
  return sortArr.map((el) => el + n);
}

console.log(solution([10, 2], 6));

/* 예전에 푼 코드
function solution(numlist, n) {
    let answer = [];
    let arr = [...numlist];
    let arr2 = [...numlist].sort((a,b)=>b-a);
    arr.forEach((el,i)=>arr[i]=Math.abs(el-n));
    arr.sort((a,b)=>a-b);
    arr.forEach((arr1el)=>{
        arr2.forEach((arr2el)=>{
            if(Math.abs(arr2el-n)==arr1el)answer.push(arr2el);
        })
    })
    return [...new Set(answer)];
}
*/
