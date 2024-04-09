const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

function DFS(graph, start) {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(start);

  // 탐색해야할 노드가 남아 있다면
  while (needVisit.length !== 0) {
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift 사용
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
      console.log(needVisit);
    }
  }
  return visited;
}

console.log(DFS(graph, "C"));
