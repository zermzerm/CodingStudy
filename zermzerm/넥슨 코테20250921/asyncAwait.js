async function getStockInformation(date) {
  //API endpoint : https://jsonmock.hackerrank.com/api/stocks?date=<date>
  let endpoint = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
  const resp = await fetch(endpoint);
  const result = resp.json();
  if (!result.data || result.data.length === 0) return {};
  else return result.data[0];
}
