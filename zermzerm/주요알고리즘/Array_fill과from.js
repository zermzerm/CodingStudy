let arr1 = new Array(5).fill([]);
// .fill()의 인자로 객체가 들어올 경우, 그 참조만 복사해서 배열을 채운다.
// 쉽게 말해, 배열안의 5개가 다 같은 주소값을 가지고 있어서 하나를 바꿔도 다같이 바뀐다
// .fill(0).map(x => []) 이렇게 하면 제대로 동작할 수 있다.

let arr2 = Array.from({ length: 5 }, () => []);

let arr3 = new Array(52).fill(0);
