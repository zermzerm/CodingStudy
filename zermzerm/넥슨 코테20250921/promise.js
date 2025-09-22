const getData = (id) => {
  return new Promise((res, rej) => {
    const data = getOriginalData(id);
    if (data) {
      res(data);
    } else {
      rej("Error");
    }
  });
};
