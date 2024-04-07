//처음 문제 이해 못함. 정수 반복할때 Array(몇).join(뭘로) 방식 처음 알음

function solution(food) {
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    arr.push(Array(Math.floor(food[i] / 2) + 1).join(i));
    //String(i).repeat(Math.floor(food[i]/2)); 이 방법이 더 좋은듯!
  }
  return arr.join("") + "0" + arr.reverse("").join("");
}

console.log(solution([1, 3, 4, 6]));
