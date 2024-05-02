let remaining = "01234";
for (let i = 0; i < remaining.length; i++) {
  let tmp = remaining.slice(0, i) + remaining.slice(i + 1);
  console.log(tmp);
}
