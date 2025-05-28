function 팩토리얼(num) {
  console.log(num);
  //num===1 이 아니라 0에서 멈춰야되는 이유는 num===1로 했을 경우 팩토리얼(0)을 넣으면 무한히 마이너스로 내려간다.
  return num === 0 ? 1 : num * 팩토리얼(num - 1);
}

팩토리얼(5);
