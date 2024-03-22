/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12930
 * 문제 풀이 포인트: splice
 * 나의 실수: 더 짧게 못풀까..?
 */

const solution = (n) => {
  let arr = n.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let tmpArr = arr[i].split('');
    for (let j = 0; j < tmpArr.length; j++) {
      j % 2 === 0
        ? tmpArr.splice(j, 1, tmpArr[j].toUpperCase())
        : tmpArr.splice(j, 1, tmpArr[j].toLowerCase());
    }
    arr[i] = tmpArr.join('');
  }
  return arr.join(' ');
};

console.log(solution('try hello world'));
