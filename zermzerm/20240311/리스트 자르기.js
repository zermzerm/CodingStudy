/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181897
 * 문제 이름: 리스트 자르기
 * 문제 풀이 포인트: filter
 * 나의 실수: switch case문 쓰는법 안익숙, filter의 index 생각 못하고 딴길로 갔다옴...
 */

function solution(n, slicer, num_list) {
  let answer = [];
  switch (n) {
    case 1:
      answer = num_list.slice(0, slicer[1] + 1);
      break;
    case 2:
      answer = num_list.slice(slicer[0]);
      break;
    case 3:
      answer = num_list.slice(slicer[0], slicer[1] + 1);
      break;
    case 4:
      answer = num_list
        .slice(slicer[0], slicer[1] + 1)
        .filter((_, index) => index % slicer[2] === 0);
      break;
  }
  return answer;
}
